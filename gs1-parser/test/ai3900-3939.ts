import { describe, expect, it } from "vitest";
import { AIMap } from "../src/aiNames";
import { DecodeResult, GS1Parser } from "../src/index";
import { parseFloatingPoint } from "../src/parsers";

const GS = "\x1D";
const VALID_GTIN = "0101234567890128";
const DECIMALS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/** Looks up a decoded element by its AI, independent of the GS1Field name. */
function findByAi(result: DecodeResult, ai: string) {
  return Object.values(result.data).find(element => element?.ai === ai);
}

/** Builds the expected number by inserting the decimal point into a zero-padded digit string. */
function expectedValue(digits: string, decimals: number): number {
  const padded = digits.padStart(decimals + 1, "0");
  const split = padded.length - decimals;
  return Number(padded.slice(0, split) + "." + padded.slice(split));
}

describe("parseFloatingPoint", () => {
  const cases: Array<[string, number, number]> = [
    // enough digits
    ["123456", 4, 12.3456],
    ["026", 3, 0.026],
    ["5", 0, 5],
    ["123", 3, 0.123],
    ["999999999999999", 9, 999999.999999999],
    // fewer digits than implied decimals: must be left-padded with zeros
    ["5", 2, 0.05],
    ["26", 3, 0.026],
    ["1", 3, 0.001],
    ["99", 3, 0.099],
    ["5", 4, 0.0005],
    ["12", 9, 0.000000012],
    ["0", 9, 0],
  ];

  for (const [digits, decimals, expected] of cases) {
    it(`parses "${digits}" with ${decimals} decimals as ${expected}`, () => {
      expect(parseFloatingPoint(digits, decimals)).toBe(expected);
    });
  }

  it("left-pads negative values with zeros", () => {
    expect(parseFloatingPoint("5", 2, true)).toBeCloseTo(-0.05, 4);
  });
});

describe("GS1 AIs 3900-3939 (amounts payable / prices)", () => {
  const parser = new GS1Parser();

  describe("AIMap covers n = 0..9 for every family", () => {
    for (const stem of ["390", "391", "392", "393"]) {
      for (const n of DECIMALS) {
        it(`has an AIMap entry for AI ${stem}${n}`, () => {
          expect(AIMap[`ai${stem}${n}`]).toBeDefined();
        });
      }
    }
  });

  describe("values shorter than the number of implied decimals", () => {
    const cases: Array<[string, string, number, string?]> = [
      // [barcode, ai, expected value, expected currency]
      ["]C139225", "3922", 0.05],
      ["]C1392326", "3923", 0.026],
      ["]C139231", "3923", 0.001],
      ["]C13923026", "3923", 0.026],
      ["]C139025", "3902", 0.05],
      ["]C1390307", "3903", 0.007],
      ["]C13913978" + "5", "3913", 0.005, "978"],
      ["]C1393384099", "3933", 0.099, "840"],
      ["]C13932978" + "1", "3932", 0.01, "978"],
    ];

    for (const [barcode, ai, expected, currency] of cases) {
      it(`decodes ${JSON.stringify(barcode)} as AI ${ai} = ${expected}`, () => {
        const result = parser.decode(barcode);
        const element = findByAi(result, ai);
        expect(element).toBeDefined();
        expect(element!.data).toBeCloseTo(expected, 4);
        if (currency) {
          expect(element!.unit).toBe(currency);
        }
      });
    }

    it("keeps parsing the following AI after a short amount and a GS separator", () => {
      const result = parser.decode(VALID_GTIN + "39225" + GS + "10LOT1");
      expect(findByAi(result, "3922")!.data).toBeCloseTo(0.05, 2);
      expect(findByAi(result, "10")!.data).toBe("LOT1");
    });
  });

  describe("every n = 0..9 appears in result.data with the correct value", () => {
    const digits = "123456";

    for (const stem of ["390", "392"]) {
      for (const n of DECIMALS) {
        const ai = `${stem}${n}`;
        it(`decodes AI ${ai} with "${digits}"`, () => {
          const result = parser.decode(VALID_GTIN + ai + digits);
          const element = findByAi(result, ai);
          expect(element).toBeDefined();
          expect(element!.data).toBe(expectedValue(digits, n));
        });
      }
    }

    for (const stem of ["391", "393"]) {
      for (const n of DECIMALS) {
        const ai = `${stem}${n}`;
        it(`decodes AI ${ai} with currency 978 and "${digits}"`, () => {
          const result = parser.decode(VALID_GTIN + ai + "978" + digits);
          const element = findByAi(result, ai);
          expect(element).toBeDefined();
          expect(element!.data).toBe(expectedValue(digits, n));
          expect(element!.unit).toBe("978");
        });
      }
    }

    it("decodes AI 3924 as 12.3456 (reported case)", () => {
      const result = parser.decode("]C13924123456");
      expect(result.denormalized).toBe("(3924)123456");
      expect(findByAi(result, "3924")!.data).toBeCloseTo(12.3456, 4);
    });

    it("decodes a 15-digit amount with 9 decimals (AI 3909)", () => {
      const result = parser.decode(VALID_GTIN + "3909" + "123456789012345");
      expect(findByAi(result, "3909")!.data).toBeCloseTo(123456.789012345, 9);
    });
  });
});
