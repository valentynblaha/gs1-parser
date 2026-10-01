import type { ParsedElement, ParserParams } from "./types";
import {
  BarcodeError,
  BarcodeErrorCodes,
  checkValidDate,
  ElementType,
  InternalError,
  InvalidAiError,
  NUMERIC_REGEX,
  ParsedElementClass,
} from "./utils";

/**
 * Used for calculating numbers which are given as string
 * with a given number of fractional decimals.
 *
 * To avoid conversion errors binary <-> decimal I _don't_
 * just divide by 10 numberOfFractionals times.
 *
 * @param stringToParse the string to parse as a number
 * @param numberOfFractionals the number of fractional decimals
 * @param negative whether the number is negative
 * @returns the parsed number
 */
export function parseFloatingPoint(
  stringToParse: string,
  numberOfFractionals: number,
  negative: boolean = false,
): number {
  const offset = stringToParse.length - numberOfFractionals;
  const auxString =
    (negative ? "-" : "") + stringToParse.slice(0, offset) + "." + stringToParse.slice(offset);
  try {
    return Number.parseFloat(auxString);
  } catch (error_) {
    throw new InternalError("36", error_ as Error);
  }
}

/**
 * Dates in GS1-elements have the format "YYMMDD".
 * This function generates a new ParsedElement and tries to fill a
 * JS-date into the "data"-part.
 * @param codestring The codestring to parse the date from
 * @param ai The AI to use for the ParsedElement
 * @param definition AI definition
 * @param options Parser options
 */
export function parseDate(params: ParserParams): ParsedElement<Date> {
  const { rawValue, ai, definition } = params;
  const elementToReturn = new ParsedElementClass<Date>(ai, definition.title, ElementType.D);

  const dateYYMMDD = rawValue;

  if (params.options.utcTimestamps) {
    elementToReturn.data.setUTCHours(0, 0, 0, 0);
  } else {
    elementToReturn.data.setHours(0, 0, 0, 0);
  }

  if (dateYYMMDD.length !== 6) {
    throw new BarcodeError(
      BarcodeErrorCodes.FixedLengthDataTooShort,
      "37",
      `Data length ${dateYYMMDD.length} is less than expected length 6 for AI "${ai}".`,
    );
  }

  if (!NUMERIC_REGEX.test(dateYYMMDD)) {
    throw new BarcodeError(
      BarcodeErrorCodes.NumericDataExpected,
      "39",
      `Numeric data expected for AI "${ai}", but got "${dateYYMMDD}".`,
    );
  }

  let yearAsNumber;
  let monthAsNumber;
  let dayAsNumber;

  try {
    yearAsNumber = Number.parseInt(dateYYMMDD.slice(0, 2), 10);
  } catch (error_) {
    throw new InternalError("33", error_ as Error);
  }

  try {
    monthAsNumber = Number.parseInt(dateYYMMDD.slice(2, 4), 10) - 1;
  } catch (error_) {
    throw new InternalError("34", error_ as Error);
  }

  try {
    dayAsNumber = Number.parseInt(dateYYMMDD.slice(4, 6), 10);
  } catch (error_) {
    throw new InternalError("35", error_ as Error);
  }

  // we are in the 21st century, but section 7.12 of the specification
  // states that years 51-99 should be considered to belong to the
  // 20th century:
  const currentCentury = Math.floor(new Date().getFullYear() / 100);
  const currentYear = new Date().getFullYear() % 100;
  const diff = yearAsNumber - currentYear;
  if (diff >= 51 && diff <= 99) {
    yearAsNumber = (currentCentury - 1) * 100 + yearAsNumber;
  } else if (diff >= -99 && diff <= -50) {
    yearAsNumber = (currentCentury + 1) * 100 + yearAsNumber;
  } else {
    yearAsNumber = currentCentury * 100 + yearAsNumber;
  }

  if (!checkValidDate(yearAsNumber, monthAsNumber, dayAsNumber)) {
    throw new BarcodeError(
      BarcodeErrorCodes.InvalidDate,
      "36",
      `Invalid date "${dateYYMMDD}" for AI "${ai}".`,
    );
  }

  if (dayAsNumber === 0) {
    monthAsNumber++;
  }

  if (params.options.utcTimestamps) {
    elementToReturn.data.setUTCFullYear(yearAsNumber, monthAsNumber, dayAsNumber);
  } else {
    elementToReturn.data.setFullYear(yearAsNumber, monthAsNumber, dayAsNumber);
  }

  elementToReturn.dataString = rawValue;
  return elementToReturn;
}

