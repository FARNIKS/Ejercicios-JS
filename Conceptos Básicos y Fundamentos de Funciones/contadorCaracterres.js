let cadenas = new String("Hola que hace");

const contadorCaracteres = (cadena) => {
  let objetoAuxiliar = {};

  for (let caracter of cadenas) {
    if (caracter == " ") {
      continue;
    }

    caracterminuscula = caracter.toLowerCase();
    objetoAuxiliar[caracterminuscula] =
      (objetoAuxiliar[caracterminuscula] || 0) + 1;
  }

  return objetoAuxiliar;
};

console.log(contadorCaracteres(cadenas));
