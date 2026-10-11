---
sidebar_position: 3
---

# Usage

## ESModule

```typescript
import { GS1Parser } from '@valentynb/gs1-parser';

const gs1Parser = new GS1Parser({
  // If not specified, no limit is applied, except the one in the GS1 specs
  lotMaxLength: 20,
  // If not specified, the GS char is used
  fncChar: String.fromCodePoint(29),
});

try {
  // Returns a DecodeResult object, or throws an Error in case of parsing errors
  const result = gs1Parser.decode(barcodeString);

  console.log(result.codeName); // e.g. "GS1-128"
  console.log(result.denormalized); // Full barcode with parentheses around AIs
  console.log(result.data); // Dictionary of parsed elements
} catch (error) {
  console.error('Barcode parsing failed:', error);
}
```

## CommonJS

```javascript
const { GS1Parser } = require('@valentynb/gs1-parser');

const gs1Parser = new GS1Parser();

try {
  const result = gs1Parser.decode(barcodeString);
  // Process result...
} catch (error) {
  console.error('Barcode parsing failed:', error);
}
```

## TypeScript

The library is written in TypeScript and includes full type definitions:

```typescript
import { GS1Parser, DecodeResult } from '@valentynb/gs1-parser';

const gs1Parser = new GS1Parser();

try {
  const result: DecodeResult = gs1Parser.decode(barcodeString);

  for (const item of Object.values(result.data)) {
    console.log(`AI: ${item.ai}`);
    console.log(`Title: ${item.dataTitle}`);
    console.log(`Data: ${item.data}`);
    console.log(`Unit: ${item.unit || 'N/A'}`);
  }
} catch (error) {
  console.error('Error:', error);
}
```

## Options

The `GS1Parser` constructor accepts an optional [`ParserOptions`](/api/interfaces/ParserOptions) object:

| Option                | Type      | Description                                                                                   |
| :-------------------- | :-------- | :-------------------------------------------------------------------------------------------- |
| `fncChar`             | `string`  | The FNC1 character delimiting variable-length fields. Defaults to the GS char (`\x1D`).        |
| `lotMaxLength`        | `number`  | Maximum length of the lot/batch field. Defaults to the limit in the GS1 specs.                |
| `utcTimestamps`       | `boolean` | Return date fields as UTC timestamps instead of local dates.                                  |
| `ignoreInvalidFields` | `boolean` | Silently skip fields with an invalid AI (only useful when `fncChar` is used as a separator).  |

## Limitations

`decode()` does not perform plausibility checks. If the barcode contains invalid data (for example, an invalid GTIN or ISO code), the invalid content is returned as-is.
