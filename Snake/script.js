const board = document.getElementById("board");
const scoreBoard = document.getElementById("scoreBoard");
const maxScoreBoard = document.getElementById("maxScoreBoard");
const startButton = document.getElementById("start");
const gameOverSing = document.getElementById("gameOver");
const snakeImage = document.getElementById("snakeImage");

const boardSize = 10;
const gameSpeed = 150;
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

const directions = {
  ArrowUp: -10,
  ArrowDown: 10,
  ArrowLeft: -1,
  ArrowRight: 1,
};

// Variables de juego
let snake;
let score;
let maxScore;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

const updateScore = () => {
  scoreBoard.innerText = score;
};

const drawSnake = () => {
  snake.forEach((square) => drawSquare(square, "snakeSquare"));
};

/*@params
square> posicion del cuadrado
type> tipo de cuadrado (empty, snake, food)
 */
const drawSquare = (square, type) => {
  const [row, column] = square.split(""); //dividir el id del cuadrado en fila y columna
  boardSquares[row][column] = squareTypes[type];
  const squareElement = document.getElementById(square);
  squareElement.setAttribute("class", `square ${type}`);

  if (type === "emptySquare") {
    emptySquares.push(square);
  } else {
    if (emptySquares.indexOf(square) !== -1) {
      emptySquares.splice(emptySquares.indexOf(square), 1);
    }
  }
};

const moveSnake = () => {
  const newSquare = String(
    Number(snake[snake.length - 1]) + directions[direction],
  ).padStart(2, "0");

  const [row, column] = newSquare.split("");

  if (
    newSquare < 0 ||
    newSquare > boardSize * boardSize ||
    (direction === "ArrowRight" && column == 0) ||
    (direction === "ArrowLeft" && column == 9) ||
    boardSquares[row][column] === squareTypes.snakeSquare
  ) {
    gameOver();
  } else {
    snake.push(newSquare);

    if (boardSquares[row][column] === squareTypes.foodSquare) {
      addFood(); //aumentar la puntuacion y crear nueva comida
    } else {
      const emptySquare = snake.shift(); //eliminar la cola de la serpiente
      drawSquare(emptySquare, "emptySquare");
    }
    drawSnake(); //redibujar la serpiente
  }
};

const scoreLogic = () => {
  maxScore = maxScore || 0;

  if (score >= maxScore) {
    maxScore = score;
    maxScoreBoard.innerText = maxScore;
    console.log(maxScore);
  }
};

const updateMaxScore = () => {};

const addFood = () => {
  score++;
  updateScore();
  scoreLogic();
  createRandomFood();
};

const gameOver = () => {
  gameOverSing.style.display = "block";
  clearInterval(moveInterval);
  startButton.disabled = false;
  startButton.style.backgroundColor = "green";
};

const setDirection = (newDirection) => {
  direction = newDirection;
};

const directionEvent = (key) => {
  switch (key.code) {
    case "ArrowUp":
      direction !== "ArrowDown" && setDirection(key.code);
      break;
    case "ArrowDown":
      direction !== "ArrowUp" && setDirection(key.code);
      break;
    case "ArrowLeft":
      direction !== "ArrowRight" && setDirection(key.code);
      break;
    case "ArrowRight":
      direction !== "ArrowLeft" && setDirection(key.code);
      break;
  }
};

const createRandomFood = () => {
  const ramdomEmptySquare =
    emptySquares[Math.floor(Math.random() * emptySquares.length)];
  drawSquare(ramdomEmptySquare, "foodSquare");
  emptySquares[Math.floor(Math.random() * emptySquares.length)];
  drawSquare(ramdomEmptySquare, "foodSquare");
};

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
  score = snake.length - 4;
  direction = "ArrowRight";
  boardSquares = Array.from(Array(boardSize), () =>
    new Array(boardSize).fill(squareTypes.emptySquare),
  ); // matriz 10x10 llena de ceros
  console.log(boardSquares);
  board.innerHTML = "";
  emptySquares = [];

  createBoard();
};

const startGame = () => {
  setGame();
  gameOverSing.style.display = "none";
  snakeImage.style.display = "none";
  startButton.disabled = true;
  startButton.style.backgroundColor = "grey";
  drawSnake();
  updateScore();
  createRandomFood();
  document.addEventListener("keydown", directionEvent);
  moveInterval = setInterval(() => moveSnake(), gameSpeed);
};

startButton.addEventListener("click", startGame);
