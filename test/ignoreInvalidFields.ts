import { describe, expect, it } from "vitest";
import { ElementType, GS1Field, GS1Parser } from "../src/index";
import { GROUP_SEPARATOR } from "../src/utils";

const GS = GROUP_SEPARATOR;
const VALID_GTIN = "0101234567890128";

// First-digit "5" and "6" are not assigned to any AI, so any codestring
// starting with them is an unrecognized AI and throws InvalidAiError.
const UNKNOWN_AI_SEGMENT = "6XYZAAA";

describe("ignoreInvalidFields option", () => {
  it("throws by default (flag not set) when an unrecognized AI is encountered", () => {
    const parser = new GS1Parser();
    const barcode = VALID_GTIN + GS + UNKNOWN_AI_SEGMENT + GS + "10LOT123";
    expect(() => parser.decode(barcode)).toThrow();
  });

  it("throws when the flag is explicitly false", () => {
    const parser = new GS1Parser({ ignoreInvalidFields: false });
    const barcode = VALID_GTIN + GS + UNKNOWN_AI_SEGMENT + GS + "10LOT123";
    expect(() => parser.decode(barcode)).toThrow();
  });

  it("silently skips an unrecognized AI segment when the flag is true", () => {
    const parser = new GS1Parser({ ignoreInvalidFields: true });
    const barcode = VALID_GTIN + GS + UNKNOWN_AI_SEGMENT + GS + "10LOT123";

    expect(() => parser.decode(barcode)).not.toThrow();
    const result = parser.decode(barcode);

    expect(result.isValid).toBeTruthy();
    expect(result.data[GS1Field.GTIN]?.data).toBe("01234567890128");
    expect(result.data[GS1Field.BATCH]?.data).toBe("LOT123");
    // the skipped segment must not show up as a parsed (error) element
    expect(Object.keys(result.data)).toHaveLength(2);
  });

  it("skips an unrecognized AI even when it is the last segment of the barcode", () => {
    const parser = new GS1Parser({ ignoreInvalidFields: true });
    const barcode = VALID_GTIN + GS + UNKNOWN_AI_SEGMENT;

    const result = parser.decode(barcode);
    expect(result.isValid).toBeTruthy();
    expect(result.data[GS1Field.GTIN]?.data).toBe("01234567890128");
    expect(Object.keys(result.data)).toHaveLength(1);
  });

  it("skips multiple unrecognized AI segments in the same barcode", () => {
    const parser = new GS1Parser({ ignoreInvalidFields: true });
    const barcode =
      VALID_GTIN + GS + UNKNOWN_AI_SEGMENT + GS + "10LOT123" + GS + UNKNOWN_AI_SEGMENT + GS + "21SER1234";

    const result = parser.decode(barcode);
    expect(result.isValid).toBeTruthy();
    expect(result.data[GS1Field.GTIN]?.data).toBe("01234567890128");
    expect(result.data[GS1Field.BATCH]?.data).toBe("LOT123");
    expect(result.data[GS1Field.SERIAL]?.data).toBe("SER1234");
    expect(Object.keys(result.data)).toHaveLength(3);
  });

  it("still surfaces genuinely invalid data for a *recognized* AI, even with the flag set", () => {
    // AI 17 is a recognized AI, so a malformed date is an ElementType.Error,
    // not a thrown/skipped "unrecognized AI" - ignoreInvalidFields must not hide it.
    const parser = new GS1Parser({ ignoreInvalidFields: true });
    const barcode = VALID_GTIN + "17" + "991332"; // month 13 is invalid

    const result = parser.decode(barcode);
    expect(result.isValid).toBeFalsy();
    expect(result.data[GS1Field.EXP_DATE]?.type).toBe(ElementType.Error);
  });

  it("can be toggled at runtime via setOptions", () => {
    const parser = new GS1Parser();
    const barcode = VALID_GTIN + GS + UNKNOWN_AI_SEGMENT + GS + "10LOT123";

    expect(() => parser.decode(barcode)).toThrow();

    parser.setOptions({ ignoreInvalidFields: true });
    const result = parser.decode(barcode);
    expect(result.isValid).toBeTruthy();
    expect(result.data[GS1Field.BATCH]?.data).toBe("LOT123");
  });
});
