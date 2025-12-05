let optionSelect = document.getElementById("conversionType");

let selectedOption = "length";
optionSelect.addEventListener("change", function () {
  selectedOption = optionSelect.value;

  console.log(selectedOption);
});
console.log(selectedOption);
