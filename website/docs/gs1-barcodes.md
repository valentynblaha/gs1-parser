---
sidebar_position: 4
---

# About GS1 Barcodes

GS1 barcodes can contain comprehensive product information, including:

- GTIN (Global Trade Item Number, formerly UPC or EAN)
- Weight or dimensions
- Price
- Lot/batch code
- Manufacturing date
- Expiration date
- And much more

## Structure

A GS1 barcode is a concatenation of _data elements_. Each element starts with an _application identifier_ (AI), a two to four digit number, followed by the actual information.

A data element is delimited by:

- The end of the barcode
- A fixed character count specification
- A special FNC1 character

The application identifiers and their properties are described in the third chapter of the GS1 General Specifications.

A GS1 barcode begins with a _symbology identifier_ (a three-character sequence denoting the barcode type), followed by an arbitrary number of data elements. The parser decomposes this string into its individual elements.

## Example

Your application receives a GS1 barcode as a string from a scanning device (the FNC1 characters aren't shown here):

```
]C101040123456789011715012910ABC1233932978471131030005253922471142127649716
```

The library extracts and parses the data into structured elements:

| AI   | Title            | Contents       | Unit/Currency/ISO Code |
| :--- | :--------------- | :------------- | :--------------------- |
| 01   | GTIN             | 04012345678901 |                        |
| 17   | USE BY OR EXPIRY | 2015-01-29     |                        |
| 10   | BATCH/LOT        | ABC123         |                        |
| 3932 | PRICE            | 47.11          | 978                    |
| 3103 | NET WEIGHT (kg)  | 0.525          | KGM                    |
| 3922 | PRICE            | 47.11          |                        |
| 421  | SHIP TO POST     | 49716          | 276                    |