/**
 * Simple: the element has a fixed length AND is not followed by an FNC1.
 */
export function parseFixedLength(params: ParserParams): ParsedElement<string> {
  const { rawValue, ai, definition } = params;
  const elementToReturn = new ParsedElementClass<string>(ai, definition.title, ElementType.S);
  const length = definition.fixedLength ?? 0;

  if (rawValue.length < length) {
    throw new BarcodeError(
      BarcodeErrorCodes.FixedLengthDataTooShort,
      "37",
      `Data length ${rawValue.length} is less than expected length ${length} for AI "${ai}".`,
    );
  }

  // TODO: handle numeric case

  elementToReturn.data = rawValue;
  elementToReturn.dataString = elementToReturn.data;
  return elementToReturn;
}

/**
 * tries to parse an element of variable length
 * some fixed length AIs are terminated by FNC1, so this function
 * is used even for fixed length items
 */
export function parseVariableLength(params: ParserParams): ParsedElement<string> {
  const { rawValue, ai, definition } = params;
  const elementToReturn = new ParsedElementClass<string>(ai, definition.title, ElementType.S);

  elementToReturn.data = rawValue;

  if (elementToReturn.data === "") {
    throw new BarcodeError(
      BarcodeErrorCodes.EmptyVariableLengthData,
      "38",
      `Variable length data for AI "${ai}" is empty.`,
    );
  }

  // TODO: handle numeric case
  //   if (numeric && !NUMERIC_REGEX.test(elementToReturn.data)) {
  //     throw new BarcodeError(
  //       BarcodeErrorCodes.NumericDataExpected,
  //       "39",
  //       `Numeric data expected for AI "${ai}", but got "${elementToReturn.data}".`,
  //     );
  //   }

  elementToReturn.dataString = elementToReturn.data;

  return elementToReturn;
}

/**
 * Parses data elements of variable length, which additionally have
 *
 * - an indicator for the number of valid decimals
 * - an implicit unit of measurement
 *
 * These data elements contain e.g. a weight or length.
 */
export function parseVariableLengthMeasure(params: ParserParams): ParsedElement<number> {
  const { rawValue, ai, definition } = params;
  // the place of the decimal fraction is given by the fourth number, that's
  // the first after the identifier itself.
  const numberOfDecimals = params.definition.dpp?.includes(Number.parseInt(rawValue.substring(0, 1), 10))
    ? Number.parseInt(rawValue.substring(0, 1), 10)
    : undefined;
  if (
    !numberOfDecimals ||
    Number.isNaN(numberOfDecimals) ||
    !(definition.dpp ?? []).includes(numberOfDecimals)
  ) {
    throw new InvalidAiError(ai, rawValue.substring(0, 1));
  }
  const elementToReturn = new ParsedElementClass<number>(
    ai + numberOfDecimals,
    definition.title,
    ElementType.N,
  );

  elementToReturn.data = parseFloatingPoint(
    rawValue.substring(0, rawValue.length - numberOfDecimals),
    numberOfDecimals,
  );
  elementToReturn.dataString = rawValue;
  elementToReturn.unit = "";
  return elementToReturn;
}

/**
 * The place of the decimal fraction is given by the fourth number, that's
 * the first after the identifier itself.
 *
 * All of theses elements have a length of 6 characters.
 */
export function parseFixedLengthMeasure(params: ParserParams): ParsedElement<number> {
  const { rawValue: codestring, ai, definition } = params;
  const fourthNumber = params.definition.dpp?.includes(Number.parseInt(codestring.substring(0, 1), 10))
    ? codestring.substring(0, 1)
    : undefined;

  if (!fourthNumber) {
    throw new InvalidAiError(ai, codestring.substring(0, 1));
  }
  const elementToReturn = new ParsedElementClass<number>(ai, definition.title, ElementType.N);

  if (!NUMERIC_REGEX.test(fourthNumber)) {
    throw new InvalidAiError(ai, fourthNumber);
  }

  const numberOfDecimals = Number.parseInt(fourthNumber, 10);
  const numberPart = codestring.slice(1, 7);

  if (!NUMERIC_REGEX.test(numberPart)) {
    throw new BarcodeError(
      BarcodeErrorCodes.NumericDataExpected,
      "39",
      `Numeric data expected for AI "${ai}", but got "${numberPart}".`,
    );
  }

  elementToReturn.data = parseFloatingPoint(numberPart, numberOfDecimals);
  elementToReturn.dataString = numberPart;
  return elementToReturn;
}

