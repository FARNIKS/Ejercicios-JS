let numeros = [];
const sumaArreglos = numeros.reduce((acc, numero) => {
  return acc + numero;
}, 0);

const promedio = numeros.length > 0 ? sumaArreglos / numeros.length : "PLUTO";

console.log("Suma: ", sumaArreglos);
console.log("Promedio: ", promedio);
