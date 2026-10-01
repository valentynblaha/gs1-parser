import { describe, it, expect } from "vitest";
import { tokenizeBarcode, validateTokens } from "../src/barcodeTokenizer";

const GS = "\x1D";
const GTIN = "0101234567890128"; // AI 01 + 14 digits

describe("Tokenizer error handling", () => {
  //
  // VALID INPUT — NO ERRORS
  //
  describe("valid barcodes", () => {
    it("recognises known AIs and reports no errors", () => {
      const tokens = tokenizeBarcode(GTIN + "10LOT123" + GS + "17260101");

      expect(tokens.map(t => t.ai)).toEqual(["01", "10", "17"]);
      for (const token of tokens) {
        expect(token.definition).not.toBeNull();
        expect(token.errors ?? []).toEqual([]);
      }
      expect(validateTokens(tokens)).toEqual({ isValid: true, errors: [] });
    });

    it("recognises 3- and 4-digit AIs", () => {
      const tokens = tokenizeBarcode("235ABC" + GS + "7003" + "2601011230");

      expect(tokens.map(t => t.ai)).toEqual(["235", "7003"]);
      expect(tokens.every(t => t.definition !== null)).toBe(true);
    });
  });

  //
  // UNKNOWN AI — LENIENT MODE (default)
  //
  describe("unknown AI without throwOnTokenizationError", () => {
    it("does not throw by default", () => {
      expect(() => tokenizeBarcode(GTIN + "04XYZ")).not.toThrow();
      expect(() => tokenizeBarcode(GTIN + "04XYZ", { throwOnTokenizationError: false })).not.toThrow();
    });

    it("emits a token with null definition and an error for an unknown 2-digit AI", () => {
      const tokens = tokenizeBarcode(GTIN + "04XYZ");

      expect(tokens).toHaveLength(2);
      const unknown = tokens[1];
      expect(unknown.ai).toBe("04");
      expect(unknown.value).toBe("XYZ");
      expect(unknown.isFixed).toBe(false);
      expect(unknown.definition).toBeNull();
      expect(unknown.errors).toEqual([`Unknown AI at position 16: "04"`]);
    });

    it("emits the full unknown prefix for an unknown 3-digit AI", () => {
      // "23" is a valid prefix (AI 235) but "236" is not defined
      const tokens = tokenizeBarcode(GTIN + "236ABC");

      const unknown = tokens[1];
      expect(unknown.ai).toBe("236");
      expect(unknown.value).toBe("ABC");
      expect(unknown.definition).toBeNull();
      expect(unknown.errors).toEqual([`Unknown AI at position 16: "236"`]);
    });

    it("emits the full unknown prefix for an unknown 4-digit AI", () => {
      // "701" is a valid prefix (AI 7010, 7011) but "7012" is not defined
      const tokens = tokenizeBarcode(GTIN + "7012ABC");

      const unknown = tokens[1];
      expect(unknown.ai).toBe("7012");
      expect(unknown.value).toBe("ABC");
      expect(unknown.definition).toBeNull();
    });

    it("resumes tokenizing after the group separator following an unknown AI", () => {
      const tokens = tokenizeBarcode("04XYZ" + GS + GTIN + "10LOT1");

      expect(tokens.map(t => t.ai)).toEqual(["04", "01", "10"]);
      expect(tokens[0].definition).toBeNull();
      expect(tokens[0].errors).toEqual([`Unknown AI at position 0: "04"`]);
      expect(tokens[1].value).toBe("01234567890128");
      expect(tokens[1].definition).not.toBeNull();
      expect(tokens[2].value).toBe("LOT1");
    });

    it("stops gracefully when the remaining data is too short to contain an AI", () => {
      const tokens = tokenizeBarcode(GTIN + "1");

      expect(tokens.map(t => t.ai)).toEqual(["01"]);
    });
  });

  //
  // UNKNOWN AI — STRICT MODE
  //
  describe("unknown AI with throwOnTokenizationError", () => {
    const strict = { throwOnTokenizationError: true };

    it("throws for an unknown 2-digit AI", () => {
      expect(() => tokenizeBarcode(GTIN + "04XYZ", strict)).toThrow(/Unknown AI at position 16/);
    });

    it("throws for an unknown 3-digit AI", () => {
      expect(() => tokenizeBarcode(GTIN + "236ABC", strict)).toThrow(/Unknown AI at position 16/);
    });

    it("includes the remaining barcode in the error message", () => {
      expect(() => tokenizeBarcode(GTIN + "04XYZ", strict)).toThrow('Remaining barcode: "04XYZ"');
    });

    it("throws when the remaining data is too short to contain an AI", () => {
      expect(() => tokenizeBarcode(GTIN + "1", strict)).toThrow(
        /Failed to identify valid AI at position 16/,
      );
    });

    it("does not throw for valid barcodes", () => {
      expect(() => tokenizeBarcode(GTIN + "10LOT123", strict)).not.toThrow();
    });
  });

  //
  // VALIDATION OF TOKENS
  //
  describe("validateTokens", () => {
    it("reports tokenization errors of unknown AIs", () => {
      const result = validateTokens(tokenizeBarcode(GTIN + "04XYZ"));

      expect(result.isValid).toBe(false);
      expect(result.errors).toEqual([{ ai: "04", error: `Unknown AI at position 16: "04"` }]);
    });

    it("reports each unknown AI separately", () => {
      const result = validateTokens(tokenizeBarcode("04A" + GS + "236B"));

      expect(result.errors.map(e => e.ai)).toEqual(["04", "236"]);
    });

    it("falls back to a generic message when an unknown token has no errors", () => {
      const result = validateTokens([{ ai: "04", value: "X", isFixed: false, definition: null }]);

      expect(result).toEqual({ isValid: false, errors: [{ ai: "04", error: "Unknown AI" }] });
    });

    it("reports a truncated fixed-length value", () => {
      const tokens = tokenizeBarcode("01012345");

      expect(tokens[0].value).toBe("012345");
      expect(validateTokens(tokens).errors).toEqual([{ ai: "01", error: "Expected length 14, got 6" }]);
    });

    it("reports an empty variable-length value", () => {
      const tokens = tokenizeBarcode("10" + GS + GTIN);

      expect(tokens.map(t => t.ai)).toEqual(["10", "01"]);
      expect(validateTokens(tokens).errors).toEqual([
        { ai: "10", error: "Variable length field cannot be empty" },
      ]);
    });
  });
});
