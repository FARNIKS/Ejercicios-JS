const calcular = (operacion, num1, num2) => {
  switch (operacion.toLowerCase()) {
    case "sumar":
      return num1 + num2;

    case "restar":
      return num1 - num2;

    case "multiplicar":
      return num1 * num2;

    case "dividir":
      if (num2 === 0) {
        return "Error: No se puede dividir por 0";
      }
      return num1 / num2;

    default:
      return " operacion invalida";
  }
};
/*
let operacion = prompt(
  "Ingrese la operacion a realizar: sumar, restar, multiplicar, dividir"
);
let valor1 = prompt("Ingrese el primer valor");
let valor2 = prompt("Ingrese el segundo valor");
*/
let resultado = calcular("Dividir", 3, 0);

console.log(resultado);
