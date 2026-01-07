const board = document.getElementById("board");
const scoreBoard = document.getElementById("scoreBoard");
const startButton = document.getElementById("start");
const gameOver = document.getElementById("gameOver");

const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

const directions = {
  ArrawUp: -10,
  ArrawDown: 10,
  ArrawLeft: -1,
  ArrawRight: 1,
};

// Variables de juego
let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

/*@params
square> posicion del cuadrado
type> tipo de cuadrado (empty, snake, food)
 */
const drawSquare = (square, type) => {};

const createBoard = () => {
  boardSquares.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      const squareValue = `${rowIndex}${columnIndex}`;
      const squareElement = document.createElement("div");
      squareElement.setAttribute("class", "square emptySquare");
      squareElement.setAttribute("id", squareValue);
      board.appendChild(squareElement);
      emptySquares.push(squareValue);
    });
  });
};

const setGame = () => {
  snake = ["00", "01", "02", "03"];
  score = snake.length;
  direction = "ArrowRight";
  boardSquares = Array.from(Array(boardSize), () =>
    new Array(boardSize).fill(squareTypes.emptySquare)
  );
  console.log(boardSquares);
  board.innerHTML = "";
  emptySquares = [];

  createBoard();
};

const startGame = () => {
  setGame();
  gameOver.style.display = "none";
  startButton.disabled = true;
  drawSnake();
};

startButton.addEventListener("click", startGame);
