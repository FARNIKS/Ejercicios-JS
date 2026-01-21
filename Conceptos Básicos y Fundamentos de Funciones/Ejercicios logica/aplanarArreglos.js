let arraysanidados = [
  "hola",
  "Buenos dias",
  ["Hello World", 1, 2, 3, 4],
  ["A", "B", "C", ["Puuto", "El que lo lea"]],
];
let arrayDos = ["Mamaweboi", 1, 2, 4, 5, 66, 77, 88, 99];
let arraynueve = [
  "hola",
  "Buenos dias",
  ["Hello World", 1, 2, 3, 4],
  ["A", "B", "C", ["Puuto", "El que lo lea"]],
];

const aplanarArray = (...arrays) => {
  // 1. Unimos todos los arrays de entrada en una sola lista (el Array Maestro)
  const arrayMaestro = [].concat(...arrays);

  // 2. Usamos flat(Infinity) para aplanar cualquier nivel de profundidad
  return arrayMaestro.flat(Infinity);
};
console.log(aplanarArray(arraysanidados, arrayDos, arraynueve));
