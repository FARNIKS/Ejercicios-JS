let numeros = [1, 1, 4, 5, 6, 7, 8, 9, 9, 10, 3, 5, 11, 88, 100];

const numerosLimpios = numeros.reduce((contador, num) => {
  contador[num] = (contador[num] || 0) + 1;
  return contador;
}, {});

const filtrarNumeros = numeros.filter((num) => {
  const conteo = numerosLimpios[num];
  return conteo === 1;
});

console.log(filtrarNumeros);
