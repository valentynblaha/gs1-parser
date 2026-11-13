/**
 * Property names of the parsed data, one per GS1 Application Identifier (AI).
 *
 * Each member's value is the key under which the element appears in {@link DecodeResult.data}.
 * For AIs whose last digit encodes the number of decimal places (e.g. `310n`), there is
 * one member per supported digit.
 */
export enum GS1Field {
  /** AI (00) – SSCC (Serial Shipping Container Code) */
  SSCC = "sscc",
  /** AI (01) – Global Trade Item Number (GTIN) */
  GTIN = "gtin",
  /** AI (02) – GTIN of Contained Trade Items */
  CONTENT = "content",
  /** AI (03) – GTIN of Made-to-Order Trade Items */
  MTO_GTIN = "mtoGtin",
  /** AI (10) – Batch or Lot Number */
  BATCH = "batch",
  /** AI (11) – Production Date (YYMMDD) */
  PROD_DATE = "prodDate",
  /** AI (12) – Due Date (YYMMDD) */
  DUE_DATE = "dueDate",
  /** AI (13) – Packaging Date (YYMMDD) */
  PACK_DATE = "packDate",
  /** AI (15) – Best Before Date (YYMMDD) */
  BEST_BEFORE = "bestBefore",
  /** AI (16) – Sell By Date (YYMMDD) */
  SELL_BY = "sellBy",
  /** AI (17) – Expiration Date (YYMMDD) */
  EXP_DATE = "expDate",
  /** AI (20) – Variant Number */
  VARIANT = "variant",
  /** AI (21) – Serial Number */
  SERIAL = "serial",
  /** AI (22) – Product Variant */
  HIBCC = "hibcc",
  /** AI (235) – Third Party Controlled, Serialised Extension of Global Trade Item Number (GTIN) */
  TPX = "tpx",
  /** AI (240) – Additional Item Identification */
  ADDITIONAL_PRODUCT_ID = "additionalProductID",
  /** AI (241) – Customer Part Number */
  CUSTOMER_PART_NUMBER = "customerPartNumber",
  /** AI (242) – Made-to-Order Variation Number */
  MADE_TO_ORDER = "madeToOrder",
  /** AI (243) – Packaging Component Number */
  PACKAGING = "packaging",
  /** AI (250) – Secondary Serial Number */
  SECONDARY_SERIAL_NUMBER = "secondarySerialNumber",
  /** AI (251) – Reference to Source Entity */
  REF_SOURCE = "refSource",
  /** AI (253) – Global Document Type Identifier (GDTI) */
  GDTI = "gdti",
  /** AI (254) – GLN Extension Component */
  GLN_EXTENSION = "glnExtension",
  /** AI (255) – Global Coupon Number (GCN) */
  GCN = "gcn",
  /** AI (30) – Count of Items (Variable Measure Trade Item) */
  VARIABLE_COUNT = "variableCount",
  /** AI (3100) – Net weight, kilograms (Variable Measure Trade Item), 0 decimal places */
  NET_WEIGHT_KG_0 = "netWeightKg0",
  /** AI (3101) – Net weight, kilograms (Variable Measure Trade Item), 1 decimal place */
  NET_WEIGHT_KG_1 = "netWeightKg1",
  /** AI (3102) – Net weight, kilograms (Variable Measure Trade Item), 2 decimal places */
  NET_WEIGHT_KG_2 = "netWeightKg2",
  /** AI (3103) – Net weight, kilograms (Variable Measure Trade Item), 3 decimal places */
  NET_WEIGHT_KG_3 = "netWeightKg3",
  /** AI (3104) – Net weight, kilograms (Variable Measure Trade Item), 4 decimal places */
  NET_WEIGHT_KG_4 = "netWeightKg4",
  /** AI (3105) – Net weight, kilograms (Variable Measure Trade Item), 5 decimal places */
  NET_WEIGHT_KG_5 = "netWeightKg5",
  /** AI (3110) – Length or first dimension, metres (Variable Measure Trade Item), 0 decimal places */
  LENGTH_METERS_0 = "lengthMeters0",
  /** AI (3111) – Length or first dimension, metres (Variable Measure Trade Item), 1 decimal place */
  LENGTH_METERS_1 = "lengthMeters1",
  /** AI (3112) – Length or first dimension, metres (Variable Measure Trade Item), 2 decimal places */
  LENGTH_METERS_2 = "lengthMeters2",
  /** AI (3113) – Length or first dimension, metres (Variable Measure Trade Item), 3 decimal places */
  LENGTH_METERS_3 = "lengthMeters3",
  /** AI (3114) – Length or first dimension, metres (Variable Measure Trade Item), 4 decimal places */
  LENGTH_METERS_4 = "lengthMeters4",
  /** AI (3115) – Length or first dimension, metres (Variable Measure Trade Item), 5 decimal places */
  LENGTH_METERS_5 = "lengthMeters5",
  /** AI (3120) – Width, diameter, or second dimension, metres (Variable Measure Trade Item), 0 decimal places */
  WIDTH_METERS_0 = "widthMeters0",
  /** AI (3121) – Width, diameter, or second dimension, metres (Variable Measure Trade Item), 1 decimal place */
  WIDTH_METERS_1 = "widthMeters1",
  /** AI (3122) – Width, diameter, or second dimension, metres (Variable Measure Trade Item), 2 decimal places */
  WIDTH_METERS_2 = "widthMeters2",
  /** AI (3123) – Width, diameter, or second dimension, metres (Variable Measure Trade Item), 3 decimal places */
  WIDTH_METERS_3 = "widthMeters3",
  /** AI (3124) – Width, diameter, or second dimension, metres (Variable Measure Trade Item), 4 decimal places */
  WIDTH_METERS_4 = "widthMeters4",
  /** AI (3125) – Width, diameter, or second dimension, metres (Variable Measure Trade Item), 5 decimal places */
  WIDTH_METERS_5 = "widthMeters5",
  /** AI (3130) – Depth, thickness, height, or third dimension, metres (Variable Measure Trade Item), 0 decimal places */
  HEIGHT_METERS_0 = "heightMeters0",
  /** AI (3131) – Depth, thickness, height, or third dimension, metres (Variable Measure Trade Item), 1 decimal place */
  HEIGHT_METERS_1 = "heightMeters1",
  /** AI (3132) – Depth, thickness, height, or third dimension, metres (Variable Measure Trade Item), 2 decimal places */
  HEIGHT_METERS_2 = "heightMeters2",
  /** AI (3133) – Depth, thickness, height, or third dimension, metres (Variable Measure Trade Item), 3 decimal places */
  HEIGHT_METERS_3 = "heightMeters3",
  /** AI (3134) – Depth, thickness, height, or third dimension, metres (Variable Measure Trade Item), 4 decimal places */
  HEIGHT_METERS_4 = "heightMeters4",
  /** AI (3135) – Depth, thickness, height, or third dimension, metres (Variable Measure Trade Item), 5 decimal places */
  HEIGHT_METERS_5 = "heightMeters5",
  /** AI (3140) – Area, square metres (Variable Measure Trade Item), 0 decimal places */
  AREA_SQUARE_METERS_0 = "areaSquareMeters0",
  /** AI (3141) – Area, square metres (Variable Measure Trade Item), 1 decimal place */
  AREA_SQUARE_METERS_1 = "areaSquareMeters1",
  /** AI (3142) – Area, square metres (Variable Measure Trade Item), 2 decimal places */
  AREA_SQUARE_METERS_2 = "areaSquareMeters2",
  /** AI (3143) – Area, square metres (Variable Measure Trade Item), 3 decimal places */
  AREA_SQUARE_METERS_3 = "areaSquareMeters3",
  /** AI (3144) – Area, square metres (Variable Measure Trade Item), 4 decimal places */
  AREA_SQUARE_METERS_4 = "areaSquareMeters4",
  /** AI (3145) – Area, square metres (Variable Measure Trade Item), 5 decimal places */
  AREA_SQUARE_METERS_5 = "areaSquareMeters5",
  /** AI (3150) – Net volume, litres (Variable Measure Trade Item), 0 decimal places */
  NET_VOLUME_LITERS_0 = "netVolumeLiters0",
  /** AI (3151) – Net volume, litres (Variable Measure Trade Item), 1 decimal place */
  NET_VOLUME_LITERS_1 = "netVolumeLiters1",
  /** AI (3152) – Net volume, litres (Variable Measure Trade Item), 2 decimal places */
  NET_VOLUME_LITERS_2 = "netVolumeLiters2",
  /** AI (3153) – Net volume, litres (Variable Measure Trade Item), 3 decimal places */
  NET_VOLUME_LITERS_3 = "netVolumeLiters3",
  /** AI (3154) – Net volume, litres (Variable Measure Trade Item), 4 decimal places */
  NET_VOLUME_LITERS_4 = "netVolumeLiters4",
  /** AI (3155) – Net volume, litres (Variable Measure Trade Item), 5 decimal places */
  NET_VOLUME_LITERS_5 = "netVolumeLiters5",
  /** AI (3160) – Net volume, cubic metres (Variable Measure Trade Item), 0 decimal places */
  NET_VOLUME_CUBIC_METERS_0 = "netVolumeCubicMeters0",
  /** AI (3161) – Net volume, cubic metres (Variable Measure Trade Item), 1 decimal place */
  NET_VOLUME_CUBIC_METERS_1 = "netVolumeCubicMeters1",
  /** AI (3162) – Net volume, cubic metres (Variable Measure Trade Item), 2 decimal places */
  NET_VOLUME_CUBIC_METERS_2 = "netVolumeCubicMeters2",
  /** AI (3163) – Net volume, cubic metres (Variable Measure Trade Item), 3 decimal places */
  NET_VOLUME_CUBIC_METERS_3 = "netVolumeCubicMeters3",
  /** AI (3164) – Net volume, cubic metres (Variable Measure Trade Item), 4 decimal places */
  NET_VOLUME_CUBIC_METERS_4 = "netVolumeCubicMeters4",
  /** AI (3165) – Net volume, cubic metres (Variable Measure Trade Item), 5 decimal places */
  NET_VOLUME_CUBIC_METERS_5 = "netVolumeCubicMeters5",
  /** AI (3200) – Net weight, pounds (Variable Measure Trade Item), 0 decimal places */
  NET_WEIGHT_LB_0 = "netWeightLb0",
  /** AI (3201) – Net weight, pounds (Variable Measure Trade Item), 1 decimal place */
  NET_WEIGHT_LB_1 = "netWeightLb1",
  /** AI (3202) – Net weight, pounds (Variable Measure Trade Item), 2 decimal places */
  NET_WEIGHT_LB_2 = "netWeightLb2",
  /** AI (3203) – Net weight, pounds (Variable Measure Trade Item), 3 decimal places */
  NET_WEIGHT_LB_3 = "netWeightLb3",
  /** AI (3204) – Net weight, pounds (Variable Measure Trade Item), 4 decimal places */
  NET_WEIGHT_LB_4 = "netWeightLb4",
  /** AI (3205) – Net weight, pounds (Variable Measure Trade Item), 5 decimal places */
  NET_WEIGHT_LB_5 = "netWeightLb5",
  /** AI (3210) – Length or first dimension, inches (Variable Measure Trade Item), 0 decimal places */
  LENGTH_INCHES_0 = "lengthInches0",
  /** AI (3211) – Length or first dimension, inches (Variable Measure Trade Item), 1 decimal place */
  LENGTH_INCHES_1 = "lengthInches1",
  /** AI (3212) – Length or first dimension, inches (Variable Measure Trade Item), 2 decimal places */
  LENGTH_INCHES_2 = "lengthInches2",
  /** AI (3213) – Length or first dimension, inches (Variable Measure Trade Item), 3 decimal places */
  LENGTH_INCHES_3 = "lengthInches3",
  /** AI (3214) – Length or first dimension, inches (Variable Measure Trade Item), 4 decimal places */
  LENGTH_INCHES_4 = "lengthInches4",
  /** AI (3215) – Length or first dimension, inches (Variable Measure Trade Item), 5 decimal places */
  LENGTH_INCHES_5 = "lengthInches5",
  /** AI (3220) – Length or first dimension, feet (Variable Measure Trade Item), 0 decimal places */
  LENGTH_FEET_0 = "lengthFeet0",
  /** AI (3221) – Length or first dimension, feet (Variable Measure Trade Item), 1 decimal place */
  LENGTH_FEET_1 = "lengthFeet1",
  /** AI (3222) – Length or first dimension, feet (Variable Measure Trade Item), 2 decimal places */
  LENGTH_FEET_2 = "lengthFeet2",
  /** AI (3223) – Length or first dimension, feet (Variable Measure Trade Item), 3 decimal places */
  LENGTH_FEET_3 = "lengthFeet3",
  /** AI (3224) – Length or first dimension, feet (Variable Measure Trade Item), 4 decimal places */
  LENGTH_FEET_4 = "lengthFeet4",
  /** AI (3225) – Length or first dimension, feet (Variable Measure Trade Item), 5 decimal places */
  LENGTH_FEET_5 = "lengthFeet5",
  /** AI (3230) – Length or first dimension, yards (Variable Measure Trade Item), 0 decimal places */
  LENGTH_YARDS_0 = "lengthYards0",
  /** AI (3231) – Length or first dimension, yards (Variable Measure Trade Item), 1 decimal place */
  LENGTH_YARDS_1 = "lengthYards1",
  /** AI (3232) – Length or first dimension, yards (Variable Measure Trade Item), 2 decimal places */
  LENGTH_YARDS_2 = "lengthYards2",
  /** AI (3233) – Length or first dimension, yards (Variable Measure Trade Item), 3 decimal places */
  LENGTH_YARDS_3 = "lengthYards3",
  /** AI (3234) – Length or first dimension, yards (Variable Measure Trade Item), 4 decimal places */
  LENGTH_YARDS_4 = "lengthYards4",
  /** AI (3235) – Length or first dimension, yards (Variable Measure Trade Item), 5 decimal places */
  LENGTH_YARDS_5 = "lengthYards5",
  /** AI (3240) – Width, diameter, or second dimension, inches (Variable Measure Trade Item), 0 decimal places */
  WIDTH_INCHES_0 = "widthInches0",
  /** AI (3241) – Width, diameter, or second dimension, inches (Variable Measure Trade Item), 1 decimal place */
  WIDTH_INCHES_1 = "widthInches1",
  /** AI (3242) – Width, diameter, or second dimension, inches (Variable Measure Trade Item), 2 decimal places */
  WIDTH_INCHES_2 = "widthInches2",
  /** AI (3243) – Width, diameter, or second dimension, inches (Variable Measure Trade Item), 3 decimal places */
  WIDTH_INCHES_3 = "widthInches3",
  /** AI (3244) – Width, diameter, or second dimension, inches (Variable Measure Trade Item), 4 decimal places */
  WIDTH_INCHES_4 = "widthInches4",
  /** AI (3245) – Width, diameter, or second dimension, inches (Variable Measure Trade Item), 5 decimal places */
  WIDTH_INCHES_5 = "widthInches5",
  /** AI (3250) – Width, diameter, or second dimension, feet (Variable Measure Trade Item), 0 decimal places */
  WIDTH_FEET_0 = "widthFeet0",
  /** AI (3251) – Width, diameter, or second dimension, feet (Variable Measure Trade Item), 1 decimal place */
  WIDTH_FEET_1 = "widthFeet1",
  /** AI (3252) – Width, diameter, or second dimension, feet (Variable Measure Trade Item), 2 decimal places */
  WIDTH_FEET_2 = "widthFeet2",
  /** AI (3253) – Width, diameter, or second dimension, feet (Variable Measure Trade Item), 3 decimal places */
  WIDTH_FEET_3 = "widthFeet3",
  /** AI (3254) – Width, diameter, or second dimension, feet (Variable Measure Trade Item), 4 decimal places */
  WIDTH_FEET_4 = "widthFeet4",
  /** AI (3255) – Width, diameter, or second dimension, feet (Variable Measure Trade Item), 5 decimal places */
  WIDTH_FEET_5 = "widthFeet5",
  /** AI (3260) – Width, diameter, or second dimension, yards (Variable Measure Trade Item), 0 decimal places */
  WIDTH_YARDS_0 = "widthYards0",
  /** AI (3261) – Width, diameter, or second dimension, yards (Variable Measure Trade Item), 1 decimal place */
  WIDTH_YARDS_1 = "widthYards1",
  /** AI (3262) – Width, diameter, or second dimension, yards (Variable Measure Trade Item), 2 decimal places */
  WIDTH_YARDS_2 = "widthYards2",
  /** AI (3263) – Width, diameter, or second dimension, yards (Variable Measure Trade Item), 3 decimal places */
  WIDTH_YARDS_3 = "widthYards3",
  /** AI (3264) – Width, diameter, or second dimension, yards (Variable Measure Trade Item), 4 decimal places */
  WIDTH_YARDS_4 = "widthYards4",
  /** AI (3265) – Width, diameter, or second dimension, yards (Variable Measure Trade Item), 5 decimal places */
  WIDTH_YARDS_5 = "widthYards5",
  /** AI (3270) – Depth, thickness, height, or third dimension, inches (Variable Measure Trade Item), 0 decimal places */
  HEIGHT_INCHES_0 = "heightInches0",
  /** AI (3271) – Depth, thickness, height, or third dimension, inches (Variable Measure Trade Item), 1 decimal place */
  HEIGHT_INCHES_1 = "heightInches1",
  /** AI (3272) – Depth, thickness, height, or third dimension, inches (Variable Measure Trade Item), 2 decimal places */
  HEIGHT_INCHES_2 = "heightInches2",
  /** AI (3273) – Depth, thickness, height, or third dimension, inches (Variable Measure Trade Item), 3 decimal places */
  HEIGHT_INCHES_3 = "heightInches3",
  /** AI (3274) – Depth, thickness, height, or third dimension, inches (Variable Measure Trade Item), 4 decimal places */
  HEIGHT_INCHES_4 = "heightInches4",
  /** AI (3275) – Depth, thickness, height, or third dimension, inches (Variable Measure Trade Item), 5 decimal places */
  HEIGHT_INCHES_5 = "heightInches5",
  /** AI (3280) – Depth, thickness, height, or third dimension, feet (Variable Measure Trade Item), 0 decimal places */
  HEIGHT_FEET_0 = "heightFeet0",
  /** AI (3281) – Depth, thickness, height, or third dimension, feet (Variable Measure Trade Item), 1 decimal place */
  HEIGHT_FEET_1 = "heightFeet1",
  /** AI (3282) – Depth, thickness, height, or third dimension, feet (Variable Measure Trade Item), 2 decimal places */
  HEIGHT_FEET_2 = "heightFeet2",
  /** AI (3283) – Depth, thickness, height, or third dimension, feet (Variable Measure Trade Item), 3 decimal places */
  HEIGHT_FEET_3 = "heightFeet3",
  /** AI (3284) – Depth, thickness, height, or third dimension, feet (Variable Measure Trade Item), 4 decimal places */
  HEIGHT_FEET_4 = "heightFeet4",
  /** AI (3285) – Depth, thickness, height, or third dimension, feet (Variable Measure Trade Item), 5 decimal places */
  HEIGHT_FEET_5 = "heightFeet5",
  /** AI (3290) – Depth, thickness, height, or third dimension, yards (Variable Measure Trade Item), 0 decimal places */
  HEIGHT_YARDS_0 = "heightYards0",
  /** AI (3291) – Depth, thickness, height, or third dimension, yards (Variable Measure Trade Item), 1 decimal place */
  HEIGHT_YARDS_1 = "heightYards1",
  /** AI (3292) – Depth, thickness, height, or third dimension, yards (Variable Measure Trade Item), 2 decimal places */
  HEIGHT_YARDS_2 = "heightYards2",
  /** AI (3293) – Depth, thickness, height, or third dimension, yards (Variable Measure Trade Item), 3 decimal places */
  HEIGHT_YARDS_3 = "heightYards3",
  /** AI (3294) – Depth, thickness, height, or third dimension, yards (Variable Measure Trade Item), 4 decimal places */
  HEIGHT_YARDS_4 = "heightYards4",
  /** AI (3295) – Depth, thickness, height, or third dimension, yards (Variable Measure Trade Item), 5 decimal places */
  HEIGHT_YARDS_5 = "heightYards5",
  /** AI (3300) – Logistic weight, kilograms, 0 decimal places */
  GROSS_WEIGHT_KG_0 = "grossWeightKg0",
  /** AI (3301) – Logistic weight, kilograms, 1 decimal place */
  GROSS_WEIGHT_KG_1 = "grossWeightKg1",
  /** AI (3302) – Logistic weight, kilograms, 2 decimal places */
  GROSS_WEIGHT_KG_2 = "grossWeightKg2",
  /** AI (3303) – Logistic weight, kilograms, 3 decimal places */
  GROSS_WEIGHT_KG_3 = "grossWeightKg3",
  /** AI (3304) – Logistic weight, kilograms, 4 decimal places */
  GROSS_WEIGHT_KG_4 = "grossWeightKg4",
  /** AI (3305) – Logistic weight, kilograms, 5 decimal places */
  GROSS_WEIGHT_KG_5 = "grossWeightKg5",
  /** AI (3310) – Length or first dimension, metres, 0 decimal places */
  LENGTH_METERS_LOG_0 = "lengthMetersLog0",
  /** AI (3311) – Length or first dimension, metres, 1 decimal place */
  LENGTH_METERS_LOG_1 = "lengthMetersLog1",
  /** AI (3312) – Length or first dimension, metres, 2 decimal places */
  LENGTH_METERS_LOG_2 = "lengthMetersLog2",
  /** AI (3313) – Length or first dimension, metres, 3 decimal places */
  LENGTH_METERS_LOG_3 = "lengthMetersLog3",
  /** AI (3314) – Length or first dimension, metres, 4 decimal places */
  LENGTH_METERS_LOG_4 = "lengthMetersLog4",
  /** AI (3315) – Length or first dimension, metres, 5 decimal places */
  LENGTH_METERS_LOG_5 = "lengthMetersLog5",
  /** AI (3320) – Width, diameter, or second dimension, metres, 0 decimal places */
  WIDTH_METERS_LOG_0 = "widthMetersLog0",
  /** AI (3321) – Width, diameter, or second dimension, metres, 1 decimal place */
  WIDTH_METERS_LOG_1 = "widthMetersLog1",
  /** AI (3322) – Width, diameter, or second dimension, metres, 2 decimal places */
  WIDTH_METERS_LOG_2 = "widthMetersLog2",
  /** AI (3323) – Width, diameter, or second dimension, metres, 3 decimal places */
  WIDTH_METERS_LOG_3 = "widthMetersLog3",
  /** AI (3324) – Width, diameter, or second dimension, metres, 4 decimal places */
  WIDTH_METERS_LOG_4 = "widthMetersLog4",
  /** AI (3325) – Width, diameter, or second dimension, metres, 5 decimal places */
  WIDTH_METERS_LOG_5 = "widthMetersLog5",
  /** AI (3330) – Depth, thickness, height, or third dimension, metres, 0 decimal places */
  HEIGHT_METERS_LOG_0 = "heightMetersLog0",
  /** AI (3331) – Depth, thickness, height, or third dimension, metres, 1 decimal place */
  HEIGHT_METERS_LOG_1 = "heightMetersLog1",
  /** AI (3332) – Depth, thickness, height, or third dimension, metres, 2 decimal places */
  HEIGHT_METERS_LOG_2 = "heightMetersLog2",
  /** AI (3333) – Depth, thickness, height, or third dimension, metres, 3 decimal places */
  HEIGHT_METERS_LOG_3 = "heightMetersLog3",
  /** AI (3334) – Depth, thickness, height, or third dimension, metres, 4 decimal places */
  HEIGHT_METERS_LOG_4 = "heightMetersLog4",
  /** AI (3335) – Depth, thickness, height, or third dimension, metres, 5 decimal places */
  HEIGHT_METERS_LOG_5 = "heightMetersLog5",
  /** AI (3340) – Area, square metres, 0 decimal places */
  AREA_SQUARE_METERS_LOG_0 = "areaSquareMetersLog0",
  /** AI (3341) – Area, square metres, 1 decimal place */
  AREA_SQUARE_METERS_LOG_1 = "areaSquareMetersLog1",
  /** AI (3342) – Area, square metres, 2 decimal places */
  AREA_SQUARE_METERS_LOG_2 = "areaSquareMetersLog2",
  /** AI (3343) – Area, square metres, 3 decimal places */
  AREA_SQUARE_METERS_LOG_3 = "areaSquareMetersLog3",
  /** AI (3344) – Area, square metres, 4 decimal places */
  AREA_SQUARE_METERS_LOG_4 = "areaSquareMetersLog4",
  /** AI (3345) – Area, square metres, 5 decimal places */
  AREA_SQUARE_METERS_LOG_5 = "areaSquareMetersLog5",
  /** AI (3350) – Logistic volume, litres, 0 decimal places */
  VOLUME_LITRES_LOG_0 = "volumeLitresLog0",
  /** AI (3351) – Logistic volume, litres, 1 decimal place */
  VOLUME_LITRES_LOG_1 = "volumeLitresLog1",
  /** AI (3352) – Logistic volume, litres, 2 decimal places */
  VOLUME_LITRES_LOG_2 = "volumeLitresLog2",
  /** AI (3353) – Logistic volume, litres, 3 decimal places */
  VOLUME_LITRES_LOG_3 = "volumeLitresLog3",
  /** AI (3354) – Logistic volume, litres, 4 decimal places */
  VOLUME_LITRES_LOG_4 = "volumeLitresLog4",
  /** AI (3355) – Logistic volume, litres, 5 decimal places */
  VOLUME_LITRES_LOG_5 = "volumeLitresLog5",
  /** AI (3360) – Logistic volume, cubic metres, 0 decimal places */
  VOLUME_CUBIC_METERS_LOG_0 = "volumeCubicMetersLog0",
  /** AI (3361) – Logistic volume, cubic metres, 1 decimal place */
  VOLUME_CUBIC_METERS_LOG_1 = "volumeCubicMetersLog1",
  /** AI (3362) – Logistic volume, cubic metres, 2 decimal places */
  VOLUME_CUBIC_METERS_LOG_2 = "volumeCubicMetersLog2",
  /** AI (3363) – Logistic volume, cubic metres, 3 decimal places */
  VOLUME_CUBIC_METERS_LOG_3 = "volumeCubicMetersLog3",
  /** AI (3364) – Logistic volume, cubic metres, 4 decimal places */
  VOLUME_CUBIC_METERS_LOG_4 = "volumeCubicMetersLog4",
  /** AI (3365) – Logistic volume, cubic metres, 5 decimal places */
  VOLUME_CUBIC_METERS_LOG_5 = "volumeCubicMetersLog5",
  /** AI (3370) – Kilograms per square metre, 0 decimal places */
  KG_PER_SQUARE_METERS_0 = "kgPerSquareMeters0",
  /** AI (3371) – Kilograms per square metre, 1 decimal place */
  KG_PER_SQUARE_METERS_1 = "kgPerSquareMeters1",
  /** AI (3372) – Kilograms per square metre, 2 decimal places */
  KG_PER_SQUARE_METERS_2 = "kgPerSquareMeters2",
  /** AI (3373) – Kilograms per square metre, 3 decimal places */
  KG_PER_SQUARE_METERS_3 = "kgPerSquareMeters3",
  /** AI (3374) – Kilograms per square metre, 4 decimal places */
  KG_PER_SQUARE_METERS_4 = "kgPerSquareMeters4",
  /** AI (3375) – Kilograms per square metre, 5 decimal places */
  KG_PER_SQUARE_METERS_5 = "kgPerSquareMeters5",
  /** AI (3400) – Logistic weight, pounds, 0 decimal places */
  GROSS_WEIGHT_POUNDS_0 = "grossWeightPounds0",
  /** AI (3401) – Logistic weight, pounds, 1 decimal place */
  GROSS_WEIGHT_POUNDS_1 = "grossWeightPounds1",
  /** AI (3402) – Logistic weight, pounds, 2 decimal places */
  GROSS_WEIGHT_POUNDS_2 = "grossWeightPounds2",
  /** AI (3403) – Logistic weight, pounds, 3 decimal places */
  GROSS_WEIGHT_POUNDS_3 = "grossWeightPounds3",
  /** AI (3404) – Logistic weight, pounds, 4 decimal places */
  GROSS_WEIGHT_POUNDS_4 = "grossWeightPounds4",
  /** AI (3405) – Logistic weight, pounds, 5 decimal places */
  GROSS_WEIGHT_POUNDS_5 = "grossWeightPounds5",
  /** AI (3410) – Length or first dimension, inches, 0 decimal places */
  LENGTH_INCHES_LOG_0 = "lengthInchesLog0",
  /** AI (3411) – Length or first dimension, inches, 1 decimal place */
  LENGTH_INCHES_LOG_1 = "lengthInchesLog1",
  /** AI (3412) – Length or first dimension, inches, 2 decimal places */
  LENGTH_INCHES_LOG_2 = "lengthInchesLog2",
  /** AI (3413) – Length or first dimension, inches, 3 decimal places */
  LENGTH_INCHES_LOG_3 = "lengthInchesLog3",
  /** AI (3414) – Length or first dimension, inches, 4 decimal places */
  LENGTH_INCHES_LOG_4 = "lengthInchesLog4",
  /** AI (3415) – Length or first dimension, inches, 5 decimal places */
  LENGTH_INCHES_LOG_5 = "lengthInchesLog5",
  /** AI (3420) – Length or first dimension, feet, 0 decimal places */
  LENGTH_FEET_LOG_0 = "lengthFeetLog0",
  /** AI (3421) – Length or first dimension, feet, 1 decimal place */
  LENGTH_FEET_LOG_1 = "lengthFeetLog1",
  /** AI (3422) – Length or first dimension, feet, 2 decimal places */
  LENGTH_FEET_LOG_2 = "lengthFeetLog2",
  /** AI (3423) – Length or first dimension, feet, 3 decimal places */
  LENGTH_FEET_LOG_3 = "lengthFeetLog3",
  /** AI (3424) – Length or first dimension, feet, 4 decimal places */
  LENGTH_FEET_LOG_4 = "lengthFeetLog4",
  /** AI (3425) – Length or first dimension, feet, 5 decimal places */
  LENGTH_FEET_LOG_5 = "lengthFeetLog5",
  /** AI (3430) – Length or first dimension, yards, 0 decimal places */
  LENGTH_YARDS_LOG_0 = "lengthYardsLog0",
  /** AI (3431) – Length or first dimension, yards, 1 decimal place */
  LENGTH_YARDS_LOG_1 = "lengthYardsLog1",
  /** AI (3432) – Length or first dimension, yards, 2 decimal places */
  LENGTH_YARDS_LOG_2 = "lengthYardsLog2",
  /** AI (3433) – Length or first dimension, yards, 3 decimal places */
  LENGTH_YARDS_LOG_3 = "lengthYardsLog3",
  /** AI (3434) – Length or first dimension, yards, 4 decimal places */
  LENGTH_YARDS_LOG_4 = "lengthYardsLog4",
  /** AI (3435) – Length or first dimension, yards, 5 decimal places */
  LENGTH_YARDS_LOG_5 = "lengthYardsLog5",
  /** AI (3440) – Width, diameter, or second dimension, inches, 0 decimal places */
  WIDTH_INCHES_LOG_0 = "widthInchesLog0",
  /** AI (3441) – Width, diameter, or second dimension, inches, 1 decimal place */
  WIDTH_INCHES_LOG_1 = "widthInchesLog1",
  /** AI (3442) – Width, diameter, or second dimension, inches, 2 decimal places */
  WIDTH_INCHES_LOG_2 = "widthInchesLog2",
  /** AI (3443) – Width, diameter, or second dimension, inches, 3 decimal places */
  WIDTH_INCHES_LOG_3 = "widthInchesLog3",
  /** AI (3444) – Width, diameter, or second dimension, inches, 4 decimal places */
  WIDTH_INCHES_LOG_4 = "widthInchesLog4",
  /** AI (3445) – Width, diameter, or second dimension, inches, 5 decimal places */
  WIDTH_INCHES_LOG_5 = "widthInchesLog5",
  /** AI (3450) – Width, diameter, or second dimension, feet, 0 decimal places */
  WIDTH_FEET_LOG_0 = "widthFeetLog0",
  /** AI (3451) – Width, diameter, or second dimension, feet, 1 decimal place */
  WIDTH_FEET_LOG_1 = "widthFeetLog1",
  /** AI (3452) – Width, diameter, or second dimension, feet, 2 decimal places */
  WIDTH_FEET_LOG_2 = "widthFeetLog2",
  /** AI (3453) – Width, diameter, or second dimension, feet, 3 decimal places */
  WIDTH_FEET_LOG_3 = "widthFeetLog3",
  /** AI (3454) – Width, diameter, or second dimension, feet, 4 decimal places */
  WIDTH_FEET_LOG_4 = "widthFeetLog4",
  /** AI (3455) – Width, diameter, or second dimension, feet, 5 decimal places */
  WIDTH_FEET_LOG_5 = "widthFeetLog5",
  /** AI (3460) – Width, diameter, or second dimension, yard, 0 decimal places */
  WIDTH_YARDS_LOG_0 = "widthYardsLog0",
  /** AI (3461) – Width, diameter, or second dimension, yard, 1 decimal place */
  WIDTH_YARDS_LOG_1 = "widthYardsLog1",
  /** AI (3462) – Width, diameter, or second dimension, yard, 2 decimal places */
  WIDTH_YARDS_LOG_2 = "widthYardsLog2",
  /** AI (3463) – Width, diameter, or second dimension, yard, 3 decimal places */
  WIDTH_YARDS_LOG_3 = "widthYardsLog3",
  /** AI (3464) – Width, diameter, or second dimension, yard, 4 decimal places */
  WIDTH_YARDS_LOG_4 = "widthYardsLog4",
  /** AI (3465) – Width, diameter, or second dimension, yard, 5 decimal places */
  WIDTH_YARDS_LOG_5 = "widthYardsLog5",
  /** AI (3470) – Depth, thickness, height, or third dimension, inches, 0 decimal places */
  HEIGHT_INCHES_LOG_0 = "heightInchesLog0",
  /** AI (3471) – Depth, thickness, height, or third dimension, inches, 1 decimal place */
  HEIGHT_INCHES_LOG_1 = "heightInchesLog1",
  /** AI (3472) – Depth, thickness, height, or third dimension, inches, 2 decimal places */
  HEIGHT_INCHES_LOG_2 = "heightInchesLog2",
  /** AI (3473) – Depth, thickness, height, or third dimension, inches, 3 decimal places */
  HEIGHT_INCHES_LOG_3 = "heightInchesLog3",
  /** AI (3474) – Depth, thickness, height, or third dimension, inches, 4 decimal places */
  HEIGHT_INCHES_LOG_4 = "heightInchesLog4",
  /** AI (3475) – Depth, thickness, height, or third dimension, inches, 5 decimal places */
  HEIGHT_INCHES_LOG_5 = "heightInchesLog5",
  /** AI (3480) – Depth, thickness, height, or third dimension, feet, 0 decimal places */
  HEIGHT_FEET_LOG_0 = "heightFeetLog0",
  /** AI (3481) – Depth, thickness, height, or third dimension, feet, 1 decimal place */
  HEIGHT_FEET_LOG_1 = "heightFeetLog1",
  /** AI (3482) – Depth, thickness, height, or third dimension, feet, 2 decimal places */
  HEIGHT_FEET_LOG_2 = "heightFeetLog2",
  /** AI (3483) – Depth, thickness, height, or third dimension, feet, 3 decimal places */
  HEIGHT_FEET_LOG_3 = "heightFeetLog3",
  /** AI (3484) – Depth, thickness, height, or third dimension, feet, 4 decimal places */
  HEIGHT_FEET_LOG_4 = "heightFeetLog4",
  /** AI (3485) – Depth, thickness, height, or third dimension, feet, 5 decimal places */
  HEIGHT_FEET_LOG_5 = "heightFeetLog5",
  /** AI (3490) – Depth, thickness, height, or third dimension, yards, 0 decimal places */
  HEIGHT_YARDS_LOG_0 = "heightYardsLog0",
  /** AI (3491) – Depth, thickness, height, or third dimension, yards, 1 decimal place */
  HEIGHT_YARDS_LOG_1 = "heightYardsLog1",
  /** AI (3492) – Depth, thickness, height, or third dimension, yards, 2 decimal places */
  HEIGHT_YARDS_LOG_2 = "heightYardsLog2",
  /** AI (3493) – Depth, thickness, height, or third dimension, yards, 3 decimal places */
  HEIGHT_YARDS_LOG_3 = "heightYardsLog3",
  /** AI (3494) – Depth, thickness, height, or third dimension, yards, 4 decimal places */
  HEIGHT_YARDS_LOG_4 = "heightYardsLog4",
  /** AI (3495) – Depth, thickness, height, or third dimension, yards, 5 decimal places */
  HEIGHT_YARDS_LOG_5 = "heightYardsLog5",
  /** AI (3500) – Area, square inches (Variable Measure Trade Item), 0 decimal places */
  AREA_SQUARE_INCHES_0 = "areaSquareInches0",
  /** AI (3501) – Area, square inches (Variable Measure Trade Item), 1 decimal place */
  AREA_SQUARE_INCHES_1 = "areaSquareInches1",
  /** AI (3502) – Area, square inches (Variable Measure Trade Item), 2 decimal places */
  AREA_SQUARE_INCHES_2 = "areaSquareInches2",
  /** AI (3503) – Area, square inches (Variable Measure Trade Item), 3 decimal places */
  AREA_SQUARE_INCHES_3 = "areaSquareInches3",
  /** AI (3504) – Area, square inches (Variable Measure Trade Item), 4 decimal places */
  AREA_SQUARE_INCHES_4 = "areaSquareInches4",
  /** AI (3505) – Area, square inches (Variable Measure Trade Item), 5 decimal places */
  AREA_SQUARE_INCHES_5 = "areaSquareInches5",
  /** AI (3510) – Area, square feet (Variable Measure Trade Item), 0 decimal places */
  AREA_SQUARE_FEET_0 = "areaSquareFeet0",
  /** AI (3511) – Area, square feet (Variable Measure Trade Item), 1 decimal place */
  AREA_SQUARE_FEET_1 = "areaSquareFeet1",
  /** AI (3512) – Area, square feet (Variable Measure Trade Item), 2 decimal places */
  AREA_SQUARE_FEET_2 = "areaSquareFeet2",
  /** AI (3513) – Area, square feet (Variable Measure Trade Item), 3 decimal places */
  AREA_SQUARE_FEET_3 = "areaSquareFeet3",
  /** AI (3514) – Area, square feet (Variable Measure Trade Item), 4 decimal places */
  AREA_SQUARE_FEET_4 = "areaSquareFeet4",
  /** AI (3515) – Area, square feet (Variable Measure Trade Item), 5 decimal places */
  AREA_SQUARE_FEET_5 = "areaSquareFeet5",
  /** AI (3520) – Area, square yards (Variable Measure Trade Item), 0 decimal places */
  AREA_SQUARE_YARDS_0 = "areaSquareYards0",
  /** AI (3521) – Area, square yards (Variable Measure Trade Item), 1 decimal place */
  AREA_SQUARE_YARDS_1 = "areaSquareYards1",
  /** AI (3522) – Area, square yards (Variable Measure Trade Item), 2 decimal places */
  AREA_SQUARE_YARDS_2 = "areaSquareYards2",
  /** AI (3523) – Area, square yards (Variable Measure Trade Item), 3 decimal places */
  AREA_SQUARE_YARDS_3 = "areaSquareYards3",
  /** AI (3524) – Area, square yards (Variable Measure Trade Item), 4 decimal places */
  AREA_SQUARE_YARDS_4 = "areaSquareYards4",
  /** AI (3525) – Area, square yards (Variable Measure Trade Item), 5 decimal places */
  AREA_SQUARE_YARDS_5 = "areaSquareYards5",
  /** AI (3530) – Area, square inches, 0 decimal places */
  AREA_SQUARE_INCHES_LOG_0 = "areaSquareInchesLog0",
  /** AI (3531) – Area, square inches, 1 decimal place */
  AREA_SQUARE_INCHES_LOG_1 = "areaSquareInchesLog1",
  /** AI (3532) – Area, square inches, 2 decimal places */
  AREA_SQUARE_INCHES_LOG_2 = "areaSquareInchesLog2",
  /** AI (3533) – Area, square inches, 3 decimal places */
  AREA_SQUARE_INCHES_LOG_3 = "areaSquareInchesLog3",
  /** AI (3534) – Area, square inches, 4 decimal places */
  AREA_SQUARE_INCHES_LOG_4 = "areaSquareInchesLog4",
  /** AI (3535) – Area, square inches, 5 decimal places */
  AREA_SQUARE_INCHES_LOG_5 = "areaSquareInchesLog5",
  /** AI (3540) – Area, square feet, 0 decimal places */
  AREA_SQUARE_FEET_LOG_0 = "areaSquareFeetLog0",
  /** AI (3541) – Area, square feet, 1 decimal place */
  AREA_SQUARE_FEET_LOG_1 = "areaSquareFeetLog1",
  /** AI (3542) – Area, square feet, 2 decimal places */
  AREA_SQUARE_FEET_LOG_2 = "areaSquareFeetLog2",
  /** AI (3543) – Area, square feet, 3 decimal places */
  AREA_SQUARE_FEET_LOG_3 = "areaSquareFeetLog3",
  /** AI (3544) – Area, square feet, 4 decimal places */
  AREA_SQUARE_FEET_LOG_4 = "areaSquareFeetLog4",
  /** AI (3545) – Area, square feet, 5 decimal places */
  AREA_SQUARE_FEET_LOG_5 = "areaSquareFeetLog5",
  /** AI (3550) – Area, square yards, 0 decimal places */
  AREA_SQUARE_YARDS_LOG_0 = "areaSquareYardsLog0",
  /** AI (3551) – Area, square yards, 1 decimal place */
  AREA_SQUARE_YARDS_LOG_1 = "areaSquareYardsLog1",
  /** AI (3552) – Area, square yards, 2 decimal places */
  AREA_SQUARE_YARDS_LOG_2 = "areaSquareYardsLog2",
  /** AI (3553) – Area, square yards, 3 decimal places */
  AREA_SQUARE_YARDS_LOG_3 = "areaSquareYardsLog3",
  /** AI (3554) – Area, square yards, 4 decimal places */
  AREA_SQUARE_YARDS_LOG_4 = "areaSquareYardsLog4",
  /** AI (3555) – Area, square yards, 5 decimal places */
  AREA_SQUARE_YARDS_LOG_5 = "areaSquareYardsLog5",
  /** AI (3560) – Net weight, troy ounces (Variable Measure Trade Item), 0 decimal places */
  NET_WEIGHT_TROY_OUNCES_0 = "netWeightTroyOunces0",
  /** AI (3561) – Net weight, troy ounces (Variable Measure Trade Item), 1 decimal place */
  NET_WEIGHT_TROY_OUNCES_1 = "netWeightTroyOunces1",
  /** AI (3562) – Net weight, troy ounces (Variable Measure Trade Item), 2 decimal places */
  NET_WEIGHT_TROY_OUNCES_2 = "netWeightTroyOunces2",
  /** AI (3563) – Net weight, troy ounces (Variable Measure Trade Item), 3 decimal places */
  NET_WEIGHT_TROY_OUNCES_3 = "netWeightTroyOunces3",
  /** AI (3564) – Net weight, troy ounces (Variable Measure Trade Item), 4 decimal places */
  NET_WEIGHT_TROY_OUNCES_4 = "netWeightTroyOunces4",
  /** AI (3565) – Net weight, troy ounces (Variable Measure Trade Item), 5 decimal places */
  NET_WEIGHT_TROY_OUNCES_5 = "netWeightTroyOunces5",
  /** AI (3570) – Net weight (or volume), ounces (Variable Measure Trade Item), 0 decimal places */
  NET_VOLUME_OUNCES_0 = "netVolumeOunces0",
  /** AI (3571) – Net weight (or volume), ounces (Variable Measure Trade Item), 1 decimal place */
  NET_VOLUME_OUNCES_1 = "netVolumeOunces1",
  /** AI (3572) – Net weight (or volume), ounces (Variable Measure Trade Item), 2 decimal places */
  NET_VOLUME_OUNCES_2 = "netVolumeOunces2",
  /** AI (3573) – Net weight (or volume), ounces (Variable Measure Trade Item), 3 decimal places */
  NET_VOLUME_OUNCES_3 = "netVolumeOunces3",
  /** AI (3574) – Net weight (or volume), ounces (Variable Measure Trade Item), 4 decimal places */
  NET_VOLUME_OUNCES_4 = "netVolumeOunces4",
  /** AI (3575) – Net weight (or volume), ounces (Variable Measure Trade Item), 5 decimal places */
  NET_VOLUME_OUNCES_5 = "netVolumeOunces5",
  /** AI (3600) – Net volume, quarts (Variable Measure Trade Item), 0 decimal places */
  NET_VOLUME_QUARTS_0 = "netVolumeQuarts0",
  /** AI (3601) – Net volume, quarts (Variable Measure Trade Item), 1 decimal place */
  NET_VOLUME_QUARTS_1 = "netVolumeQuarts1",
  /** AI (3602) – Net volume, quarts (Variable Measure Trade Item), 2 decimal places */
  NET_VOLUME_QUARTS_2 = "netVolumeQuarts2",
  /** AI (3603) – Net volume, quarts (Variable Measure Trade Item), 3 decimal places */
  NET_VOLUME_QUARTS_3 = "netVolumeQuarts3",
  /** AI (3604) – Net volume, quarts (Variable Measure Trade Item), 4 decimal places */
  NET_VOLUME_QUARTS_4 = "netVolumeQuarts4",
  /** AI (3605) – Net volume, quarts (Variable Measure Trade Item), 5 decimal places */
  NET_VOLUME_QUARTS_5 = "netVolumeQuarts5",
  /** AI (3610) – Net volume, gallons U.S. (Variable Measure Trade Item), 0 decimal places */
  NET_VOLUME_GALLONS_0 = "netVolumeGallons0",
  /** AI (3611) – Net volume, gallons U.S. (Variable Measure Trade Item), 1 decimal place */
  NET_VOLUME_GALLONS_1 = "netVolumeGallons1",
  /** AI (3612) – Net volume, gallons U.S. (Variable Measure Trade Item), 2 decimal places */
  NET_VOLUME_GALLONS_2 = "netVolumeGallons2",
  /** AI (3613) – Net volume, gallons U.S. (Variable Measure Trade Item), 3 decimal places */
  NET_VOLUME_GALLONS_3 = "netVolumeGallons3",
  /** AI (3614) – Net volume, gallons U.S. (Variable Measure Trade Item), 4 decimal places */
  NET_VOLUME_GALLONS_4 = "netVolumeGallons4",
  /** AI (3615) – Net volume, gallons U.S. (Variable Measure Trade Item), 5 decimal places */
  NET_VOLUME_GALLONS_5 = "netVolumeGallons5",
  /** AI (3620) – Logistic volume, quarts, 0 decimal places */
  VOLUME_QUARTS_LOG_0 = "volumeQuartsLog0",
  /** AI (3621) – Logistic volume, quarts, 1 decimal place */
  VOLUME_QUARTS_LOG_1 = "volumeQuartsLog1",
  /** AI (3622) – Logistic volume, quarts, 2 decimal places */
  VOLUME_QUARTS_LOG_2 = "volumeQuartsLog2",
  /** AI (3623) – Logistic volume, quarts, 3 decimal places */
  VOLUME_QUARTS_LOG_3 = "volumeQuartsLog3",
  /** AI (3624) – Logistic volume, quarts, 4 decimal places */
  VOLUME_QUARTS_LOG_4 = "volumeQuartsLog4",
  /** AI (3625) – Logistic volume, quarts, 5 decimal places */
  VOLUME_QUARTS_LOG_5 = "volumeQuartsLog5",
  /** AI (3630) – Logistic volume, gallons U.S., 0 decimal places */
  VOLUME_GALLONS_LOG_0 = "volumeGallonsLog0",
  /** AI (3631) – Logistic volume, gallons U.S., 1 decimal place */
  VOLUME_GALLONS_LOG_1 = "volumeGallonsLog1",
  /** AI (3632) – Logistic volume, gallons U.S., 2 decimal places */
  VOLUME_GALLONS_LOG_2 = "volumeGallonsLog2",
  /** AI (3633) – Logistic volume, gallons U.S., 3 decimal places */
  VOLUME_GALLONS_LOG_3 = "volumeGallonsLog3",
  /** AI (3634) – Logistic volume, gallons U.S., 4 decimal places */
  VOLUME_GALLONS_LOG_4 = "volumeGallonsLog4",
  /** AI (3635) – Logistic volume, gallons U.S., 5 decimal places */
  VOLUME_GALLONS_LOG_5 = "volumeGallonsLog5",
  /** AI (3640) – Net volume, cubic inches (Variable Measure Trade Item), 0 decimal places */
  VOLUME_CUBIC_INCHES_0 = "volumeCubicInches0",
  /** AI (3641) – Net volume, cubic inches (Variable Measure Trade Item), 1 decimal place */
  VOLUME_CUBIC_INCHES_1 = "volumeCubicInches1",
  /** AI (3642) – Net volume, cubic inches (Variable Measure Trade Item), 2 decimal places */
  VOLUME_CUBIC_INCHES_2 = "volumeCubicInches2",
  /** AI (3643) – Net volume, cubic inches (Variable Measure Trade Item), 3 decimal places */
  VOLUME_CUBIC_INCHES_3 = "volumeCubicInches3",
  /** AI (3644) – Net volume, cubic inches (Variable Measure Trade Item), 4 decimal places */
  VOLUME_CUBIC_INCHES_4 = "volumeCubicInches4",
  /** AI (3645) – Net volume, cubic inches (Variable Measure Trade Item), 5 decimal places */
  VOLUME_CUBIC_INCHES_5 = "volumeCubicInches5",
  /** AI (3650) – Net volume, cubic feet (Variable Measure Trade Item), 0 decimal places */
  VOLUME_CUBIC_FEET_0 = "volumeCubicFeet0",
  /** AI (3651) – Net volume, cubic feet (Variable Measure Trade Item), 1 decimal place */
  VOLUME_CUBIC_FEET_1 = "volumeCubicFeet1",
  /** AI (3652) – Net volume, cubic feet (Variable Measure Trade Item), 2 decimal places */
  VOLUME_CUBIC_FEET_2 = "volumeCubicFeet2",
  /** AI (3653) – Net volume, cubic feet (Variable Measure Trade Item), 3 decimal places */
  VOLUME_CUBIC_FEET_3 = "volumeCubicFeet3",
  /** AI (3654) – Net volume, cubic feet (Variable Measure Trade Item), 4 decimal places */
  VOLUME_CUBIC_FEET_4 = "volumeCubicFeet4",
  /** AI (3655) – Net volume, cubic feet (Variable Measure Trade Item), 5 decimal places */
  VOLUME_CUBIC_FEET_5 = "volumeCubicFeet5",
  /** AI (3660) – Net volume, cubic yards (Variable Measure Trade Item), 0 decimal places */
  VOLUME_CUBIC_YARDS_0 = "volumeCubicYards0",
  /** AI (3661) – Net volume, cubic yards (Variable Measure Trade Item), 1 decimal place */
  VOLUME_CUBIC_YARDS_1 = "volumeCubicYards1",
  /** AI (3662) – Net volume, cubic yards (Variable Measure Trade Item), 2 decimal places */
  VOLUME_CUBIC_YARDS_2 = "volumeCubicYards2",
  /** AI (3663) – Net volume, cubic yards (Variable Measure Trade Item), 3 decimal places */
  VOLUME_CUBIC_YARDS_3 = "volumeCubicYards3",
  /** AI (3664) – Net volume, cubic yards (Variable Measure Trade Item), 4 decimal places */
  VOLUME_CUBIC_YARDS_4 = "volumeCubicYards4",
  /** AI (3665) – Net volume, cubic yards (Variable Measure Trade Item), 5 decimal places */
  VOLUME_CUBIC_YARDS_5 = "volumeCubicYards5",
  /** AI (3670) – Logistic volume, cubic inches, 0 decimal places */
  VOLUME_CUBIC_INCHES_LOG_0 = "volumeCubicInchesLog0",
  /** AI (3671) – Logistic volume, cubic inches, 1 decimal place */
  VOLUME_CUBIC_INCHES_LOG_1 = "volumeCubicInchesLog1",
  /** AI (3672) – Logistic volume, cubic inches, 2 decimal places */
  VOLUME_CUBIC_INCHES_LOG_2 = "volumeCubicInchesLog2",
  /** AI (3673) – Logistic volume, cubic inches, 3 decimal places */
  VOLUME_CUBIC_INCHES_LOG_3 = "volumeCubicInchesLog3",
  /** AI (3674) – Logistic volume, cubic inches, 4 decimal places */
  VOLUME_CUBIC_INCHES_LOG_4 = "volumeCubicInchesLog4",
  /** AI (3675) – Logistic volume, cubic inches, 5 decimal places */
  VOLUME_CUBIC_INCHES_LOG_5 = "volumeCubicInchesLog5",
  /** AI (3680) – Logistic volume, cubic feet, 0 decimal places */
  VOLUME_CUBIC_FEET_LOG_0 = "volumeCubicFeetLog0",
  /** AI (3681) – Logistic volume, cubic feet, 1 decimal place */
  VOLUME_CUBIC_FEET_LOG_1 = "volumeCubicFeetLog1",
  /** AI (3682) – Logistic volume, cubic feet, 2 decimal places */
  VOLUME_CUBIC_FEET_LOG_2 = "volumeCubicFeetLog2",
  /** AI (3683) – Logistic volume, cubic feet, 3 decimal places */
  VOLUME_CUBIC_FEET_LOG_3 = "volumeCubicFeetLog3",
  /** AI (3684) – Logistic volume, cubic feet, 4 decimal places */
  VOLUME_CUBIC_FEET_LOG_4 = "volumeCubicFeetLog4",
  /** AI (3685) – Logistic volume, cubic feet, 5 decimal places */
  VOLUME_CUBIC_FEET_LOG_5 = "volumeCubicFeetLog5",
  /** AI (3690) – Logistic volume, cubic yards, 0 decimal places */
  VOLUME_CUBIC_YARDS_LOG_0 = "volumeCubicYardsLog0",
  /** AI (3691) – Logistic volume, cubic yards, 1 decimal place */
  VOLUME_CUBIC_YARDS_LOG_1 = "volumeCubicYardsLog1",
  /** AI (3692) – Logistic volume, cubic yards, 2 decimal places */
  VOLUME_CUBIC_YARDS_LOG_2 = "volumeCubicYardsLog2",
  /** AI (3693) – Logistic volume, cubic yards, 3 decimal places */
  VOLUME_CUBIC_YARDS_LOG_3 = "volumeCubicYardsLog3",
  /** AI (3694) – Logistic volume, cubic yards, 4 decimal places */
  VOLUME_CUBIC_YARDS_LOG_4 = "volumeCubicYardsLog4",
  /** AI (3695) – Logistic volume, cubic yards, 5 decimal places */
  VOLUME_CUBIC_YARDS_LOG_5 = "volumeCubicYardsLog5",
  /** AI (37) – Count of Trade Items */
  COUNT = "count",
  /** AI (3900) – Applicable Amount Payable, local currency, 0 decimal places */
  AMOUNT_PAYABLE_0 = "amountPayable0",
  /** AI (3901) – Applicable Amount Payable, local currency, 1 decimal place */
  AMOUNT_PAYABLE_1 = "amountPayable1",
  /** AI (3902) – Applicable Amount Payable, local currency, 2 decimal places */
  AMOUNT_PAYABLE_2 = "amountPayable2",
  /** AI (3903) – Applicable Amount Payable, local currency, 3 decimal places */
  AMOUNT_PAYABLE_3 = "amountPayable3",
  /** AI (3904) – Applicable Amount Payable, local currency, 4 decimal places */
  AMOUNT_PAYABLE_4 = "amountPayable4",
  /** AI (3905) – Applicable Amount Payable, local currency, 5 decimal places */
  AMOUNT_PAYABLE_5 = "amountPayable5",
  /** AI (3910) – Applicable Amount Payable with ISO Currency Code, 0 decimal places */
  AMOUNT_PAYABLE_ISO_0 = "amountPayableISO0",
  /** AI (3911) – Applicable Amount Payable with ISO Currency Code, 1 decimal place */
  AMOUNT_PAYABLE_ISO_1 = "amountPayableISO1",
  /** AI (3912) – Applicable Amount Payable with ISO Currency Code, 2 decimal places */
  AMOUNT_PAYABLE_ISO_2 = "amountPayableISO2",
  /** AI (3913) – Applicable Amount Payable with ISO Currency Code, 3 decimal places */
  AMOUNT_PAYABLE_ISO_3 = "amountPayableISO3",
  /** AI (3914) – Applicable Amount Payable with ISO Currency Code, 4 decimal places */
  AMOUNT_PAYABLE_ISO_4 = "amountPayableISO4",
  /** AI (3915) – Applicable Amount Payable with ISO Currency Code, 5 decimal places */
  AMOUNT_PAYABLE_ISO_5 = "amountPayableISO5",
  /** AI (3920) – Applicable Amount Payable, single monetary area (Variable Measure Trade Item), 0 decimal places */
  PRICE_0 = "price0",
  /** AI (3921) – Applicable Amount Payable, single monetary area (Variable Measure Trade Item), 1 decimal place */
  PRICE_1 = "price1",
  /** AI (3922) – Applicable Amount Payable, single monetary area (Variable Measure Trade Item), 2 decimal places */
  PRICE_2 = "price2",
  /** AI (3923) – Applicable Amount Payable, single monetary area (Variable Measure Trade Item), 3 decimal places */
  PRICE_3 = "price3",
  /** AI (3930) – Applicable Amount Payable with ISO Currency Code (Variable Measure Trade Item), 0 decimal places */
  PRICE_ISO_0 = "priceISO0",
  /** AI (3931) – Applicable Amount Payable with ISO Currency Code (Variable Measure Trade Item), 1 decimal place */
  PRICE_ISO_1 = "priceISO1",
  /** AI (3932) – Applicable Amount Payable with ISO Currency Code (Variable Measure Trade Item), 2 decimal places */
  PRICE_ISO_2 = "priceISO2",
  /** AI (3933) – Applicable Amount Payable with ISO Currency Code (Variable Measure Trade Item), 3 decimal places */
  PRICE_ISO_3 = "priceISO3",
  /** AI (3940) – Percentage discount of a coupon, 0 decimal places */
  PERCENT_DISCOUNT_0 = "percentDiscount0",
  /** AI (3941) – Percentage discount of a coupon, 1 decimal place */
  PERCENT_DISCOUNT_1 = "percentDiscount1",
  /** AI (3942) – Percentage discount of a coupon, 2 decimal places */
  PERCENT_DISCOUNT_2 = "percentDiscount2",
  /** AI (3943) – Percentage discount of a coupon, 3 decimal places */
  PERCENT_DISCOUNT_3 = "percentDiscount3",
  /** AI (3950) – Amount payable per unit of measure single monetary area (variable measure trade item), 0 decimal places */
  PRICE_PER_UNIT_MEASURE_0 = "pricePerUnitMeasure0",
  /** AI (3951) – Amount payable per unit of measure single monetary area (variable measure trade item), 1 decimal place */
  PRICE_PER_UNIT_MEASURE_1 = "pricePerUnitMeasure1",
  /** AI (3952) – Amount payable per unit of measure single monetary area (variable measure trade item), 2 decimal places */
  PRICE_PER_UNIT_MEASURE_2 = "pricePerUnitMeasure2",
  /** AI (3953) – Amount payable per unit of measure single monetary area (variable measure trade item), 3 decimal places */
  PRICE_PER_UNIT_MEASURE_3 = "pricePerUnitMeasure3",
  /** AI (3954) – Amount payable per unit of measure single monetary area (variable measure trade item), 4 decimal places */
  PRICE_PER_UNIT_MEASURE_4 = "pricePerUnitMeasure4",
  /** AI (3955) – Amount payable per unit of measure single monetary area (variable measure trade item), 5 decimal places */
  PRICE_PER_UNIT_MEASURE_5 = "pricePerUnitMeasure5",
  /** AI (400) – Customer's Purchase Order Number */
  ORDER_NUMBER = "orderNumber",
  /** AI (401) – Global Identification Number for Consignment (GINC) */
  GINC = "ginc",
  /** AI (402) – Global Shipment Identification Number (GSIN) */
  GSIN = "gsin",
  /** AI (403) – Routing Code */
  ROUTE = "route",
  /** AI (410) – Ship to - Deliver to Global Location Number */
  SHIP_TO = "shipTo",
  /** AI (411) – Bill to - Invoice to Global Location Number */
  BILL_TO = "billTo",
  /** AI (412) – Purchased from Global Location Number */
  PURCHASE_FROM = "purchaseFrom",
  /** AI (413) – Ship for - Deliver for - Forward to Global Location Number */
  SHIP_FOR = "shipFor",
  /** AI (414) – Identification of a physical location - Global Location Number (GLN) */
  LOC_NO = "locNo",
  /** AI (415) – Global Location Number (GLN) of the invoicing party */
  PAY_TO = "payTo",
  /** AI (416) – Global Location Number (GLN) of the production or service location */
  PROD_SERV_LOC = "prodServLoc",
  /** AI (417) – Party Global Location Number (GLN) */
  PARTY = "party",
  /** AI (420) – Ship to - Deliver to Postal Code Within a Single Postal Authority */
  SHIP_TO_POST = "shipToPost",
  /** AI (421) – Ship to - Deliver to Postal Code with ISO Country Code */
  SHIP_TO_POST_ISO = "shipToPostISO",
  /** AI (422) – Country of Origin of a Trade Item */
  ORIGIN = "origin",
  /** AI (423) – Country of Initial Processing Up to 5 3-digit ISO-countrycodes */
  COUNTRY_INITIAL_PROCESS = "countryInitialProcess",
  /** AI (424) – Country of Processing */
  COUNTRY_PROCESS = "countryProcess",
  /** AI (425) – Country of Disassembly */
  COUNTRY_DISASSEMBLY = "countryDisassembly",
  /** AI (426) – Country Covering full Process Chain */
  COUNTRY_FULL_PROCESS = "countryFullProcess",
  /** AI (427) – Country Subdivision of Origin */
  ORIGIN_SUBDIVISION = "originSubdivision",
  /** AI (4300) – Ship-to / Deliver-to Company name */
  SHIP_TO_COMP = "shipToComp",
  /** AI (4301) – Ship-to / Deliver-to contact name */
  SHIP_TO_NAME = "shipToName",
  /** AI (4302) – Ship-to / Deliver-to address line 1 */
  SHIP_TO_ADD1 = "shipToAdd1",
  /** AI (4303) – Ship-to / Deliver-to address line 2 */
  SHIP_TO_ADD2 = "shipToAdd2",
  /** AI (4304) – Ship-to / Deliver-to suburb */
  SHIP_TO_SUB = "shipToSub",
  /** AI (4305) – Ship-to / Deliver-to locality */
  SHIP_TO_LOC = "shipToLoc",
  /** AI (4306) – Ship-to / Deliver-to region */
  SHIP_TO_REG = "shipToReg",
  /** AI (4307) – Ship-to / Deliver-to country code */
  SHIP_TO_COUNTRY = "shipToCountry",
  /** AI (4308) – Ship-to / Deliver-to telephone number */
  SHIP_TO_PHONE = "shipToPhone",
  /** AI (4309) – Ship-to / Deliver-to GEO location */
  SHIP_TO_GEO = "shipToGeo",
  /** AI (4310) – Return-to / Deliver-to Company name */
  RTN_TO_COMP = "rtnToComp",
  /** AI (4311) – Return-to / Deliver-to contact name */
  RTN_TO_NAME = "rtnToName",
  /** AI (4312) – Return-to / Deliver-to address line 1 */
  RTN_TO_ADD1 = "rtnToAdd1",
  /** AI (4313) – Return-to / Deliver-to address line 2 */
  RTN_TO_ADD2 = "rtnToAdd2",
  /** AI (4314) – Return-to / Deliver-to suburb */
  RTN_TO_SUB = "rtnToSub",
  /** AI (4315) – Return-to / Deliver-to locality */
  RTN_TO_LOC = "rtnToLoc",
  /** AI (4316) – Return-to / Deliver-to region */
  RTN_TO_REG = "rtnToReg",
  /** AI (4317) – Return-to / Deliver-to country code */
  RTN_TO_COUNTRY = "rtnToCountry",
  /** AI (4318) – Return-to / Deliver-to postal code */
  RTN_TO_POST = "rtnToPost",
  /** AI (4319) – Return-to / Deliver-to telephone number */
  RTN_TO_PHONE = "rtnToPhone",
  /** AI (4320) – Service code description */
  SRV_DESCRIPTION = "srvDescription",
  /** AI (4321) – Dangerous goods flag */
  DANGEROUS_GOODS = "dangerousGoods",
  /** AI (4322) – Authority to leave flag */
  AUTH_LEAVE = "authLeave",
  /** AI (4323) – Signature required flag */
  SIG_REQUIRED = "sigRequired",
  /** AI (4324) – Not before delivery date/time */
  NBEF_DEL_DT = "nbefDelDt",
  /** AI (4325) – Not after delivery date/time */
  NAFT_DEL_DT = "naftDelDt",
  /** AI (4326) – Release date */
  REL_DATE = "relDate",
  /** AI (4330) – Maximum temperature in Fahrenheit */
  MAX_TEMP_F = "maxTempF",
  /** AI (4331) – Maximum temperature in Celsius */
  MAX_TEMP_C = "maxTempC",
  /** AI (4332) – Minimum temperature in Fahrenheit */
  MIN_TEMP_F = "minTempF",
  /** AI (4333) – Minimum temperature in Celsius */
  MIN_TEMP_C = "minTempC",
  /** AI (7001) – NATO Stock Number (NSN) */
  NSN = "nsn",
  /** AI (7002) – UN/ECE Meat Carcasses and Cuts Classification */
  MEAT_CUT = "meatCut",
  /** AI (7003) – Expiration Date and Time */
  EXPIRATION_DATE_TIME = "expirationDateTime",
  /** AI (7004) – Active Potency */
  ACTIVE_POTENCY = "activePotency",
  /** AI (7005) – Catch area */
  CATCH_AREA = "catchArea",
  /** AI (7006) – First freeze date */
  FIRST_FREEZE_DATE = "firstFreezeDate",
  /** AI (7007) – Harvest date */
  HARVEST_DATE = "harvestDate",
  /** AI (7008) – Species for fishery purposes */
  AQUATIC_SPECIES = "aquaticSpecies",
  /** AI (7009) – Fishing gear type */
  FISHING_GEAR_TYPE = "fishingGearType",
  /** AI (7010) – Production method */
  PROD_METHOD = "prodMethod",
  /** AI (7011) – Test by date */
  TEST_BY = "testBy",
  /** AI (7020) – Refurbishment lot ID */
  REFURB_LOT = "refurbLot",
  /** AI (7021) – Functional status */
  FUNC_STAT = "funcStat",
  /** AI (7022) – Revision status */
  REV_STAT = "revStat",
  /** AI (7023) – Global Individual Asset Identifier of an assembly */
  GIAI_ASSEMBLY = "giaiAssembly",
  /** AI (7030) – Approval Number of Processor with ISO Country Code (sequence 0) */
  PROCESSOR = "processor",
  /** AI (7031) – Approval Number of Processor with ISO Country Code (sequence 1) */
  PROCESSOR_2 = "processor2",
  /** AI (7032) – Approval Number of Processor with ISO Country Code (sequence 2) */
  PROCESSOR_3 = "processor3",
  /** AI (7033) – Approval Number of Processor with ISO Country Code (sequence 3) */
  PROCESSOR_4 = "processor4",
  /** AI (7034) – Approval Number of Processor with ISO Country Code (sequence 4) */
  PROCESSOR_5 = "processor5",
  /** AI (7035) – Approval Number of Processor with ISO Country Code (sequence 5) */
  PROCESSOR_6 = "processor6",
  /** AI (7036) – Approval Number of Processor with ISO Country Code (sequence 6) */
  PROCESSOR_7 = "processor7",
  /** AI (7037) – Approval Number of Processor with ISO Country Code (sequence 7) */
  PROCESSOR_8 = "processor8",
  /** AI (7038) – Approval Number of Processor with ISO Country Code (sequence 8) */
  PROCESSOR_9 = "processor9",
  /** AI (7039) – Approval Number of Processor with ISO Country Code (sequence 9) */
  PROCESSOR_10 = "processor10",
  /** AI (7040) – GS1 UIC with Extension 1 and Importer index */
  UIC_EXT = "uicExt",
  /** AI (7041) – UN/CEFACT freight unit type */
  UFRGT_UNIT_TYPE = "ufrgtUnitType",
  /** AI (710) – National Healthcare Reimbursement Number (NHRN) – Germany PZN */
  NHRN_PZN = "nhrnPzn",
  /** AI (711) – National Healthcare Reimbursement Number (NHRN) – France CIP */
  NHRN_CIP = "nhrnCip",
  /** AI (712) – National Healthcare Reimbursement Number (NHRN) – Spain CN */
  NHRN_CN = "nhrnCn",
  /** AI (713) – National Healthcare Reimbursement Number (NHRN) – Brasil DRN */
  NHRN_DRN = "nhrnDrn",
  /** AI (714) – National Healthcare Reimbursement Number (NHRN) – Portugal AIM */
  NHRN_AIM = "nhrnAim",
  /** AI (715) – National Healthcare Reimbursement Number (NHRN) – United States of America NDC */
  NHRN_DNC = "nhrnDnc",
  /** AI (716) – National Healthcare Reimbursement Number (NHRN) – Italy AIC */
  NHRN_AIC = "nhrnAic",
  /** AI (717) – National Healthcare Reimbursement Number (NHRN) – Costa Rica Sanitary Register Number */
  NHRN_SRN = "nhrnSrn",
  /** AI (7230) – Certification reference #0 */
  CERT0 = "cert0",
  /** AI (7231) – Certification reference #1 */
  CERT1 = "cert1",
  /** AI (7232) – Certification reference #2 */
  CERT2 = "cert2",
  /** AI (7233) – Certification reference #3 */
  CERT3 = "cert3",
  /** AI (7234) – Certification reference #4 */
  CERT4 = "cert4",
  /** AI (7235) – Certification reference #5 */
  CERT5 = "cert5",
  /** AI (7236) – Certification reference #6 */
  CERT6 = "cert6",
  /** AI (7237) – Certification reference #7 */
  CERT7 = "cert7",
  /** AI (7238) – Certification reference #8 */
  CERT8 = "cert8",
  /** AI (7239) – Certification reference #9 */
  CERT9 = "cert9",
  /** AI (7240) – Protocol ID */
  PROTOCOL = "protocol",
  /** AI (7241) – AIDC media type */
  AIDC_MEDIA_TYPE = "aidcMediaType",
  /** AI (7242) – Version control number */
  VCN = "vcn",
  /** AI (7250) – Date of birth */
  DOB = "dob",
  /** AI (7251) – Date and time of birth */
  DOB_TIME = "dobTime",
  /** AI (7252) – Biological sex */
  BIO_SEX = "bioSex",
  /** AI (7253) – Family name of person */
  FAMILY_NAME = "familyName",
  /** AI (7254) – Given name of person */
  GIVEN_NAME = "givenName",
  /** AI (7255) – Name suffix of person */
  SUFFIX = "suffix",
  /** AI (7256) – Full name of person */
  FULL_NAME = "fullName",
  /** AI (7257) – Address of person */
  PERSON_ADDR = "personAddr",
  /** AI (7258) – Baby birth sequence indicator */
  BIRTH_SEQUENCE = "birthSeq",
  /** AI (7259) – Baby of family name */
  BABY = "baby",
  /** AI (8001) – Roll Products (Width, Length, Core Diameter, Direction, Splices) */
  ROLL_PRODUCTS = "rollProducts",
  /** AI (8002) – Cellular Mobile Telephone Identifier */
  CMT_NO = "cmtNo",
  /** AI (8003) – Global Returnable Asset Identifier (GRAI) */
  GRAI = "grai",
  /** AI (8004) – Global Individual Asset Identifier (GIAI) */
  GIAI = "giai",
  /** AI (8005) – Price Per Unit of Measure */
  PRICE_PER_UNIT = "pricePerUnit",
  /** AI (8006) – Identification of the Components of a Trade Item */
  ITIP = "itip",
  /** AI (8007) – International Bank Account Number (IBAN) */
  IBAN = "iban",
  /** AI (8008) – Date and Time of Production */
  PROD_TIME = "prodTime",
  /** AI (8009) – Optically readable sensor indicator */
  OPTICAL_SENSOR = "opticalSensor",
  /** AI (8010) – Component / Part Identifier (CPID) */
  CPID = "cpid",
  /** AI (8011) – Component / Part Identifier Serial Number (CPID SERIAL) */
  CPID_SERIAL = "cpidSerial",
  /** AI (8012) – Software version */
  VERSION = "version",
  /** AI (8013) – Global model number */
  GMN = "gmn",
  /** AI (8014) – Highly Individualised Device Registration Identifier (HIDRI) */
  HIDRI = "hidri",
  /** AI (8017) – Global Service Relation Number to identify the relationship between an organisation offering services and the provider of services */
  GSRN_PROVIDER = "gsrnProvider",
  /** AI (8018) – Global Service Relation Number to identify the relationship between an organisation offering services and the recipient of services */
  GSRN_RECIPIENT = "gsrnRecipient",
  /** AI (8019) – Service Relation Instance Number (SRIN) */
  SRIN = "srin",
  /** AI (8020) – Payment Slip Reference Number */
  REF_NO = "refNo",
  /** AI (8026) – Identification of pieces of a trade item (ITIP) contained in a logistic unit */
  ITIP_CONTENT = "itipContent",
  /** AI (8030) – Digital Signature (DigSig) */
  DIG_SIG = "digSig",
  /** AI (8040) – International Mobile Equipment Identity (IMEI) */
  IMEI = "imei",
  /** AI (8041) – International Mobile Equipment Identity 2 (IMEI2) */
  IMEI2 = "imei2",
  /** AI (8042) – Embedded SIM (eSIM) */
  ESIM = "esim",
  /** AI (8043) – Physical SIM (pSIM) */
  PSIM = "psim",
  /** AI (8110) – Coupon Code Identification for Use in North America */
  COUPON = "coupon",
  /** AI (8111) – Loyalty points of a coupon */
  POINTS = "points",
  /** AI (8112) – Positive offer file coupon code identification for use in North America */
  COUPON_EXTENDED = "couponExtended",
  /** AI (8200) – Extended Packaging URL */
  PRODUCT_URL = "productURL",
  /** AI (90) – Information Mutually Agreed Between Trading Partners */
  INTERNAL_1 = "internal1",
  /** AI (91) – Company Internal Information */
  INTERNAL_2 = "internal2",
  /** AI (92) – Company Internal Information */
  INTERNAL_3 = "internal3",
  /** AI (93) – Company Internal Information */
  INTERNAL_4 = "internal4",
  /** AI (94) – Company Internal Information */
  INTERNAL_5 = "internal5",
  /** AI (95) – Company Internal Information */
  INTERNAL_6 = "internal6",
  /** AI (96) – Company Internal Information */
  INTERNAL_7 = "internal7",
  /** AI (97) – Company Internal Information */
  INTERNAL_8 = "internal8",
  /** AI (98) – Company Internal Information */
  INTERNAL_9 = "internal9",
  /** AI (99) – Company Internal Information */
  INTERNAL_10 = "internal10",
}

