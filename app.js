// Instantiate the UnitConverter class
const unitConverter = new Converter();

// Length Conversion
const fromLengthValueInput = document.getElementById("fromLengthValue");
const fromLengthUnitSelect = document.getElementById("fromLengthUnit");
const toLengthValueInput = document.getElementById("toLengthValue");
const toLengthUnitSelect = document.getElementById("toLengthUnit");

function performLengthConversion() {
    const fromValue = parseFloat(fromLengthValueInput.value);
    const fromUnit = fromLengthUnitSelect.value;
    const toUnit = toLengthUnitSelect.value;

    try {
        const convertedValue = unitConverter.convert(fromValue, fromUnit, toUnit);
        toLengthValueInput.value = convertedValue.toFixed(6);
    } catch (error) {
        toLengthValueInput.value = "Error";
        console.error(error.message);
    }
}

fromLengthValueInput.addEventListener("input", performLengthConversion);
fromLengthUnitSelect.addEventListener("change", performLengthConversion);
toLengthUnitSelect.addEventListener("change", performLengthConversion);

performLengthConversion();

// Temperature Conversion
const fromTempValueInput = document.getElementById("fromTempValue");
const fromTempUnitSelect = document.getElementById("fromTempUnit");
const toTempValueInput = document.getElementById("toTempValue");
const toTempUnitSelect = document.getElementById("toTempUnit");

function performTemperatureConversion() {
    const fromValue = parseFloat(fromTempValueInput.value);
    const fromUnit = fromTempUnitSelect.value;
    const toUnit = toTempUnitSelect.value;

    try {
        const convertedValue = unitConverter.convert(fromValue, fromUnit, toUnit);
        toTempValueInput.value = typeof convertedValue === "number" ? convertedValue.toFixed(2) : "Error";
    } catch (error) {
        toTempValueInput.value = "Error";
        console.error(error.message);
    }
}


fromTempValueInput.addEventListener("input", performTemperatureConversion);
fromTempUnitSelect.addEventListener("change", performTemperatureConversion);
toTempUnitSelect.addEventListener("change", performTemperatureConversion);

performTemperatureConversion();

// Area Conversion
const fromAreaValueInput = document.getElementById("fromAreaValue");
const fromAreaUnitSelect = document.getElementById("fromAreaUnit");
const toAreaValueInput = document.getElementById("toAreaValue");
const toAreaUnitSelect = document.getElementById("toAreaUnit");

function performAreaConversion() {
    const fromValue = parseFloat(fromAreaValueInput.value);
    const fromUnit = fromAreaUnitSelect.value;
    const toUnit = toAreaUnitSelect.value;

    try {
        const convertedValue = unitConverter.convert(fromValue, fromUnit, toUnit);
        toAreaValueInput.value = convertedValue.toFixed(6);
    } catch (error) {
        toAreaValueInput.value = "Error";
        console.error(error.message);
    }
}

fromAreaValueInput.addEventListener("input", performAreaConversion);
fromAreaUnitSelect.addEventListener("change", performAreaConversion);
toAreaUnitSelect.addEventListener("change", performAreaConversion);

performAreaConversion();

// Volume Conversion
const fromUnitValueInput = document.getElementById("fromUnitValue");
const fromUnitSelect = document.getElementById("fromUnit");
const toUnitValueInput = document.getElementById("toUnitValue");
const toUnitSelect = document.getElementById("toUnit");

function performUnitConversion() {
    const fromValue = parseFloat(fromUnitValueInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    try {
        const convertedValue = unitConverter.convert(fromValue, fromUnit, toUnit); // Ensure unitConverter is defined elsewhere
        toUnitValueInput.value = convertedValue.toFixed(6);
    } catch (error) {
        toUnitValueInput.value = "Error";
        console.error(error.message);
    }
}

fromUnitValueInput.addEventListener("input", performUnitConversion);
fromUnitSelect.addEventListener("change", performUnitConversion);
toUnitSelect.addEventListener("change", performUnitConversion);

performUnitConversion();

// Weight Conversion
const fromWeightValueInput = document.getElementById("fromWeightValue");
const fromWeightUnitSelect = document.getElementById("fromWeightUnit");
const toWeightValueInput = document.getElementById("toWeightValue");
const toWeightUnitSelect = document.getElementById("toWeightUnit");

function performWeightConversion() {
    const fromValue = parseFloat(fromWeightValueInput.value);
    const fromUnit = fromWeightUnitSelect.value;
    const toUnit = toWeightUnitSelect.value;

    try {
        const convertedValue = unitConverter.convert(fromValue, fromUnit, toUnit); // Ensure unitConverter is defined elsewhere
        toWeightValueInput.value = convertedValue.toFixed(6);
    } catch (error) {
        toWeightValueInput.value = "Error";
        console.error(error.message);
    }
}

fromWeightValueInput.addEventListener("input", performWeightConversion);
fromWeightUnitSelect.addEventListener("change", performWeightConversion);
toWeightUnitSelect.addEventListener("change", performWeightConversion);

performWeightConversion();

// Time Conversion
const fromTimeValueInput = document.getElementById("fromTimeValue");
const fromTimeUnitSelect = document.getElementById("fromTimeUnit");
const toTimeValueInput = document.getElementById("toTimeValue");
const toTimeUnitSelect = document.getElementById("toTimeUnit");

function performTimeConversion() {
    const fromValue = parseFloat(fromTimeValueInput.value);
    const fromUnit = fromTimeUnitSelect.value;
    const toUnit = toTimeUnitSelect.value;

    try {
        const convertedValue = unitConverter.convert(fromValue, fromUnit, toUnit); // Ensure unitConverter is defined elsewhere
        toTimeValueInput.value = convertedValue.toFixed(6);
    } catch (error) {
        toTimeValueInput.value = "Error";
        console.error(error.message);
    }
}

fromTimeValueInput.addEventListener("input", performTimeConversion);
fromTimeUnitSelect.addEventListener("change", performTimeConversion);
toTimeUnitSelect.addEventListener("change", performTimeConversion);

performTimeConversion();
