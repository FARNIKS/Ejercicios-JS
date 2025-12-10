let optionSelect = document.getElementById("conversionType");
let fromUnit = document.getElementById("fromUnit");
let toUnit = document.getElementById("toUnit");
let inputElement = document.getElementById("inputValue"); // Mantener la referencia al elemento
let result = document.getElementById("result");
let buttonConvert = document.getElementById("buttonConvert");

let lengthUnits = ["Meters", "Kilometers", "Miles", "Yards"];
let weightUnits = ["Grams", "Kilograms", "Pounds", "Ounces"];
let temperatureUnits = ["Celsius", "Fahrenheit", "Kelvin"];
let timeUnits = ["Seconds", "Minutes", "Hours", "Days"];

const lengthConverter = (value, fromUnit, toUnit) => {
  // Definición de las conversiones base (todas a Metros)
  // Este enfoque simplifica la lógica, ya que solo necesitamos N factores
  // en lugar de N*(N-1) casos en el switch.
  const conversionFactors = {
    Meters: 1,
    Kilometers: 1000, // 1 km = 1000 m
    Miles: 1609.34, // 1 mi ≈ 1609.34 m
    Yards: 0.9144, // 1 yd ≈ 0.9144 m
  };

  const fromFactor = conversionFactors[fromUnit];
  const toFactor = conversionFactors[toUnit];
  console.log(fromUnit, toUnit);

  // Verifica si las unidades son válidas
  if (fromFactor === undefined || toFactor === undefined) {
    console.error(`Unidad de longitud no válida: ${fromUnit} o ${toUnit}`);
    return null;
  }

  // 1. Convertir el valor de la unidad de origen a la unidad base (Metros).
  const valueInMeters = value * fromFactor;

  // 2. Convertir el valor en Metros a la unidad de destino.
  const convertedValue = valueInMeters / toFactor;

  result.textContent = convertedValue;
};

const weightConverter = (value, fromUnit, toUnit) => {
  // Base: Kilograms (1 kg = 1000 g)
  const conversionFactors = {
    Grams: 0.001, // 1 g = 0.001 kg
    Kilograms: 1,
    Pounds: 0.453592, // 1 lb ≈ 0.453592 kg
    Ounces: 0.0283495, // 1 oz ≈ 0.0283495 kg
  };

  const fromFactor = conversionFactors[fromUnit];
  const toFactor = conversionFactors[toUnit];
  console.log(fromUnit, toUnit);

  if (fromFactor === undefined || toFactor === undefined) return null;

  const valueInKilograms = value * fromFactor;
  result.textContent = valueInKilograms / toFactor;
};

const temperatureConverter = (value, fromUnit, toUnit) => {
  // Aquí usamos el ID 'result' como indicaste
  const result = document.getElementById("result");

  if (!result) {
    console.error(
      "Error: No se encontró el elemento HTML con id 'result'. Asegúrate de que exista en tu HTML."
    );
    return; // Detiene la ejecución si no se encuentra el elemento
  }

  let valueInCelsius;

  // --- Paso 1: Convertir a la base (Celsius) ---
  switch (fromUnit) {
    case "Celsius":
      valueInCelsius = value;
      break;
    case "Fahrenheit":
      valueInCelsius = (value - 32) * (5 / 9);
      break;
    case "Kelvin":
      valueInCelsius = value - 273.15;
      break;
    default:
      // Mostrar error en el elemento result
      result.textContent = `Error: Unidad de origen '${fromUnit}' no válida.`;
      return;
  }

  let convertedValue;

  // --- Paso 2: Convertir de Celsius a la unidad de destino ---
  switch (toUnit) {
    case "Celsius":
      convertedValue = valueInCelsius;
      break;
    case "Fahrenheit":
      convertedValue = valueInCelsius * (9 / 5) + 32;
      break;
    case "Kelvin":
      convertedValue = valueInCelsius + 273.15;
      break;
    default:
      // Mostrar error en el elemento result
      result.textContent = `Error: Unidad de destino '${toUnit}' no válida.`;
      return;
  }

  // --- Paso 3: Guardar el resultado formateado en result.textContent ---

  result.textContent = convertedValue.toFixed(2);
};

const timeConverter = (value, fromUnit, toUnit) => {
  // Base: Seconds
  const conversionFactors = {
    Seconds: 1,
    Minutes: 60,
    Hours: 3600, // 60 * 60
    Days: 86400, // 24 * 3600
  };

  const fromFactor = conversionFactors[fromUnit];
  const toFactor = conversionFactors[toUnit];
  console.log(fromUnit, toUnit);

  if (fromFactor === undefined || toFactor === undefined) return null;

  const valueInSeconds = value * fromFactor;
  result.textContent = valueInSeconds / toFactor;
};

let units = (unitsConversor) => {
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  // Añadir placeholder (Buena práctica)
  const placeholderText = "--- Select Unit ---";
  const createPlaceholder = (text) => {
    let p = document.createElement("option");
    p.text = text;
    p.value = "";
    p.disabled = true;
    p.selected = true;
    return p;
  };
  fromUnit.add(createPlaceholder(placeholderText));
  toUnit.add(createPlaceholder(placeholderText));

  for (unitsValue of unitsConversor) {
    let optionFrom = document.createElement("option");
    optionFrom.text = unitsValue;
    optionFrom.value = unitsValue;
    fromUnit.add(optionFrom);
    toUnit.add(optionFrom.cloneNode(true));
  }
};

optionSelect.addEventListener("change", function () {
  selectedOption = optionSelect.value;

  switch (selectedOption) {
    case "length":
      units(lengthUnits);
      break;
    case "weight":
      units(weightUnits);
      break;
    case "temperature":
      units(temperatureUnits);
      break;
    case "time":
      units(timeUnits);
      break;

    default:
      break;
  }
});

buttonConvert.addEventListener("click", function () {
  selectedOption = optionSelect.value;
  selectedFromUnit = fromUnit.value;
  selectedToUnit = toUnit.value;
  value = parseFloat(inputElement.value);

  switch (selectedOption) {
    case "length":
      lengthConverter(value, selectedFromUnit, selectedToUnit);
      break;
    case "weight":
      weightConverter(value, selectedFromUnit, selectedToUnit);
      break;
    case "temperature":
      temperatureConverter(value, selectedFromUnit, selectedToUnit);
      break;
    case "time":
      timeConverter(value, selectedFromUnit, selectedToUnit);
      break;

    default:
      break;
  }
});