/**
 * The place of the decimal fraction is given by the AI definition
 *
 * All of theses elements have a length of 6 characters.
 */
export function parseTemperature(params: ParserParams): ParsedElement<number> {
  const { rawValue, ai, definition } = params;
  const elementToReturn = new ParsedElementClass<number>(ai, definition.title, ElementType.N);

  if (rawValue.length < 6) {
    throw new BarcodeError(
      BarcodeErrorCodes.FixedLengthDataTooShort,
      "40",
      `Data length ${rawValue.length} is less than expected length 6 for AI "${ai}".`,
    );
  }

  const isNegative = ["-", "\u2013", "—"].includes(rawValue.substring(rawValue.length - 1));
  let numberPart = rawValue;
  if (isNegative) {
    numberPart = rawValue.substring(0, rawValue.length - 1);
  }

  if (!NUMERIC_REGEX.test(numberPart)) {
    throw new BarcodeError(
      BarcodeErrorCodes.NumericDataExpected,
      "39",
      `Numeric data expected for AI "${ai}", but got "${numberPart}".`,
    );
  }

  elementToReturn.data = parseFloatingPoint(numberPart, 2, isNegative);
  elementToReturn.dataString = rawValue;
  elementToReturn.unit = params.definition.unit ?? "";

  return elementToReturn;
}

/**
 * parses data elements of variable length, which additionally have
 *
 * - an indicator for the number of valid decimals
 * - an explicit unit of measurement
 *
 * These data element contain amounts to pay or prices.
 * @param {String} ai_stem      the first digits of the AI, _not_ the fourth digit
 * @param {Number} fourthNumber the 4th number indicating the count of valid fractionals
 * @param {String} title        the title of the AI
 * @param {String} codestring   the codestring to parse from
 * @param {String} fncChar      the FNC-character to remove
 */
export function parseVariableLengthWithISONumbers(params: ParserParams): ParsedElement<number> {
  // an element of variable length, representing a number, followed by
  // some ISO-code.
  const { rawValue: codestring, ai, definition } = params;

  const numberOfDecimals = params.definition.dpp?.includes(Number.parseInt(codestring.substring(0, 1), 10))
    ? Number.parseInt(codestring.substring(0, 1), 10)
    : undefined;
  if (
    !numberOfDecimals ||
    Number.isNaN(numberOfDecimals) ||
    !(definition.dpp ?? []).includes(numberOfDecimals)
  ) {
    throw new InvalidAiError(ai, codestring.substring(0, 1));
  }

  const elementToReturn = new ParsedElementClass<number>(
    ai + numberOfDecimals,
    definition.title,
    ElementType.N,
  );

  // cut off ISO-Code
  const numberPart = codestring.slice(3, codestring.length);
  elementToReturn.data = parseFloatingPoint(numberPart, numberOfDecimals);
  elementToReturn.dataString = numberPart;
  elementToReturn.unit = codestring.slice(0, 3);

  return elementToReturn;
}

/**
 * parses data elements of variable length, which additionally have
 *
 * - an explicit unit of measurement or reference
 *
 * These data element contain countries, authorities within countries.
 * @param {String} ai_stem      the first digits of the AI, _not_ the fourth digit
 * @param {String} title        the title of the AI
 * @param {String} codestring   the codestring to parse from
 * @param {String} fncChar      the FNC-character to remove
 */
export function parseVariableLengthWithISOChars(params: ParserParams): ParsedElement<string> {
  // an element of variable length, representing a sequence of chars, followed by
  // some ISO-code.
  const { rawValue: codestring, ai, definition } = params;
  const numberOfDecimals = params.definition.serial?.includes(Number.parseInt(codestring.substring(0, 1), 10))
    ? Number.parseInt(codestring.substring(0, 1), 10)
    : undefined;
  if (
    !numberOfDecimals ||
    Number.isNaN(numberOfDecimals) ||
    !(definition.serial ?? []).includes(numberOfDecimals)
  ) {
    throw new InvalidAiError(ai, codestring.substring(0, 1));
  }

  const elementToReturn = new ParsedElementClass<string>(
    ai + numberOfDecimals,
    definition.title,
    ElementType.S,
  );

  // cut off ISO-Code
  elementToReturn.data = codestring.slice(3, codestring.length);
  elementToReturn.unit = codestring.slice(0, 3);
  elementToReturn.dataString = codestring;

  return elementToReturn;
}