export const AIMap: Record<string, GS1Field> = {
  ai00: GS1Field.SSCC,
  ai01: GS1Field.GTIN,
  ai02: GS1Field.CONTENT,
  ai03: GS1Field.MTO_GTIN,
  ai10: GS1Field.BATCH,
  ai11: GS1Field.PROD_DATE,
  ai12: GS1Field.DUE_DATE,
  ai13: GS1Field.PACK_DATE,
  ai15: GS1Field.BEST_BEFORE,
  ai16: GS1Field.SELL_BY,
  ai17: GS1Field.EXP_DATE,
  ai20: GS1Field.VARIANT,
  ai21: GS1Field.SERIAL,
  ai22: GS1Field.HIBCC,
  ai235: GS1Field.TPX,
  ai240: GS1Field.ADDITIONAL_PRODUCT_ID,
  ai241: GS1Field.CUSTOMER_PART_NUMBER,
  ai242: GS1Field.MADE_TO_ORDER,
  ai243: GS1Field.PACKAGING,
  ai250: GS1Field.SECONDARY_SERIAL_NUMBER,
  ai251: GS1Field.REF_SOURCE,
  ai253: GS1Field.GDTI,
  ai254: GS1Field.GLN_EXTENSION,
  ai255: GS1Field.GCN,
  ai30: GS1Field.VARIABLE_COUNT,
  ai3100: GS1Field.NET_WEIGHT_KG_0,
  ai3101: GS1Field.NET_WEIGHT_KG_1,
  ai3102: GS1Field.NET_WEIGHT_KG_2,
  ai3103: GS1Field.NET_WEIGHT_KG_3,
  ai3104: GS1Field.NET_WEIGHT_KG_4,
  ai3105: GS1Field.NET_WEIGHT_KG_5,
  ai3110: GS1Field.LENGTH_METERS_0,
  ai3111: GS1Field.LENGTH_METERS_1,
  ai3112: GS1Field.LENGTH_METERS_2,
  ai3113: GS1Field.LENGTH_METERS_3,
  ai3114: GS1Field.LENGTH_METERS_4,
  ai3115: GS1Field.LENGTH_METERS_5,
  ai3120: GS1Field.WIDTH_METERS_0,
  ai3121: GS1Field.WIDTH_METERS_1,
  ai3122: GS1Field.WIDTH_METERS_2,
  ai3123: GS1Field.WIDTH_METERS_3,
  ai3124: GS1Field.WIDTH_METERS_4,
  ai3125: GS1Field.WIDTH_METERS_5,
  ai3130: GS1Field.HEIGHT_METERS_0,
  ai3131: GS1Field.HEIGHT_METERS_1,
  ai3132: GS1Field.HEIGHT_METERS_2,
  ai3133: GS1Field.HEIGHT_METERS_3,
  ai3134: GS1Field.HEIGHT_METERS_4,
  ai3135: GS1Field.HEIGHT_METERS_5,
  ai3140: GS1Field.AREA_SQUARE_METERS_0,
  ai3141: GS1Field.AREA_SQUARE_METERS_1,
  ai3142: GS1Field.AREA_SQUARE_METERS_2,
  ai3143: GS1Field.AREA_SQUARE_METERS_3,
  ai3144: GS1Field.AREA_SQUARE_METERS_4,
  ai3145: GS1Field.AREA_SQUARE_METERS_5,
  ai3150: GS1Field.NET_VOLUME_LITERS_0,
  ai3151: GS1Field.NET_VOLUME_LITERS_1,
  ai3152: GS1Field.NET_VOLUME_LITERS_2,
  ai3153: GS1Field.NET_VOLUME_LITERS_3,
  ai3154: GS1Field.NET_VOLUME_LITERS_4,
  ai3155: GS1Field.NET_VOLUME_LITERS_5,
  ai3160: GS1Field.NET_VOLUME_CUBIC_METERS_0,
  ai3161: GS1Field.NET_VOLUME_CUBIC_METERS_1,
  ai3162: GS1Field.NET_VOLUME_CUBIC_METERS_2,
  ai3163: GS1Field.NET_VOLUME_CUBIC_METERS_3,
  ai3164: GS1Field.NET_VOLUME_CUBIC_METERS_4,
  ai3165: GS1Field.NET_VOLUME_CUBIC_METERS_5,
  ai3200: GS1Field.NET_WEIGHT_LB_0,
  ai3201: GS1Field.NET_WEIGHT_LB_1,
  ai3202: GS1Field.NET_WEIGHT_LB_2,
  ai3203: GS1Field.NET_WEIGHT_LB_3,
  ai3204: GS1Field.NET_WEIGHT_LB_4,
  ai3205: GS1Field.NET_WEIGHT_LB_5,
  ai3210: GS1Field.LENGTH_INCHES_0,
  ai3211: GS1Field.LENGTH_INCHES_1,
  ai3212: GS1Field.LENGTH_INCHES_2,
  ai3213: GS1Field.LENGTH_INCHES_3,
  ai3214: GS1Field.LENGTH_INCHES_4,
  ai3215: GS1Field.LENGTH_INCHES_5,
  ai3220: GS1Field.LENGTH_FEET_0,
  ai3221: GS1Field.LENGTH_FEET_1,
  ai3222: GS1Field.LENGTH_FEET_2,
  ai3223: GS1Field.LENGTH_FEET_3,
  ai3224: GS1Field.LENGTH_FEET_4,
  ai3225: GS1Field.LENGTH_FEET_5,
  ai3230: GS1Field.LENGTH_YARDS_0,
  ai3231: GS1Field.LENGTH_YARDS_1,
  ai3232: GS1Field.LENGTH_YARDS_2,
  ai3233: GS1Field.LENGTH_YARDS_3,
  ai3234: GS1Field.LENGTH_YARDS_4,
  ai3235: GS1Field.LENGTH_YARDS_5,
  ai3240: GS1Field.WIDTH_INCHES_0,
  ai3241: GS1Field.WIDTH_INCHES_1,
  ai3242: GS1Field.WIDTH_INCHES_2,
  ai3243: GS1Field.WIDTH_INCHES_3,
  ai3244: GS1Field.WIDTH_INCHES_4,
  ai3245: GS1Field.WIDTH_INCHES_5,
  ai3250: GS1Field.WIDTH_FEET_0,
  ai3251: GS1Field.WIDTH_FEET_1,
  ai3252: GS1Field.WIDTH_FEET_2,
  ai3253: GS1Field.WIDTH_FEET_3,
  ai3254: GS1Field.WIDTH_FEET_4,
  ai3255: GS1Field.WIDTH_FEET_5,
  ai3260: GS1Field.WIDTH_YARDS_0,
  ai3261: GS1Field.WIDTH_YARDS_1,
  ai3262: GS1Field.WIDTH_YARDS_2,
  ai3263: GS1Field.WIDTH_YARDS_3,
  ai3264: GS1Field.WIDTH_YARDS_4,
  ai3265: GS1Field.WIDTH_YARDS_5,
  ai3270: GS1Field.HEIGHT_INCHES_0,
  ai3271: GS1Field.HEIGHT_INCHES_1,
  ai3272: GS1Field.HEIGHT_INCHES_2,
  ai3273: GS1Field.HEIGHT_INCHES_3,
  ai3274: GS1Field.HEIGHT_INCHES_4,
  ai3275: GS1Field.HEIGHT_INCHES_5,
  ai3280: GS1Field.HEIGHT_FEET_0,
  ai3281: GS1Field.HEIGHT_FEET_1,
  ai3282: GS1Field.HEIGHT_FEET_2,
  ai3283: GS1Field.HEIGHT_FEET_3,
  ai3284: GS1Field.HEIGHT_FEET_4,
  ai3285: GS1Field.HEIGHT_FEET_5,
  ai3290: GS1Field.HEIGHT_YARDS_0,
  ai3291: GS1Field.HEIGHT_YARDS_1,
  ai3292: GS1Field.HEIGHT_YARDS_2,
  ai3293: GS1Field.HEIGHT_YARDS_3,
  ai3294: GS1Field.HEIGHT_YARDS_4,
  ai3295: GS1Field.HEIGHT_YARDS_5,
  ai3300: GS1Field.GROSS_WEIGHT_KG_0,
  ai3301: GS1Field.GROSS_WEIGHT_KG_1,
  ai3302: GS1Field.GROSS_WEIGHT_KG_2,
  ai3303: GS1Field.GROSS_WEIGHT_KG_3,
  ai3304: GS1Field.GROSS_WEIGHT_KG_4,
  ai3305: GS1Field.GROSS_WEIGHT_KG_5,
  ai3310: GS1Field.LENGTH_METERS_LOG_0,
  ai3311: GS1Field.LENGTH_METERS_LOG_1,
  ai3312: GS1Field.LENGTH_METERS_LOG_2,
  ai3313: GS1Field.LENGTH_METERS_LOG_3,
  ai3314: GS1Field.LENGTH_METERS_LOG_4,
  ai3315: GS1Field.LENGTH_METERS_LOG_5,
  ai3320: GS1Field.WIDTH_METERS_LOG_0,
  ai3321: GS1Field.WIDTH_METERS_LOG_1,
  ai3322: GS1Field.WIDTH_METERS_LOG_2,
  ai3323: GS1Field.WIDTH_METERS_LOG_3,
  ai3324: GS1Field.WIDTH_METERS_LOG_4,
  ai3325: GS1Field.WIDTH_METERS_LOG_5,
  ai3330: GS1Field.HEIGHT_METERS_LOG_0,
  ai3331: GS1Field.HEIGHT_METERS_LOG_1,
  ai3332: GS1Field.HEIGHT_METERS_LOG_2,
  ai3333: GS1Field.HEIGHT_METERS_LOG_3,
  ai3334: GS1Field.HEIGHT_METERS_LOG_4,
  ai3335: GS1Field.HEIGHT_METERS_LOG_5,
  ai3340: GS1Field.AREA_SQUARE_METERS_LOG_0,
  ai3341: GS1Field.AREA_SQUARE_METERS_LOG_1,
  ai3342: GS1Field.AREA_SQUARE_METERS_LOG_2,
  ai3343: GS1Field.AREA_SQUARE_METERS_LOG_3,
  ai3344: GS1Field.AREA_SQUARE_METERS_LOG_4,
  ai3345: GS1Field.AREA_SQUARE_METERS_LOG_5,
  ai3350: GS1Field.VOLUME_LITRES_LOG_0,
  ai3351: GS1Field.VOLUME_LITRES_LOG_1,
  ai3352: GS1Field.VOLUME_LITRES_LOG_2,
  ai3353: GS1Field.VOLUME_LITRES_LOG_3,
  ai3354: GS1Field.VOLUME_LITRES_LOG_4,
  ai3355: GS1Field.VOLUME_LITRES_LOG_5,
  ai3360: GS1Field.VOLUME_CUBIC_METERS_LOG_0,
  ai3361: GS1Field.VOLUME_CUBIC_METERS_LOG_1,
  ai3362: GS1Field.VOLUME_CUBIC_METERS_LOG_2,
  ai3363: GS1Field.VOLUME_CUBIC_METERS_LOG_3,
  ai3364: GS1Field.VOLUME_CUBIC_METERS_LOG_4,
  ai3365: GS1Field.VOLUME_CUBIC_METERS_LOG_5,
  ai3370: GS1Field.KG_PER_SQUARE_METERS_0,
  ai3371: GS1Field.KG_PER_SQUARE_METERS_1,
  ai3372: GS1Field.KG_PER_SQUARE_METERS_2,
  ai3373: GS1Field.KG_PER_SQUARE_METERS_3,
  ai3374: GS1Field.KG_PER_SQUARE_METERS_4,
  ai3375: GS1Field.KG_PER_SQUARE_METERS_5,
  ai3400: GS1Field.GROSS_WEIGHT_POUNDS_0,
  ai3401: GS1Field.GROSS_WEIGHT_POUNDS_1,
  ai3402: GS1Field.GROSS_WEIGHT_POUNDS_2,
  ai3403: GS1Field.GROSS_WEIGHT_POUNDS_3,
  ai3404: GS1Field.GROSS_WEIGHT_POUNDS_4,
  ai3405: GS1Field.GROSS_WEIGHT_POUNDS_5,
  ai3410: GS1Field.LENGTH_INCHES_LOG_0,
  ai3411: GS1Field.LENGTH_INCHES_LOG_1,
  ai3412: GS1Field.LENGTH_INCHES_LOG_2,
  ai3413: GS1Field.LENGTH_INCHES_LOG_3,
  ai3414: GS1Field.LENGTH_INCHES_LOG_4,
  ai3415: GS1Field.LENGTH_INCHES_LOG_5,
  ai3420: GS1Field.LENGTH_FEET_LOG_0,
  ai3421: GS1Field.LENGTH_FEET_LOG_1,
  ai3422: GS1Field.LENGTH_FEET_LOG_2,
  ai3423: GS1Field.LENGTH_FEET_LOG_3,
  ai3424: GS1Field.LENGTH_FEET_LOG_4,
  ai3425: GS1Field.LENGTH_FEET_LOG_5,
  ai3430: GS1Field.LENGTH_YARDS_LOG_0,
  ai3431: GS1Field.LENGTH_YARDS_LOG_1,
  ai3432: GS1Field.LENGTH_YARDS_LOG_2,
  ai3433: GS1Field.LENGTH_YARDS_LOG_3,
  ai3434: GS1Field.LENGTH_YARDS_LOG_4,
  ai3435: GS1Field.LENGTH_YARDS_LOG_5,
  ai3440: GS1Field.WIDTH_INCHES_LOG_0,
  ai3441: GS1Field.WIDTH_INCHES_LOG_1,
  ai3442: GS1Field.WIDTH_INCHES_LOG_2,
  ai3443: GS1Field.WIDTH_INCHES_LOG_3,
  ai3444: GS1Field.WIDTH_INCHES_LOG_4,
  ai3445: GS1Field.WIDTH_INCHES_LOG_5,
  ai3450: GS1Field.WIDTH_FEET_LOG_0,
  ai3451: GS1Field.WIDTH_FEET_LOG_1,
  ai3452: GS1Field.WIDTH_FEET_LOG_2,
  ai3453: GS1Field.WIDTH_FEET_LOG_3,
  ai3454: GS1Field.WIDTH_FEET_LOG_4,
  ai3455: GS1Field.WIDTH_FEET_LOG_5,
  ai3460: GS1Field.WIDTH_YARDS_LOG_0,
  ai3461: GS1Field.WIDTH_YARDS_LOG_1,
  ai3462: GS1Field.WIDTH_YARDS_LOG_2,
  ai3463: GS1Field.WIDTH_YARDS_LOG_3,
  ai3464: GS1Field.WIDTH_YARDS_LOG_4,
  ai3465: GS1Field.WIDTH_YARDS_LOG_5,
  ai3470: GS1Field.HEIGHT_INCHES_LOG_0,
  ai3471: GS1Field.HEIGHT_INCHES_LOG_1,
  ai3472: GS1Field.HEIGHT_INCHES_LOG_2,
  ai3473: GS1Field.HEIGHT_INCHES_LOG_3,
  ai3474: GS1Field.HEIGHT_INCHES_LOG_4,
  ai3475: GS1Field.HEIGHT_INCHES_LOG_5,
  ai3480: GS1Field.HEIGHT_FEET_LOG_0,
  ai3481: GS1Field.HEIGHT_FEET_LOG_1,
  ai3482: GS1Field.HEIGHT_FEET_LOG_2,
  ai3483: GS1Field.HEIGHT_FEET_LOG_3,
  ai3484: GS1Field.HEIGHT_FEET_LOG_4,
  ai3485: GS1Field.HEIGHT_FEET_LOG_5,
  ai3490: GS1Field.HEIGHT_YARDS_LOG_0,
  ai3491: GS1Field.HEIGHT_YARDS_LOG_1,
  ai3492: GS1Field.HEIGHT_YARDS_LOG_2,
  ai3493: GS1Field.HEIGHT_YARDS_LOG_3,
  ai3494: GS1Field.HEIGHT_YARDS_LOG_4,
  ai3495: GS1Field.HEIGHT_YARDS_LOG_5,
  ai3500: GS1Field.AREA_SQUARE_INCHES_0,
  ai3501: GS1Field.AREA_SQUARE_INCHES_1,
  ai3502: GS1Field.AREA_SQUARE_INCHES_2,
  ai3503: GS1Field.AREA_SQUARE_INCHES_3,
  ai3504: GS1Field.AREA_SQUARE_INCHES_4,
  ai3505: GS1Field.AREA_SQUARE_INCHES_5,
  ai3510: GS1Field.AREA_SQUARE_FEET_0,
  ai3511: GS1Field.AREA_SQUARE_FEET_1,
  ai3512: GS1Field.AREA_SQUARE_FEET_2,
  ai3513: GS1Field.AREA_SQUARE_FEET_3,
  ai3514: GS1Field.AREA_SQUARE_FEET_4,
  ai3515: GS1Field.AREA_SQUARE_FEET_5,
  ai3520: GS1Field.AREA_SQUARE_YARDS_0,
  ai3521: GS1Field.AREA_SQUARE_YARDS_1,
  ai3522: GS1Field.AREA_SQUARE_YARDS_2,
  ai3523: GS1Field.AREA_SQUARE_YARDS_3,
  ai3524: GS1Field.AREA_SQUARE_YARDS_4,
  ai3525: GS1Field.AREA_SQUARE_YARDS_5,
  ai3530: GS1Field.AREA_SQUARE_INCHES_LOG_0,
  ai3531: GS1Field.AREA_SQUARE_INCHES_LOG_1,
  ai3532: GS1Field.AREA_SQUARE_INCHES_LOG_2,
  ai3533: GS1Field.AREA_SQUARE_INCHES_LOG_3,
  ai3534: GS1Field.AREA_SQUARE_INCHES_LOG_4,
  ai3535: GS1Field.AREA_SQUARE_INCHES_LOG_5,
  ai3540: GS1Field.AREA_SQUARE_FEET_LOG_0,
  ai3541: GS1Field.AREA_SQUARE_FEET_LOG_1,
  ai3542: GS1Field.AREA_SQUARE_FEET_LOG_2,
  ai3543: GS1Field.AREA_SQUARE_FEET_LOG_3,
  ai3544: GS1Field.AREA_SQUARE_FEET_LOG_4,
  ai3545: GS1Field.AREA_SQUARE_FEET_LOG_5,
  ai3550: GS1Field.AREA_SQUARE_YARDS_LOG_0,
  ai3551: GS1Field.AREA_SQUARE_YARDS_LOG_1,
  ai3552: GS1Field.AREA_SQUARE_YARDS_LOG_2,
  ai3553: GS1Field.AREA_SQUARE_YARDS_LOG_3,
  ai3554: GS1Field.AREA_SQUARE_YARDS_LOG_4,
  ai3555: GS1Field.AREA_SQUARE_YARDS_LOG_5,
  ai3560: GS1Field.NET_WEIGHT_TROY_OUNCES_0,
  ai3561: GS1Field.NET_WEIGHT_TROY_OUNCES_1,
  ai3562: GS1Field.NET_WEIGHT_TROY_OUNCES_2,
  ai3563: GS1Field.NET_WEIGHT_TROY_OUNCES_3,
  ai3564: GS1Field.NET_WEIGHT_TROY_OUNCES_4,
  ai3565: GS1Field.NET_WEIGHT_TROY_OUNCES_5,
  ai3570: GS1Field.NET_VOLUME_OUNCES_0,
  ai3571: GS1Field.NET_VOLUME_OUNCES_1,
  ai3572: GS1Field.NET_VOLUME_OUNCES_2,
  ai3573: GS1Field.NET_VOLUME_OUNCES_3,
  ai3574: GS1Field.NET_VOLUME_OUNCES_4,
  ai3575: GS1Field.NET_VOLUME_OUNCES_5,
  ai3600: GS1Field.NET_VOLUME_QUARTS_0,
  ai3601: GS1Field.NET_VOLUME_QUARTS_1,
  ai3602: GS1Field.NET_VOLUME_QUARTS_2,
  ai3603: GS1Field.NET_VOLUME_QUARTS_3,
  ai3604: GS1Field.NET_VOLUME_QUARTS_4,
  ai3605: GS1Field.NET_VOLUME_QUARTS_5,
  ai3610: GS1Field.NET_VOLUME_GALLONS_0,
  ai3611: GS1Field.NET_VOLUME_GALLONS_1,
  ai3612: GS1Field.NET_VOLUME_GALLONS_2,
  ai3613: GS1Field.NET_VOLUME_GALLONS_3,
  ai3614: GS1Field.NET_VOLUME_GALLONS_4,
  ai3615: GS1Field.NET_VOLUME_GALLONS_5,
  ai3620: GS1Field.VOLUME_QUARTS_LOG_0,
  ai3621: GS1Field.VOLUME_QUARTS_LOG_1,
  ai3622: GS1Field.VOLUME_QUARTS_LOG_2,
  ai3623: GS1Field.VOLUME_QUARTS_LOG_3,
  ai3624: GS1Field.VOLUME_QUARTS_LOG_4,
  ai3625: GS1Field.VOLUME_QUARTS_LOG_5,
  ai3630: GS1Field.VOLUME_GALLONS_LOG_0,
  ai3631: GS1Field.VOLUME_GALLONS_LOG_1,
  ai3632: GS1Field.VOLUME_GALLONS_LOG_2,
  ai3633: GS1Field.VOLUME_GALLONS_LOG_3,
  ai3634: GS1Field.VOLUME_GALLONS_LOG_4,
  ai3635: GS1Field.VOLUME_GALLONS_LOG_5,
  ai3640: GS1Field.VOLUME_CUBIC_INCHES_0,
  ai3641: GS1Field.VOLUME_CUBIC_INCHES_1,
  ai3642: GS1Field.VOLUME_CUBIC_INCHES_2,
  ai3643: GS1Field.VOLUME_CUBIC_INCHES_3,
  ai3644: GS1Field.VOLUME_CUBIC_INCHES_4,
  ai3645: GS1Field.VOLUME_CUBIC_INCHES_5,
  ai3650: GS1Field.VOLUME_CUBIC_FEET_0,
  ai3651: GS1Field.VOLUME_CUBIC_FEET_1,
  ai3652: GS1Field.VOLUME_CUBIC_FEET_2,
  ai3653: GS1Field.VOLUME_CUBIC_FEET_3,
  ai3654: GS1Field.VOLUME_CUBIC_FEET_4,
  ai3655: GS1Field.VOLUME_CUBIC_FEET_5,
  ai3660: GS1Field.VOLUME_CUBIC_YARDS_0,
  ai3661: GS1Field.VOLUME_CUBIC_YARDS_1,
  ai3662: GS1Field.VOLUME_CUBIC_YARDS_2,
  ai3663: GS1Field.VOLUME_CUBIC_YARDS_3,
  ai3664: GS1Field.VOLUME_CUBIC_YARDS_4,
  ai3665: GS1Field.VOLUME_CUBIC_YARDS_5,
  ai3670: GS1Field.VOLUME_CUBIC_INCHES_LOG_0,
  ai3671: GS1Field.VOLUME_CUBIC_INCHES_LOG_1,
  ai3672: GS1Field.VOLUME_CUBIC_INCHES_LOG_2,
  ai3673: GS1Field.VOLUME_CUBIC_INCHES_LOG_3,
  ai3674: GS1Field.VOLUME_CUBIC_INCHES_LOG_4,
  ai3675: GS1Field.VOLUME_CUBIC_INCHES_LOG_5,
  ai3680: GS1Field.VOLUME_CUBIC_FEET_LOG_0,
  ai3681: GS1Field.VOLUME_CUBIC_FEET_LOG_1,
  ai3682: GS1Field.VOLUME_CUBIC_FEET_LOG_2,
  ai3683: GS1Field.VOLUME_CUBIC_FEET_LOG_3,
  ai3684: GS1Field.VOLUME_CUBIC_FEET_LOG_4,
  ai3685: GS1Field.VOLUME_CUBIC_FEET_LOG_5,
  ai3690: GS1Field.VOLUME_CUBIC_YARDS_LOG_0,
  ai3691: GS1Field.VOLUME_CUBIC_YARDS_LOG_1,
  ai3692: GS1Field.VOLUME_CUBIC_YARDS_LOG_2,
  ai3693: GS1Field.VOLUME_CUBIC_YARDS_LOG_3,
  ai3694: GS1Field.VOLUME_CUBIC_YARDS_LOG_4,
  ai3695: GS1Field.VOLUME_CUBIC_YARDS_LOG_5,
  ai37: GS1Field.COUNT,
  ai3900: GS1Field.AMOUNT_PAYABLE_0,
  ai3901: GS1Field.AMOUNT_PAYABLE_1,
  ai3902: GS1Field.AMOUNT_PAYABLE_2,
  ai3903: GS1Field.AMOUNT_PAYABLE_3,
  ai3904: GS1Field.AMOUNT_PAYABLE_4,
  ai3905: GS1Field.AMOUNT_PAYABLE_5,
  ai3910: GS1Field.AMOUNT_PAYABLE_ISO_0,
  ai3911: GS1Field.AMOUNT_PAYABLE_ISO_1,
  ai3912: GS1Field.AMOUNT_PAYABLE_ISO_2,
  ai3913: GS1Field.AMOUNT_PAYABLE_ISO_3,
  ai3914: GS1Field.AMOUNT_PAYABLE_ISO_4,
  ai3915: GS1Field.AMOUNT_PAYABLE_ISO_5,
  ai3920: GS1Field.PRICE_0,
  ai3921: GS1Field.PRICE_1,
  ai3922: GS1Field.PRICE_2,
  ai3923: GS1Field.PRICE_3,
  ai3930: GS1Field.PRICE_ISO_0,
  ai3931: GS1Field.PRICE_ISO_1,
  ai3932: GS1Field.PRICE_ISO_2,
  ai3933: GS1Field.PRICE_ISO_3,
  ai3940: GS1Field.PERCENT_DISCOUNT_0,
  ai3941: GS1Field.PERCENT_DISCOUNT_1,
  ai3942: GS1Field.PERCENT_DISCOUNT_2,
  ai3943: GS1Field.PERCENT_DISCOUNT_3,
  ai3950: GS1Field.PRICE_PER_UNIT_MEASURE_0,
  ai3951: GS1Field.PRICE_PER_UNIT_MEASURE_1,
  ai3952: GS1Field.PRICE_PER_UNIT_MEASURE_2,
  ai3953: GS1Field.PRICE_PER_UNIT_MEASURE_3,
  ai3954: GS1Field.PRICE_PER_UNIT_MEASURE_4,
  ai3955: GS1Field.PRICE_PER_UNIT_MEASURE_5,
  ai400: GS1Field.ORDER_NUMBER,
  ai401: GS1Field.GINC,
  ai402: GS1Field.GSIN,
  ai403: GS1Field.ROUTE,
  ai410: GS1Field.SHIP_TO,
  ai411: GS1Field.BILL_TO,
  ai412: GS1Field.PURCHASE_FROM,
  ai413: GS1Field.SHIP_FOR,
  ai414: GS1Field.LOC_NO,
  ai415: GS1Field.PAY_TO,
  ai416: GS1Field.PROD_SERV_LOC,
  ai417: GS1Field.PARTY,
  ai420: GS1Field.SHIP_TO_POST,
  ai421: GS1Field.SHIP_TO_POST_ISO,
  ai422: GS1Field.ORIGIN,
  ai423: GS1Field.COUNTRY_INITIAL_PROCESS,
  ai424: GS1Field.COUNTRY_PROCESS,
  ai425: GS1Field.COUNTRY_DISASSEMBLY,
  ai426: GS1Field.COUNTRY_FULL_PROCESS,
  ai427: GS1Field.ORIGIN_SUBDIVISION,
  ai4300: GS1Field.SHIP_TO_COMP,
  ai4301: GS1Field.SHIP_TO_NAME,
  ai4302: GS1Field.SHIP_TO_ADD1,
  ai4303: GS1Field.SHIP_TO_ADD2,
  ai4304: GS1Field.SHIP_TO_SUB,
  ai4305: GS1Field.SHIP_TO_LOC,
  ai4306: GS1Field.SHIP_TO_REG,
  ai4307: GS1Field.SHIP_TO_COUNTRY,
  ai4308: GS1Field.SHIP_TO_PHONE,
  ai4309: GS1Field.SHIP_TO_GEO,
  ai4310: GS1Field.RTN_TO_COMP,
  ai4311: GS1Field.RTN_TO_NAME,
  ai4312: GS1Field.RTN_TO_ADD1,
  ai4313: GS1Field.RTN_TO_ADD2,
  ai4314: GS1Field.RTN_TO_SUB,
  ai4315: GS1Field.RTN_TO_LOC,
  ai4316: GS1Field.RTN_TO_REG,
  ai4317: GS1Field.RTN_TO_COUNTRY,
  ai4318: GS1Field.RTN_TO_POST,
  ai4319: GS1Field.RTN_TO_PHONE,
  ai4320: GS1Field.SRV_DESCRIPTION,
  ai4321: GS1Field.DANGEROUS_GOODS,
  ai4322: GS1Field.AUTH_LEAVE,
  ai4323: GS1Field.SIG_REQUIRED,
  ai4324: GS1Field.NBEF_DEL_DT,
  ai4325: GS1Field.NAFT_DEL_DT,
  ai4326: GS1Field.REL_DATE,
  ai4330: GS1Field.MAX_TEMP_F,
  ai4331: GS1Field.MAX_TEMP_C,
  ai4332: GS1Field.MIN_TEMP_F,
  ai4333: GS1Field.MIN_TEMP_C,
  ai7001: GS1Field.NSN,
  ai7002: GS1Field.MEAT_CUT,
  ai7003: GS1Field.EXPIRATION_DATE_TIME,
  ai7004: GS1Field.ACTIVE_POTENCY,
  ai7005: GS1Field.CATCH_AREA,
  ai7006: GS1Field.FIRST_FREEZE_DATE,
  ai7007: GS1Field.HARVEST_DATE,
  ai7008: GS1Field.AQUATIC_SPECIES,
  ai7009: GS1Field.FISHING_GEAR_TYPE,
  ai7010: GS1Field.PROD_METHOD,
  ai7011: GS1Field.TEST_BY,
  ai7020: GS1Field.REFURB_LOT,
  ai7021: GS1Field.FUNC_STAT,
  ai7022: GS1Field.REV_STAT,
  ai7023: GS1Field.GIAI_ASSEMBLY,
  ai7030: GS1Field.PROCESSOR,
  ai7031: GS1Field.PROCESSOR_2,
  ai7032: GS1Field.PROCESSOR_3,
  ai7033: GS1Field.PROCESSOR_4,
  ai7034: GS1Field.PROCESSOR_5,
  ai7035: GS1Field.PROCESSOR_6,
  ai7036: GS1Field.PROCESSOR_7,
  ai7037: GS1Field.PROCESSOR_8,
  ai7038: GS1Field.PROCESSOR_9,
  ai7039: GS1Field.PROCESSOR_10,
  ai7040: GS1Field.UIC_EXT,
  ai7041: GS1Field.UFRGT_UNIT_TYPE,
  ai710: GS1Field.NHRN_PZN,
  ai711: GS1Field.NHRN_CIP,
  ai712: GS1Field.NHRN_CN,
  ai713: GS1Field.NHRN_DRN,
  ai714: GS1Field.NHRN_AIM,
  ai715: GS1Field.NHRN_DNC,
  ai716: GS1Field.NHRN_AIC,
  ai717: GS1Field.NHRN_SRN,
  ai7230: GS1Field.CERT0,
  ai7231: GS1Field.CERT1,
  ai7232: GS1Field.CERT2,
  ai7233: GS1Field.CERT3,
  ai7234: GS1Field.CERT4,
  ai7235: GS1Field.CERT5,
  ai7236: GS1Field.CERT6,
  ai7237: GS1Field.CERT7,
  ai7238: GS1Field.CERT8,
  ai7239: GS1Field.CERT9,
  ai7240: GS1Field.PROTOCOL,
  ai7241: GS1Field.AIDC_MEDIA_TYPE,
  ai7242: GS1Field.VCN,
  ai7250: GS1Field.DOB,
  ai7251: GS1Field.DOB_TIME,
  ai7252: GS1Field.BIO_SEX,
  ai7253: GS1Field.FAMILY_NAME,
  ai7254: GS1Field.GIVEN_NAME,
  ai7255: GS1Field.SUFFIX,
  ai7256: GS1Field.FULL_NAME,
  ai7257: GS1Field.PERSON_ADDR,
  ai7258: GS1Field.BIRTH_SEQUENCE,
  ai7259: GS1Field.BABY,
  ai8001: GS1Field.ROLL_PRODUCTS,
  ai8002: GS1Field.CMT_NO,
  ai8003: GS1Field.GRAI,
  ai8004: GS1Field.GIAI,
  ai8005: GS1Field.PRICE_PER_UNIT,
  ai8006: GS1Field.ITIP,
  ai8007: GS1Field.IBAN,
  ai8008: GS1Field.PROD_TIME,
  ai8009: GS1Field.OPTICAL_SENSOR,
  ai8010: GS1Field.CPID,
  ai8011: GS1Field.CPID_SERIAL,
  ai8012: GS1Field.VERSION,
  ai8013: GS1Field.GMN,
  ai8014: GS1Field.HIDRI,
  ai8017: GS1Field.GSRN_PROVIDER,
  ai8018: GS1Field.GSRN_RECIPIENT,
  ai8019: GS1Field.SRIN,
  ai8020: GS1Field.REF_NO,
  ai8026: GS1Field.ITIP_CONTENT,
  ai8030: GS1Field.DIG_SIG,
  ai8040: GS1Field.IMEI,
  ai8041: GS1Field.IMEI2,
  ai8042: GS1Field.ESIM,
  ai8043: GS1Field.PSIM,
  ai8110: GS1Field.COUPON,
  ai8111: GS1Field.POINTS,
  ai8112: GS1Field.COUPON_EXTENDED,
  ai8200: GS1Field.PRODUCT_URL,
  ai90: GS1Field.INTERNAL_1,
  ai91: GS1Field.INTERNAL_2,
  ai92: GS1Field.INTERNAL_3,
  ai93: GS1Field.INTERNAL_4,
  ai94: GS1Field.INTERNAL_5,
  ai95: GS1Field.INTERNAL_6,
  ai96: GS1Field.INTERNAL_7,
  ai97: GS1Field.INTERNAL_8,
  ai98: GS1Field.INTERNAL_9,
  ai99: GS1Field.INTERNAL_10,
};
