import type { AIDefinitions } from "./aiDefinitions";
import type { ElementType } from "./utils";

export type GS1DecodedData = string | number | Date;
export interface ParserParams {
  rawValue: string;
  ai: string;
  definition: AIDefinition;
  options: ParserOptions;
}

/**
 * Represents a single token from the barcode
 */
export interface BarcodeToken {
  /** The AI (Application Identifier) code */
  ai: string;
  /** The raw data value for this AI */
  value: string;
  /** Whether this AI has a fixed length or is variable */
  isFixed: boolean;
  /** The definition of this AI from AIDefinitions */
  definition: (typeof AIDefinitions)[string] | null; // TODO: check type
  /** The position in the barcode string where the next token starts */
  errors?: string[]; // Optional array of tokenization errors for this token
}

export type ParserFunction<T> = (params: ParserParams) => ParsedElement<T>;
export interface AIDefinition {
  propertyName: string;
  title: string;
  /** Decimal point position - array of valid values for AIs that support variable decimal positions */
  dpp?: number[];
  /** Serial suffix - array of valid values for AIs that support variable serial suffixes (e.g., 703s, 723s) */
  serial?: number[];
  fixedLength?: number;
  parser: ParserFunction<GS1DecodedData>;
  unit?: string; // Optional unit for the AI, e.g., "°C", "kg", etc.
}

export interface ParsedElement<T> {
  ai: string;
  dataTitle: string;
  data: T;
  dataString: string;
  unit: string;
  type: ElementType;
  errors?: string[];
}

export interface BarcodeAnswer {
  codeName: string;
  denormalized: string;
  parsedCodeItems: ParsedElement<GS1DecodedData>[];
}

/**
 * Options that tweak the parser's behavior
 */
export interface ParserOptions {
  /**
   * The FNC1 character, a non-printable special character that delimits fields of variable length.
   * If not specified, the GS char (\x1D) is used
   */
  fncChar?: string;

  /**
   * The lot (or batch) field is usually delimited by a FNC1 char, but you can limit its size to a specific length.
   * If not specified, no limit is applied, except the one in the GS1 specs
   */
  lotMaxLength?: number;

  /**
   * If true, date fields are returned as UTC timestamps instead of local dates
   */
  utcTimestamps?: boolean;

  /**
   * If true, the parser will throw an error when it encounters a tokenization error (e.g., unknown AI, unexpected end of barcode, etc.)
   * If false, the parser will continue parsing and return the tokens it could parse, along with any errors encountered
   * Default is false
   */
  throwOnTokenizationError?: boolean;
}
