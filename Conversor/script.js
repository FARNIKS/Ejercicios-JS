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

const lengthConverter = () => {
  const numInput = parseFloat(inputElement.value);
  console.log(numInput);
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

  switch (selectedOption) {
    case "length":
      lengthConverter();
      break;
    case "weight":
      break;
    case "temperature":
      break;
    case "time":
      break;

    default:
      break;
  }
});
