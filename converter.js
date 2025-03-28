class Converter {
    constructor() {
      this.conversions = {
        // Length
        meter: {
          meter: 1,
          kilometer: 0.001,
          centimeter: 100,
          millimeter: 1000,
          micrometer: 1000000,
          nanometer: 1000000000,
          mile: 0.0006213689,
          yard: 1.0936132983,
          foot: 3.280839895,
          inch: 39.37007874,
          lightYear: 1.057008707E-16,
        },
        kilometer: {
            meter: 1000,
            kilometer: 1,
            centimeter: 100000,
            millimeter: 1000000,
            micrometer: 1000000000,
            nanometer: 1000000000000,
            mile: 0.6213688756,
            yard: 1093.6132983,
            foot: 3280.839895,
            inch: 39370.07874,
            lightYear: 1.057008707E-13,
        },
        centimeter: {
            meter: 0.01,
            kilometer: 0.00001,
            centimeter: 1,
            millimeter: 10,
            micrometer: 10000,
            nanometer: 10000000,
            mile: 0.0000062137,
            yard: 0.010936133,
            foot: 0.032808399,
            inch: 0.3937007874,
            lightYear: 1.057008707E-18,
        },
        millimeter: {
            meter: 0.01,
            kilometer: 0.00001,
            centimeter: 1,
            millimeter: 10,
            micrometer: 10000,
            nanometer: 10000000,
            mile: 0.0000062137,
            yard: 0.010936133,
            foot: 0.032808399,
            inch: 0.3937007874,
            lightYear: 1.057008707E-18,
        },
        micrometer: {
            meter: 0.000001,
            kilometer: 9.999999999E-10,
            centimeter: 0.0001,
            millimeter: 0.001,
            micrometer: 1,
            nanometer: 1000,
            mile: 6.213688756E-10,
            yard: 0.0000010936,
            foot: 0.0000032808,
            inch: 0.0000393701,
            lightYear: 1.057008707E-22,
        },
        nanometer: {
            meter: 1.E-9,
            kilometer: 1.E-12,
            centimeter: 1.E-7,
            millimeter: 0.000001,
            micrometer: 0.001,
            nanometer: 1,
            mile: 6.213688756E-13,
            yard: 1.093613298E-9,
            foot: 3.280839895E-9,
            inch: 3.937007874E-8,
            lightYear: 1.057008707E-25,
        },
        mile: {
            meter: 1609.35,
            kilometer: 1.60935,
            centimeter: 160935,
            millimeter: 1609350,
            micrometer: 1609350000,
            nanometer: 1609350000000,
            mile: 1,
            yard: 1760.0065617,
            foot: 5280.019685,
            inch: 63360.23622,
            lightYear: 1.701096963E-13,
        },
        yard: {
            meter: 0.9144,
            kilometer: 0.0009144,
            centimeter: 91.44,
            millimeter: 914.4,
            micrometer: 914400,
            nanometer: 914400000,
            mile: 0.0005681797,
            yard: 1,
            foot: 3,
            inch: 36,
            lightYear: 9.665287622E-17,
        },
        foot: {
            meter: 0.3048,
            kilometer: 0.0003048,
            centimeter: 30.48,
            millimeter: 304.8,
            micrometer: 304800,
            nanometer: 304800000,
            mile: 0.0001893932,
            yard: 0.3333333333,
            foot: 1,
            inch: 12,
            lightYear: 3.22176254E-17,
        },
        inch: {
            meter: 0.0254,
            kilometer: 0.0000254,
            centimeter: 2.54,
            millimeter: 25.4,
            micrometer: 25400,
            nanometer: 25400000,
            mile: 0.0000157828,
            yard: 0.0277777778,
            foot: 0.0833333333,
            inch: 1,
            lightYear: 2.684802117E-18,
        },
        lightYear: {
            meter: 9460660000000000,
            kilometer: 9460660000000,
            centimeter: 946066000000000000,
            millimeter: 9460660000000000000,
            micrometer: 9.46066E+21,
            nanometer: 9.460659999E+24,
            mile: 5878559666946,
            yard: 10346303587051618,
            foot: 31038910761154856,
            inch: 372466929133858300,
            lightYear: 1,
        },
        // Temperature
        celsius: {
            celsius: 1,
            kelvin: function (value) {
                return value + 273.15;
            },
            fahrenheit: function (value) {
                return (value * 9) / 5 + 32;
            },
        },
        kelvin: {
            celsius: function (value) {
                return value - 273.15; 
            },
            kelvin: 1,
            fahrenheit: function (value) {
                return (value - 273.15) * 9 / 5 + 32;
            },
        },
        fahrenheit: {
            celsius: function (value) {
                return (value - 32) * 5 / 9;
            },
            kelvin: function (value) {
                return (value - 32) * 5 / 9 + 273.15;
            },
            fahrenheit: 1,
        },
        // Area
        squareMeter: {
            squareMeter: 1,
            squareKilometer: 0.000001,
            squareCentimeter: 10000,
            squareMillimeter: 1000000,
            squareMicrometer: 1000000000000,
            hectare: 0.0001,
            squareMile: 3.861018768E-7,
            squareYard: 1.1959900463,
            squareFoot: 10.763910417,
            squareInch: 1550.0031,
            acre: 0.0002471054,
        },
        squareKilometer: {
            squareMeter: 1000000,
            squareKilometer: 1,
            squareCentimeter: 10000000000,
            squareMillimeter: 1000000000000,
            squareMicrometer: 1000000000000000000,
            hectare: 100,
            squareMile: 0.3861018768,
            squareYard: 1195990.0463,
            squareFoot: 10763910.417,
            squareInch: 1550003100,
            acre: 247.10538147,
        },
        squareCentimeter: {
            squareMeter: 0.0001,
            squareKilometer: 1.E-10,
            squareCentimeter: 1,
            squareMillimeter: 100,
            squareMicrometer: 100000000,
            hectare: 1.E-8,
            squareMile: 3.861018768E-11,
            squareYard: 0.000119599,
            squareFoot: 0.001076391,
            squareInch: 0.15500031,
            acre: 2.471053814E-8,
        },
        squareMillimeter: {
            squareMeter: 0.000001,
            squareKilometer: 1.E-12,
            squareCentimeter: 0.01,
            squareMillimeter: 1,
            squareMicrometer: 1000000,
            hectare: 9.999999999E-11,
            squareMile: 3.861018768E-13,
            squareYard: 0.000001196,
            squareFoot: 0.0000107639,
            squareInch: 0.0015500031,
            acre: 2.471053814E-10,
        },
        squareMicrometer: {
            squareMeter: 1.E-12,
            squareKilometer: 1.E-18,
            squareCentimeter: 9.999999999E-9,
            squareMillimeter: 0.000001,
            squareMicrometer: 1,
            hectare: 1.E-16,
            squareMile: 3.861018768E-19,
            squareYard: 1.195990046E-12,
            squareFoot: 1.076391041E-11,
            squareInch: 1.5500031E-9,
            acre: 2.471053814E-16,
        },
        hectare: {
            squareMeter: 10000,
            squareKilometer: 0.01,
            squareCentimeter: 100000000,
            squareMillimeter: 10000000000,
            squareMicrometer: 10000000000000000,
            hectare: 1,
            squareMile: 0.0038610188,
            squareYard: 11959.900463,
            squareFoot: 107639.10417,
            squareInch: 15500031,
            acre: 2.4710538147,
        },
        squareMile: {
            squareMeter: 2589990,
            squareKilometer: 2.58999,
            squareCentimeter: 25899900000,
            squareMillimeter: 2589990000000,
            squareMicrometer: 2589990000000000000,
            hectare: 258.999,
            squareMile: 1,
            squareYard: 3097602.26,
            squareFoot: 27878420.34,
            squareInch: 4014492529,
            acre: 640.00046695,
        },
        squareYard: {
            squareMeter: 0.83612736,
            squareKilometer: 8.3612736E-7,
            squareCentimeter: 8361.2736,
            squareMillimeter: 836127.36,
            squareMicrometer: 836127360000,
            hectare: 0.0000836127,
            squareMile: 3.228303429E-7,
            squareYard: 1,
            squareFoot: 9,
            squareInch: 1296,
            acre: 0.0002066116,
        },
        squareFoot: {
            squareMeter: 0.09290304,
            squareKilometer: 9.290304E-8,
            squareCentimeter: 929.0304,
            squareMillimeter: 92903.04,
            squareMicrometer: 92903040000,
            hectare: 0.0000092903,
            squareMile: 3.58700381E-8,
            squareYard: 0.1111111111,
            squareFoot: 1,
            squareInch: 144,
            acre: 0.0000229568,
        },
        squareInch: {
            squareMeter: 0.00064516,
            squareKilometer: 6.4516E-10,
            squareCentimeter: 6.4516,
            squareMillimeter: 645.16,
            squareMicrometer: 645160000,
            hectare: 6.4516E-8,
            squareMile: 2.490974868E-10,
            squareYard: 0.0007716049,
            squareFoot: 0.0069444444,
            squareInch: 1,
            acre: 1.594225079E-7,
        },
        acre: {
            squareMeter: 4046.8564224,
            squareKilometer: 0.0040468564,
            squareCentimeter: 40468564.224,
            squareMillimeter: 4046856422.4,
            squareMicrometer: 4046856422400000,
            hectare: 0.4046856422,
            squareMile: 0.0015624989,
            squareYard: 4840,
            squareFoot: 43560,
            squareInch: 6272640,
            acre: 1,
        },
        // Volume 
        cubicMeter: {
            cubicMeter: 1,
            cubicKilometer: 1.E-9,
            cubicCentimeter: 1000000,
            cubicMillimeter: 1000000000,
            Liter: 1000,
            Milliliter: 1000000,
            usGallon: 264.17217686,
            usQuart: 1056.6887074,
            usPint: 2113.3774149,
            usCup: 4226.7548297,
            usFluidOunce: 33814.038638,
            usTableSpoon: 67628.077276,
            usTeaSpoon: 202884.23183,
            imperialGallon: 219.9692483,
            imperialQuart: 879.8769932,
            imperialPint: 1759.7539864,
            imperialFluidOunce: 35195.079728,
            imperialTableSpoon: 56312.127565,
            imperialTeaSpoon: 168936.38269,
            cubicMile: 2.399128636E-10,
            cubicYard: 1.3079506193,
            cubicFoot: 35.314666721,
            cubicInch: 61023.744095,
        },
        cubicKilometer: {
            cubicMeter: 1000000000,
            cubicKilometer: 1,
            cubicCentimeter: 1000000000000000,
            cubicMillimeter: 1000000000000000000,
            Liter: 1000000000000,
            Milliliter: 1000000000000000,
            usGallon: 264172176858,
            usQuart: 1056688707432,
            usPint: 2113377414864,
            usCup: 4226754829728,
            usFluidOunce: 33814038637823,
            usTableSpoon: 67628077275645,
            usTeaSpoon: 202884231826936,
            imperialGallon: 219969248299,
            imperialQuart: 879876993196,
            imperialPint: 1759753986393,
            imperialFluidOunce: 35195079727854,
            imperialTableSpoon: 56312127564566,
            imperialTeaSpoon: 168936382693699,
            cubicMile: 0.2399128636,
            cubicYard: 1307950619.3,
            cubicFoot: 35314666721,
            cubicInch: 61023744094732,
        },
        cubicCentimeter: {
            cubicMeter: 0.000001,
            cubicKilometer: 9.999999999E-16,
            cubicCentimeter: 1,
            cubicMillimeter: 1000,
            Liter: 0.001,
            Milliliter: 1,
            usGallon: 0.0002641722,
            usQuart: 0.0010566887,
            usPint: 0.0021133774,
            usCup: 0.0042267548,
            usFluidOunce: 0.0338140386,
            usTableSpoon: 0.0676280773,
            usTeaSpoon: 0.2028842318,
            imperialGallon: 0.0002199692,
            imperialQuart: 0.000879877,
            imperialPint: 0.001759754,
            imperialFluidOunce: 0.0351950797,
            imperialTableSpoon: 0.0563121276,
            imperialTeaSpoon: 0.1689363827,
            cubicMile: 2.399128636E-16,
            cubicYard: 0.000001308,
            cubicFoot: 0.0000353147,
            cubicInch: 0.0610237441,
        },
        cubicMillimeter: {
            cubicMeter: 1.E-9,
            cubicKilometer: 1.E-18,
            cubicCentimeter: 0.001,
            cubicMillimeter: 1,
            Liter: 0.000001,
            Milliliter: 0.001,
            usGallon: 2.641721768E-7,
            usQuart: 0.0000010567,
            usPint: 0.0000021134,
            usCup: 0.0000042268,
            usFluidOunce: 0.000033814,
            usTableSpoon: 0.0000676281,
            usTeaSpoon: 0.0002028842,
            imperialGallon: 2.199692482E-7,
            imperialQuart: 8.798769931E-7,
            imperialPint: 0.0000017598,
            imperialFluidOunce: 0.0000351951,
            imperialTableSpoon: 0.0000563121,
            imperialTeaSpoon: 0.0001689364,
            cubicMile: 2.399128636E-19,
            cubicYard: 1.307950619E-9,
            cubicFoot: 3.531466672E-8,
            cubicInch: 0.0000610237,
        },
        Liter: {
            cubicMeter: 0.001,
            cubicKilometer: 1.E-12,
            cubicCentimeter: 1000,
            cubicMillimeter: 1000000,
            Liter: 1,
            Milliliter: 1000,
            usGallon: 0.2641721769,
            usQuart: 0.2641721769,
            usPint: 2.1133774149,
            usCup: 4.2267548297,
            usFluidOunce: 33.814038638,
            usTableSpoon: 67.628077276,
            usTeaSpoon: 202.88423183,
            imperialGallon: 0.2199692483,
            imperialQuart: 0.8798769932,
            imperialPint: 1.7597539864,
            imperialFluidOunce: 35.195079728,
            imperialTableSpoon: 56.312127565,
            imperialTeaSpoon: 168.93638269,
            cubicMile: 2.399128636E-13,
            cubicYard: 0.0013079506,
            cubicFoot: 0.0353146667,
            cubicInch: 61.023744095,
        },
        Milliliter: {
            cubicMeter: 0.000001,
            cubicKilometer: 9.999999999E-16,
            cubicCentimeter: 1,
            cubicMillimeter: 1000,
            Liter: 0.001,
            Milliliter: 1,
            usGallon: 0.0002641722,
            usQuart: 0.0010566887,
            usPint: 0.0021133774,
            usCup: 0.0042267548,
            usFluidOunce: 0.0338140386,
            usTableSpoon: 0.0676280773,
            usTeaSpoon: 0.2028842318,
            imperialGallon: 0.0002199692,
            imperialQuart: 0.000879877,
            imperialPint: 0.001759754,
            imperialFluidOunce: 0.0351950797,
            imperialTableSpoon: 0.0563121276,
            imperialTeaSpoon: 0.1689363827,
            cubicMile: 2.399128636E-16,
            cubicYard: 0.000001308,
            cubicFoot: 0.0000353147,
            cubicInch: 0.0610237441,
        },
        usGallon: {
            cubicMeter: 0.00378541,
            cubicKilometer: 3.78541E-12,
            cubicCentimeter: 3785.41,
            cubicMillimeter: 3785410,
            Liter: 3.78541,
            Milliliter: 3785.41,
            usGallon: 1,
            usQuart: 4,
            usPint: 8,
            usCup: 16,
            usFluidOunce: 128,
            usTableSpoon: 256,
            usTeaSpoon: 768,
            imperialGallon: 0.8326737922,
            imperialQuart: 3.3306951688,
            imperialPint: 6.6613903376,
            imperialFluidOunce: 133.22780675,
            imperialTableSpoon: 213.1644908,
            imperialTeaSpoon: 639.49347241,
            cubicMile: 9.081685531E-13,
            cubicYard: 0.0049511294,
            cubicFoot: 0.1336804926,
            cubicInch: 230.99989113,
        },
        usQuart: {
            cubicMeter: 0.0009463525,
            cubicKilometer: 9.463525E-13,
            cubicCentimeter: 946.3525,
            cubicMillimeter: 946352.5,
            Liter: 0.9463525,
            Milliliter: 946.3525,
            usGallon: 0.25,
            usQuart: 1,
            usPint: 2,
            usCup: 4,
            usFluidOunce: 32,
            usTableSpoon: 64,
            usTeaSpoon: 192,
            imperialGallon: 0.2081684481,
            imperialQuart: 0.8326737922,
            imperialPint: 1.6653475844,
            imperialFluidOunce: 33.306951688,
            imperialTableSpoon: 53.291122701,
            imperialTeaSpoon: 159.8733681,
            cubicMile: 2.270421382E-13,
            cubicYard: 0.0012377823,
            cubicFoot: 0.0334201231,
            cubicInch: 57.749972783,
        },
        usPint: {
            cubicMeter: 0.0004731763,
            cubicKilometer: 4.7317625E-13,
            cubicCentimeter: 473.17625,
            cubicMillimeter: 473176.25,
            Liter: 0.47317625,
            Milliliter: 473.17625,
            usGallon: 0.125,
            usQuart: 0.5,
            usPint: 1,
            usCup: 2,
            usFluidOunce: 16,
            usTableSpoon: 32,
            usTeaSpoon: 96,
            imperialGallon: 0.104084224,
            imperialQuart: 0.4163368961,
            imperialPint: 0.8326737922,
            imperialFluidOunce: 16.653475844,
            imperialTableSpoon: 26.645561351,
            imperialTeaSpoon: 79.936684052,
            cubicMile: 1.135210691E-13,
            cubicYard: 0.0006188912,
            cubicFoot: 0.0167100616,
            cubicInch: 28.874986392,
        },
        usCup: {
            cubicMeter: 0.0002365881,
            cubicKilometer: 2.36588125E-13,
            cubicCentimeter: 236.588125,
            cubicMillimeter: 236588.125,
            Liter: 0.236588125,
            Milliliter: 236.588125,
            usGallon: 0.0625,
            usQuart: 0.25,
            usPint: 0.5,
            usCup: 1,
            usFluidOunce: 8,
            usTableSpoon: 16,
            usTeaSpoon: 48,
            imperialGallon: 0.052042112,
            imperialQuart: 0.2081684481,
            imperialPint: 0.4163368961,
            imperialFluidOunce: 8.326737922,
            imperialTableSpoon: 13.322780675,
            imperialTeaSpoon: 39.968342026,
            cubicMile: 5.676053457E-14,
            cubicYard: 0.0003094456,
            cubicFoot: 0.0083550308,
            cubicInch: 14.437493196,
        },
        usFluidOunce: {
            cubicMeter: 0.0000295735,
            cubicKilometer: 2.957351562E-14,
            cubicCentimeter: 29.573515625,
            cubicMillimeter: 29573.515625,
            Liter: 0.0295735156,
            Milliliter: 29.573515625,
            usGallon: 0.0078125,
            usQuart: 0.03125,
            usPint: 0.0625,
            usCup: 0.125,
            usFluidOunce: 1,
            usTableSpoon: 2,
            usTeaSpoon: 6,
            imperialGallon: 0.006505264,
            imperialQuart: 0.026021056,
            imperialPint: 0.052042112,
            imperialFluidOunce: 1.0408422403,
            imperialTableSpoon: 1.6653475844,
            imperialTeaSpoon: 4.9960427532,
            cubicMile: 7.095066821E-15,
            cubicYard: 0.0000386807,
            cubicFoot: 0.0010443788,
            cubicInch: 1.8046866495,
        },
        usTableSpoon: {
            cubicMeter: 0.0000147868,
            cubicKilometer: 1.478675781E-14,
            cubicCentimeter: 14.786757812,
            cubicMillimeter: 14786.757812,
            Liter: 0.0147867578,
            Milliliter: 14.786757812,
            usGallon: 0.00390625,
            usQuart: 0.015625,
            usPint: 0.03125,
            usCup: 0.0625,
            usFluidOunce: 0.5,
            usTableSpoon: 1,
            usTeaSpoon: 3,
            imperialGallon: 0.003252632,
            imperialQuart: 0.013010528,
            imperialPint: 0.026021056,
            imperialFluidOunce: 0.5204211201,
            imperialTableSpoon: 0.8326737922,
            imperialTeaSpoon: 2.4980213766,
            cubicMile: 3.54753341E-15,
            cubicYard: 0.0000193403,
            cubicFoot: 0.0005221894,
            cubicInch: 0.9023433247,
        },
        usTeaSpoon: {
            cubicMeter: 0.0000049289,
            cubicKilometer: 4.92891927E-15,
            cubicCentimeter: 4.9289192708,
            cubicMillimeter: 4928.9192708,
            Liter: 0.0049289193,
            Milliliter: 4.9289192708,
            usGallon: 0.0013020833,
            usQuart: 0.0052083333,
            usPint: 0.0104166667,
            usCup: 0.0208333333,
            usFluidOunce: 0.1666666667,
            usTableSpoon: 0.3333333333,
            usTeaSpoon: 1,
            imperialGallon: 0.0010842107,
            imperialQuart: 0.0043368427,
            imperialPint: 0.0086736853,
            imperialFluidOunce: 0.1734737067,
            imperialTableSpoon: 0.2775579307,
            imperialTeaSpoon: 0.8326737922,
            cubicMile: 1.182511136E-15,
            cubicYard: 0.0000064468,
            cubicFoot: 0.0001740631,
            cubicInch: 0.3007811082,
        },
        imperialGallon: {
            cubicMeter: 0.00454609,
            cubicKilometer: 4.54609E-12,
            cubicCentimeter: 4546.09,
            cubicMillimeter: 4546090,
            Liter: 4.54609,
            Milliliter: 4546.09,
            usGallon: 1.2009504915,
            usQuart: 4.803801966,
            usPint: 9.6076039319,
            usCup: 19.215207864,
            usFluidOunce: 153.72166291,
            usTableSpoon: 307.44332582,
            usTeaSpoon: 922.32997747,
            imperialGallon: 1,
            imperialQuart: 4,
            imperialPint: 8,
            imperialFluidOunce: 160,
            imperialTableSpoon: 256,
            imperialTeaSpoon: 768,
            cubicMile: 1.09066547E-12,
            cubicYard: 0.0059460612,
            cubicFoot: 0.1605436532,
            cubicInch: 277.41943279,
        },
        imperialQuart: {
            cubicMeter: 0.0011365225,
            cubicKilometer: 1.1365225E-12,
            cubicCentimeter: 1136.5225,
            cubicMillimeter: 1136522.5,
            Liter: 1.1365225,
            Milliliter: 1136.5225,
            usGallon: 0.3002376229,
            usQuart: 1.2009504915,
            usPint: 2.401900983,
            usCup: 4.803801966,
            usFluidOunce: 38.430415728,
            usTableSpoon: 76.860831456,
            usTeaSpoon: 230.58249437,
            imperialGallon: 0.25,
            imperialQuart: 1,
            imperialPint: 2,
            imperialFluidOunce: 40,
            imperialTableSpoon: 64,
            imperialTeaSpoon: 192,
            cubicMile: 2.726663675E-13,
            cubicYard: 0.0014865153,
            cubicFoot: 0.0401359133,
            cubicInch: 69.354858198,
        },
        imperialPint: {
            cubicMeter: 0.0005682613,
            cubicKilometer: 5.6826125E-13,
            cubicCentimeter: 568.26125,
            cubicMillimeter: 568261.25,
            Liter: 0.56826125,
            Milliliter: 568.26125,
            usGallon: 0.1501188114,
            usQuart: 0.6004752457,
            usPint: 1.2009504915,
            usCup: 2.401900983,
            usFluidOunce: 19.215207864,
            usTableSpoon: 38.430415728,
            usTeaSpoon: 115.29124718,
            imperialGallon: 0.125,
            imperialQuart: 0.5,
            imperialPint: 1,
            imperialFluidOunce: 20,
            imperialTableSpoon: 32,
            imperialTeaSpoon: 96,
            cubicMile: 1.363331837E-13,
            cubicYard: 0.0007432577,
            cubicFoot: 0.0200679567,
            cubicInch: 34.677429099,
        },
        imperialFluidOunce: {
            cubicMeter: 0.0000284131,
            cubicKilometer: 2.84130625E-14,
            cubicCentimeter: 28.4130625,
            cubicMillimeter: 28413.0625,
            Liter: 0.0284130625,
            Milliliter: 28.4130625,
            usGallon: 0.0075059406,
            usQuart: 0.0300237623,
            usPint: 0.0600475246,
            usCup: 0.1200950491,
            usFluidOunce: 0.9607603932,
            usTableSpoon: 1.9215207864,
            usTeaSpoon: 5.7645623592,
            imperialGallon: 0.00625,
            imperialQuart: 0.025,
            imperialPint: 0.05,
            imperialFluidOunce: 1,
            imperialTableSpoon: 1.6,
            imperialTeaSpoon: 4.8,
            cubicMile: 6.816659189E-15,
            cubicYard: 0.0000371629,
            cubicFoot: 0.0010033978,
            cubicInch: 1.7338714549,
        },
        imperialTableSpoon: {
            cubicMeter: 0.0000177582,
            cubicKilometer: 1.775816406E-14,
            cubicCentimeter: 17.758164063,
            cubicMillimeter: 17758.164063,
            Liter: 0.0177581641,
            Milliliter: 17.758164063,
            usGallon: 0.0046912129,
            usQuart: 0.0187648514,
            usPint: 0.0375297029,
            usCup: 0.0750594057,
            usFluidOunce: 0.6004752457,
            usTableSpoon: 1.2009504915,
            usTeaSpoon: 3.6028514745,
            imperialGallon: 0.00390625,
            imperialQuart: 0.015625,
            imperialPint: 0.03125,
            imperialFluidOunce: 0.625,
            imperialTableSpoon: 1,
            imperialTeaSpoon: 3,
            cubicMile: 4.260411993E-15,
            cubicYard: 0.0000232268,
            cubicFoot: 0.0006271236,
            cubicInch: 1.0836696593,
        },
        imperialTeaSpoon: {
            cubicMeter: 0.0000059194,
            cubicKilometer: 5.91938802E-15,
            cubicCentimeter: 5.9193880208,
            cubicMillimeter: 5919.3880208,
            Liter: 0.005919388,
            Milliliter: 5.9193880208,
            usGallon: 0.0015637376,
            usQuart: 0.0062549505,
            usPint: 0.012509901,
            usCup: 0.0250198019,
            usFluidOunce: 0.2001584152,
            usTableSpoon: 0.4003168305,
            usTeaSpoon: 1.2009504915,
            imperialGallon: 0.0013020833,
            imperialQuart: 0.0052083333,
            imperialPint: 0.0104166667,
            imperialFluidOunce: 0.2083333333,
            imperialTableSpoon: 0.3333333333,
            imperialTeaSpoon: 1,
            cubicMile: 1.420137331E-15,
            cubicYard: 0.0000077423,
            cubicFoot: 0.0002090412,
            cubicInch: 0.3612232198,
        },
        cubicMile: {
            cubicMeter: 4168180000,
            cubicKilometer: 4.16818,
            cubicCentimeter: 4168180000000000,
            cubicMillimeter: 4168179999999999500,
            Liter: 4168180000000,
            Milliliter: 4168180000000000,
            usGallon: 1101117184136,
            usQuart: 4404468736544,
            usPint: 8808937473087,
            usCup: 17617874946175,
            usFluidOunce: 140942999569399,
            usTableSpoon: 281885999138799,
            usTeaSpoon: 845657997416396,
            imperialGallon: 916871421375,
            imperialQuart: 3667485685501,
            imperialPint: 7334971371002,
            imperialFluidOunce: 146699427420047,
            imperialTableSpoon: 234719083872075,
            imperialTeaSpoon: 704157251616224,
            cubicMile: 1,
            cubicYard: 5451773612.4,
            cubicFoot: 147197887535,
            cubicInch: 254357949660781,
        },
        cubicYard: {
            cubicMeter: 0.764554858,
            cubicKilometer: 7.645548579E-10,
            cubicCentimeter: 764554.85798,
            cubicMillimeter: 764554857.98,
            Liter: 764.55485798,
            Milliliter: 764554.85798,
            usGallon: 201.97412116,
            usQuart: 807.89648464,
            usPint: 1615.7929693,
            usCup: 3231.5859386,
            usFluidOunce: 25852.687509,
            usTableSpoon: 51705.375017,
            usTeaSpoon: 155116.12505,
            imperialGallon: 168.17855739,
            imperialQuart: 672.71422958,
            imperialPint: 1345.4284592,
            imperialFluidOunce: 26908.569183,
            imperialTableSpoon: 43053.710693,
            imperialTeaSpoon: 129161.13208,
            cubicMile: 1.834265453E-10,
            cubicYard: 1,
            cubicFoot: 27,
            cubicInch: 46656,
        },
        cubicFoot: {
            cubicMeter: 0.0283168466,
            cubicKilometer: 2.831684659E-11,
            cubicCentimeter: 28316.846592,
            cubicMillimeter: 28316846.592,
            Liter: 28.316846592,
            Milliliter: 28316.846592,
            usGallon: 7.480523006,
            usQuart: 29.922092024,
            usPint: 59.844184048,
            usCup: 119.6883681,
            usFluidOunce: 957.50694476,
            usTableSpoon: 1915.0138895,
            usTeaSpoon: 5745.0416686,
            imperialGallon: 6.228835459,
            imperialQuart: 24.915341836,
            imperialPint: 49.830683672,
            imperialFluidOunce: 996.61367345,
            imperialTableSpoon: 1594.5818775,
            imperialTeaSpoon: 4783.7456325,
            cubicMile: 6.793575755E-12,
            cubicYard: 0.037037037,
            cubicFoot: 1,
            cubicInch: 1728,
        },
        cubicInch: {
            cubicMeter: 0.0000163871,
            cubicKilometer: 1.6387064E-14,
            cubicCentimeter: 16.387064,
            cubicMillimeter: 16387.064,
            Liter: 0.016387064,
            Milliliter: 16.387064,
            usGallon: 0.0043290064,
            usQuart: 0.0173160255,
            usPint: 0.034632051,
            usCup: 0.0692641019,
            usFluidOunce: 0.5541128153,
            usTableSpoon: 1.1082256305,
            usTeaSpoon: 3.3246768915,
            imperialGallon: 0.0036046501,
            imperialQuart: 0.0144186006,
            imperialPint: 0.0288372012,
            imperialFluidOunce: 0.576744024,
            imperialTableSpoon: 0.9227904384,
            imperialTeaSpoon: 2.7683713151,
            cubicMile: 3.931467451E-15,
            cubicYard: 0.0000214335,
            cubicFoot: 0.0005787037,
            cubicInch: 1,
        },
        // Weight
        kilogram: {
            kilogram: 1,
            gram: 1000,
            milligram: 1000000,
            metricTon: 0.001,
            longTon: 0.0009842073,
            shortTon: 0.0011023122,
            pound: 2.2046244202,
            ounce: 35.273990723,
            carrat: 5000,
            atomicMassUnit: 6.022136652E+26,
        },
        gram: {
            kilogram: 0.001,
            gram: 1,
            milligram: 1000,
            metricTon: 0.000001,
            longTon: 9.842073304E-7,
            shortTon: 0.0000011023,
            pound: 0.0022046244,
            ounce: 0.0352739907,
            carrat: 5,
            atomicMassUnit: 6.022136652E+23,
        },
        milligram: {
            kilogram: 0.000001,
            gram: 0.001,
            milligram: 1,
            metricTon: 9.999999999E-10,
            longTon: 9.842073304E-10,
            shortTon: 1.10231221E-9,
            pound: 0.0000022046,
            ounce: 0.000035274,
            carrat: 0.005,
            atomicMassUnit: 602213665200000000000,
        },
        metricTon: {
            kilogram: 1000,
            gram: 1000000,
            milligram: 1000000000,
            metricTon: 1,
            longTon: 0.9842073304,
            shortTon: 1.1023122101,
            pound: 2204.6244202,
            ounce: 35273.990723,
            carrat: 5000000,
            atomicMassUnit: 6.022136652E+29,
        },
        longTon: {
            kilogram: 1016.04608,
            gram: 1016046.08,
            milligram: 1016046080,
            metricTon: 1.01604608,
            longTon: 1,
            shortTon: 1.12,
            pound: 2240,
            ounce: 35840,
            carrat: 5080230.4,
            atomicMassUnit: 6.118768338E+29,
        },
        shortTon: {
            kilogram: 907.184,
            gram: 907184,
            milligram: 907184000,
            metricTon: 0.907184,
            longTon: 0.8928571429,
            shortTon: 1,
            pound: 2000,
            ounce: 32000,
            carrat: 4535920,
            atomicMassUnit: 5.463186016E+29,
        },
        pound: {
            kilogram: 0.453592,
            gram: 453.592,
            milligram: 453592,
            metricTon: 0.000453592,
            longTon: 0.0004464286,
            shortTon: 0.0005,
            pound: 1,
            ounce: 16,
            carrat: 2267.96,
            atomicMassUnit: 2.731593008E+26,
        },
        ounce: {
            kilogram: 0.0283495,
            gram: 28.3495,
            milligram: 28349.5,
            metricTon: 0.0000283495,
            longTon: 0.0000279018,
            shortTon: 0.00003125,
            pound: 0.0625,
            ounce: 1,
            carrat: 141.7475,
            atomicMassUnit: 1.70724563E+25,
        },
        carrat: {
            kilogram: 0.0002,
            gram: 0.2,
            milligram: 200,
            metricTon: 2.E-7,
            longTon: 1.96841466E-7,
            shortTon: 2.20462442E-7,
            pound: 0.0004409249,
            ounce: 0.0070547981,
            carrat: 141.7475,
            atomicMassUnit: 1.20442733E+23,
        },
        atomicMassUnit: {
            kilogram: 1.660540199E-27,
            gram: 1.660540199E-24,
            milligram: 1.660540199E-21,
            metricTon: 1.660540199E-30,
            longTon: 1.634315837E-30,
            shortTon: 1.830433737E-30,
            pound: 3.660867475E-27,
            ounce: 5.85738796E-26,
            carrat: 1,
            atomicMassUnit: 8.302700999E-24,
        },
        // Time
        second: {
            second: 1,
            millisecond: 1000,
            microsecond: 1000000000,
            nanosecond: 1000000000,
            picosecond: 1000000000000,
            minute: 0.0166666667,
            hour: 0.0002777778,
            day: 0.0000115741,
            week: 0.0000016534,
            month: 3.802570537E-7,
            year: 3.168808781E-8,
        },
        millisecond: {
            second: 0.001,
            millisecond: 1,
            microsecond: 1000,
            nanosecond: 1000000,
            picosecond: 1000000000,
            minute: 0.0000166667,
            hour: 2.777777777E-7,
            day: 1.157407407E-8,
            week: 1.653439153E-9,
            month: 3.802570537E-10,
            year: 3.168808781E-11,
        },
        microsecond: {
            second: 0.000001,
            millisecond: 0.001,
            microsecond: 1,
            nanosecond: 1000,
            picosecond: 1000000,
            minute: 1.666666666E-8,
            hour: 2.777777777E-10,
            day: 11.157407407E-11,
            week: 1.653439153E-12,
            month: 3.802570537E-13,
            year: 3.168808781E-14,
        },
        nanosecond: {
            second: 1.E-9,
            millisecond: 0.000001,
            microsecond: 0.001,
            nanosecond: 1,
            picosecond: 1000,
            minute: 1.666666666E-11,
            hour: 2.777777777E-13,
            day: 1.157407407E-14,
            week: 1.653439153E-15,
            month: 3.802570537E-16,
            year: 3.168808781E-17,
        },
        picosecond: {
            second: 1.E-12,
            millisecond: 1.E-9,
            microsecond: 0.000001,
            nanosecond: 0.001,
            picosecond: 1,
            minute: 1.666666666E-14,
            hour: 2.777777777E-16,
            day: 1.157407407E-17,
            week: 1.653439153E-18,
            month: 3.802570537E-19,
            year: 3.168808781E-20,
        },
        minute: {
            second: 60,
            millisecond: 60000,
            microsecond: 60000000,
            nanosecond: 60000000000,
            picosecond: 60000000000000,
            minute: 1,
            hour: 0.0166666667,
            day: 0.0006944444,
            week: 0.0000992063,
            month: 0.0000228154,
            year: 0.0000019013,
        },
        hour: {
            second: 3600,
            millisecond: 3600000,
            microsecond: 3600000000,
            nanosecond: 3600000000000,
            picosecond: 3600000000000000,
            minute: 60,
            hour: 1,
            day: 0.0416666667,
            week: 0.005952381,
            month: 0.0013689254,
            year: 0.0001140771,
        },
        day: {
            second: 86400,
            millisecond: 86400000,
            microsecond: 86400000000,
            nanosecond: 86400000000000,
            picosecond: 86400000000000000,
            minute: 1440,
            hour: 24,
            day: 1,
            week: 0.1428571429,
            month: 0.0328542094,
            year: 0.0027378508,
        },
        week: {
            second: 604800,
            millisecond: 604800000,
            microsecond: 604800000000,
            nanosecond: 604800000000000,
            picosecond: 604800000000000000,
            minute: 10080,
            hour: 168,
            day: 7,
            week: 1,
            month: 0.2299794661,
            year: 0.0191649555,
        },
        month: {
            second: 2629800,
            millisecond: 2629800000,
            microsecond: 2629800000000,
            nanosecond: 2629800000000000,
            picosecond: 2629800000000000000,
            minute: 43830,
            hour: 730.5,
            day: 30.4375,
            week: 4.3482142857,
            month: 1,
            year: 0.0833333333,
        },
        year: {
            second: 31557600,
            millisecond: 31557600000,
            microsecond: 31557600000000,
            nanosecond: 31557600000000000,
            picosecond: 31557600000000000000,
            minute: 525960,
            hour: 8766,
            day: 365.25,
            week: 52.178571429,
            month: 12,
            year: 1,
        },

      };
    }
  
    // Convert a value from one unit to another
    convert(value, fromUnit, toUnit) {
      if (!this.conversions[fromUnit] || !this.conversions[fromUnit][toUnit]) {
        throw new Error('Invalid conversion');
      }
  
      const conversion = this.conversions[fromUnit][toUnit];
  
      if (typeof conversion === 'function') {
        return conversion(value);
      }
  
      return value * conversion;
    }
  }


  