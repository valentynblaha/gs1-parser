---
sidebar_position: 1
slug: /intro
---

# Introduction

`@valentynb/gs1-parser` is a TypeScript library for parsing GS1 barcodes. It ships both ESModule and CommonJS builds and works in the browser and in Node.js.

It is based on the work from [PeterBrockfeld/BarcodeParser](https://github.com/PeterBrockfeld/BarcodeParser).

## Purpose

GS1 barcodes are used for many purposes, from simple product barcodes to complex codes describing the contents of an entire pallet. Two-dimensional barcodes can hold a significant amount of information, and this library makes it easier to access and process that data.

The parser decomposes a GS1 barcode into its individual elements, in a format that's easy to process from JavaScript and TypeScript. It's meant for applications that:

- Take data from a barcode scanning device or barcode reading application
- Process the data
- Perform actions based on the barcode contents

## The specification

The full "GS1 General Specifications" can be found at [ref.gs1.org/standards/genspecs](https://ref.gs1.org/standards/genspecs/). This library complies with the **2025 version** of the specification.

:::note Disclaimer

This library is an independent interpretation of the GS1 specification. It is neither endorsed, supported, approved, nor recommended by GS1, and there are no affiliations with GS1.

:::
