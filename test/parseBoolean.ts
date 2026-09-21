import { describe, expect, it } from "vitest";
import { parseBoolean } from "../src/parsers";
import { BarcodeError, BarcodeErrorCodes, ElementType, GROUP_SEPARATOR, ParsedElementClass } from "../src/utils";
import { GS1Field, GS1Parser } from "../src/index";

const GS = GROUP_SEPARATOR;
const VALID_GTIN = "0101234567890128";

describe("parseBoolean (unit)", () => {
  it("parses '1' as true", () => {
    const result = parseBoolean("4321", "DANGEROUS GOODS", "43211", GS);
    expect(result.element.type).toBe(ElementType.Boolean);
    expect(result.element.data).toBe(true);
    expect(result.element.dataString).toBe("1");
    expect(result.element.ai).toBe("4321");
    expect(result.element.dataTitle).toBe("DANGEROUS GOODS");
  });

  it("parses '0' as false", () => {
    const result = parseBoolean("4321", "DANGEROUS GOODS", "43210", GS);
    expect(result.element.type).toBe(ElementType.Boolean);
    expect(result.element.data).toBe(false);
    expect(result.element.dataString).toBe("0");
  });

  it("treats any character other than '1' as false", () => {
    for (const char of ["0", "2", "9", "x", " "]) {
      const result = parseBoolean("4321", "DANGEROUS GOODS", "4321" + char, GS);
      expect(result.element.data).toBe(false);
    }
  });

  it("only looks at the first character of the data", () => {
    const result = parseBoolean("4321", "DANGEROUS GOODS", "43211" + GS + "10LOT", GS);
    expect(result.element.data).toBe(true);
    expect(result.element.dataString).toBe("1");
  });

  it("stops the data at the FNC1 char and returns the remainder as codestring", () => {
    const result = parseBoolean("4321", "DANGEROUS GOODS", "43210" + GS + "10LOT", GS);
    expect(result.element.dataString).toBe("0");
    expect(result.codestring).toBe("10LOT");
  });

  it("consumes the rest of the codestring when there's no FNC1 char (last element)", () => {
    const result = parseBoolean("4321", "DANGEROUS GOODS", "43211", GS);
    expect(result.element.dataString).toBe("1");
    expect(result.codestring).toBe("");
  });

  it("errors out on empty data (no FNC1, nothing after the AI)", () => {
    const result = parseBoolean("4321", "DANGEROUS GOODS", "4321", GS);
    expect(result.element.type).toBe(ElementType.Error);
    expect(result.element.data).toBeNull();
    expect(result.element.dataString).toBe("");
    const parsedElement = result.element as ParsedElementClass<boolean>;
    expect(parsedElement.error).toBeInstanceOf(BarcodeError);
    expect((parsedElement.error as BarcodeError).num).toBe(BarcodeErrorCodes.EmptyVariableLengthData);
  });

  it("errors out on empty data when an FNC1 follows immediately, but still returns the remainder", () => {
    const result = parseBoolean("4321", "DANGEROUS GOODS", "4321" + GS + "10LOT", GS);
    expect(result.element.type).toBe(ElementType.Error);
    expect(result.codestring).toBe("10LOT");
  });
});

describe("parseBoolean (through GS1Parser)", () => {
  const parser = new GS1Parser();

  const booleanAiCases: [string, GS1Field][] = [
    ["4321", GS1Field.DANGEROUS_GOODS],
    ["4322", GS1Field.AUTH_LEAVE],
    ["4323", GS1Field.SIG_REQUIRED],
  ];

  for (const [ai, field] of booleanAiCases) {
    it(`parses AI ${ai} as a boolean field`, () => {
      const truthy = parser.decode(VALID_GTIN + ai + "1");
      expect(truthy.data[field]?.type).toBe(ElementType.Boolean);
      expect(truthy.data[field]?.data).toBe(true);

      const falsy = parser.decode(VALID_GTIN + ai + "0");
      expect(falsy.data[field]?.data).toBe(false);
    });
  }

  it("is followed correctly by another element separated by FNC1", () => {
    const result = parser.decode(VALID_GTIN + "4321" + "1" + GS + "10LOT123");
    expect(result.data[GS1Field.DANGEROUS_GOODS]?.data).toBe(true);
    expect(result.data[GS1Field.BATCH]?.data).toBe("LOT123");
    expect(result.isValid).toBeTruthy();
  });

  it("marks the barcode as invalid when the boolean field has no data", () => {
    const result = parser.decode(VALID_GTIN + "4321");
    expect(result.isValid).toBeFalsy();
    expect(result.data[GS1Field.DANGEROUS_GOODS]?.type).toBe(ElementType.Error);
  });
});
