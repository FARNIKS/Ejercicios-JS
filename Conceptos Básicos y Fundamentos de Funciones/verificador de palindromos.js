const esPalindromo = (palabra) => {
  let palabraLimpia = palabra.replace(/\s/g, ""); // Elimina espacios en blanco
  let palabraRevertida = palabraLimpia.split("").reverse().join(""); // Lo convierte en un arrai se revierte y el join hace que se retorne una nueva cadena

  return palabraLimpia.toLowerCase() === palabraRevertida.toLowerCase();
};

console.log(esPalindromo("51760671"));
