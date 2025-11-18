// ...existing code...
const disminuir = document.getElementById("disminuir");
const restablecer = document.getElementById("restablecer");
const aumentar = document.getElementById("aumentar");
const display = document.getElementById("display");
const score = document.getElementById("score");

let contador = 0;
let puntaje = 0;

aumentar.addEventListener("click", () => {
  contador++;
  display.innerText = contador;
});

disminuir.addEventListener("click", () => {
  contador--;
  if (contador < 0) {
    contador = 0;
  }
  display.innerText = contador;
});

restablecer.addEventListener("click", () => {
  if (contador > puntaje) {
    puntaje = contador;
  }
  contador = 0;
  display.innerText = contador;
  score.innerText = puntaje;
});
