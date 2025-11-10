let disminuir = document.querySelector("disminuir");
let restablecer = document.querySelector("restablecer");
let aumentar = document.querySelector("aumentar");
let display = document.querySelector("p");

let contador = 0;

const actualizarDisplay = () => {
  display.textContent = contador;
};
