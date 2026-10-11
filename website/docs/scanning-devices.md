---
sidebar_position: 5
---

# Barcode Scanning Devices

GS1 barcodes are typically scanned with hardware barcode scanners configured as HID (Human Interface Device) keyboards. This works well for most characters but is a challenge for the FNC1 character.

## The FNC1 character

FNC1 is a non-printable control character used to delimit GS1 element strings of variable length.

GS1 DataMatrix and GS1 QR Code use the ASCII Group Separator (GS, ASCII 29, `0x1D`, Unicode `U+001D`) as FNC1.

Since this character isn't on standard keyboards, scanners send a control sequence in its place. The canonical sequence is `Ctrl + ]`.

:::warning Keyboard layout matters

A scanner emulating a German keyboard may send `Ctrl + +` instead of `Ctrl + ]`, which can trigger browser zoom. You'll need to:

1. Identify the sequence your scanner sends
2. Catch these keyboard events and turn them into proper group separators

:::

## Detecting key presses

To find out which control sequence your scanner sends, create a simple test page that logs keyboard events (`key`, `code`, `ctrlKey`) to the console, then scan test barcodes containing the GS character.
