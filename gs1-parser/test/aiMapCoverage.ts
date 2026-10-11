import { describe, it, expect } from "vitest";
import { AIMap, GS1Field } from "../src/aiNames";
import * as fs from "node:fs";
import * as path from "node:path";

// read barcodeParser.ts and extract AIs from return parse... statements
// the parser sometimes builds an AI by appending a digit variable ("fourthNumber")
// e.g. parseFixedLengthMeasure("311", fourthNumber, ...)
// in those cases we treat the prefix ("311") specially when validating.
function extractAIsFromParser(): Set<string> {
  const filename = path.resolve(__dirname, "../src/barcodeParser.ts");
  const content = fs.readFileSync(filename, "utf8");

  // capture function name, first argument (AI prefix), and optionally second arg
  const re = /return\s+(parse\w+)\(\s*["'`](\d+)["'`]\s*(?:,\s*([^,)]+))?/g;
  const set = new Set<string>();
  let match: RegExpExecArray | null;
  while ((match = re.exec(content)) !== null) {
    const func = match[1];
    const ai = match[2];
    const second = match[3]?.trim();
    if (
      (func === "parseFixedLengthMeasure" ||
        func === "parseVariableLengthMeasure" ||
        func === "parseVariableLengthWithISONumbers") &&
      second &&
      !/^['"\d]/.test(second)
    ) {
      // dynamic AI; store prefix with a marker so caller can handle
      set.add(ai + "*");
    } else {
      set.add(ai);
    }
  }
  return set;
}

describe("AIMap coverage", () => {
  it("should have an entry in AIMap for every parse call in barcodeParser", () => {
    const ais = extractAIsFromParser();
    const missing: string[] = [];

    for (const ai of ais) {
      if (ai.endsWith("*")) {
        // prefix case, remove star and look for any key starting with this prefix
        const prefix = ai.slice(0, -1);
        const found = Object.keys(AIMap).some(k => k.startsWith(`ai${prefix}`));
        if (!found) missing.push(prefix);
      } else {
        const key = `ai${ai}`;
        if (!(key in AIMap)) {
          // maybe the actual entries are dar by prefix (7240,7241 etc)
          const prefixMatch = Object.keys(AIMap).some(k => k.startsWith(`ai${ai}`));
          if (!prefixMatch) {
            missing.push(ai);
          }
        }
      }
    }

    if (missing.length > 0) {
      // sort for deterministic output
      missing.sort();
      console.error(
        "Missing AIMap entries for:",
        missing.map(a => `ai${a}`),
      );
    }
    expect(missing).toEqual([]);
  });

  it("should only reference each GS1Field value once", () => {
    const counts: Record<string, number> = {};
    for (const field of Object.values(AIMap)) {
      counts[field] = (counts[field] || 0) + 1;
    }

    const duplicates = Object.entries(counts)
      .filter(([, count]) => count > 1)
      .map(([field]) => field);

    if (duplicates.length > 0) {
      console.error("Duplicate GS1Field references in AIMap:", duplicates);
    }
    expect(duplicates).toEqual([]);
  });

  it("should reference every GS1Field enum member at least once", () => {
    const values = Object.values(AIMap);
    const missing: string[] = [];

    for (const field of Object.values(GS1Field)) {
      if (!values.includes(field)) {
        missing.push(field);
      }
    }

    if (missing.length > 0) {
      console.error("GS1Field members missing from AIMap:", missing);
    }
    expect(missing).toEqual([]);
  });
});
