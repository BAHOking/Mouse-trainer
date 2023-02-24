let btnStart = document.querySelector(".btn__start");
let mainMenu = document.querySelector(".main__menu");
let gameBox = document.querySelector(".field__game-box");
let gameField = document.querySelector(".field__game");
let game = document.querySelector(".game");
let pointsBest = document.querySelector(".point__best span");
let points = document.querySelector(".point span");
let taymerSpan = document.querySelector(".taymer span");

let gameEndBox = document.querySelector(".game__end-box");
let gameEndPoints = document.querySelector(".game__end-point span");
let gameEndBestPoints = document.querySelector(".game__end-best--point span");

let gameEndBtnRestart = document.querySelector(".game__end-btn--restart");

let cells = document.querySelectorAll(".cell");
let arrInsects = ["fly", "mosquito", "caterpillar", "bee"];

let beetlesСaughtNum = 1;
let BestResult = 0;
let taymerStop;

btnStart.addEventListener("click", function ToCloseMainMenu() {
  mainMenu.style.display = "none";
  gameBox.style.display = "block";

  gameStart();
});

function gameStart() {
  createImg();
  taymerStop = setInterval(taymer, 1000);
}

function createImg() {
  let img = document.createElement("img");

  img.alt = "bug";
  img.src = `images/${arrInsects[randomNumBeetle()]}.png`;

  cells[randomNumCell()].appendChild(img);
}

function randomNumCell() {
  min = Math.ceil(0);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomNumBeetle() {
  min = Math.ceil(0);
  max = Math.floor(4);
  return Math.floor(Math.random() * (max - min)) + min;
}

game.addEventListener("click", function catchFly(event) {
  let img = event.target.closest("img");
  if (img.src == "https://bahoking.github.io/Mouse-trainer/images/fly.png") {
    img.remove();
    createImg();
    beetlesСaught();
  }
});

game.addEventListener("dblclick", function catchMosquito(event) {
  let img = event.target.closest("img");
  if (img.src == "https://bahoking.github.io/Mouse-trainer/images/mosquito.png") {
    img.remove();
    createImg();
    beetlesСaught();
  }
});

game.addEventListener("contextmenu", function catchBee(event) {
  let img = event.target.closest("img");
  if (img.src == "https://bahoking.github.io/Mouse-trainer/images/bee.png") {
    img.remove();
    createImg();
    beetlesСaught();
  }
});

game.addEventListener("dragend", function catchCaterpillar(event) {
  let img = event.target.closest("img");
  if (img.src == "https://bahoking.github.io/Mouse-trainer/images/caterpillar.png") {
    img.remove();
    createImg();
    beetlesСaught();
  }
});

function beetlesСaught() {
  points.innerHTML = beetlesСaughtNum++;
}

function taymer() {
  if (taymerSpan.innerHTML > 0) {
    taymerSpan.innerHTML = +taymerSpan.innerHTML - 1;
  }

  if (taymerSpan.innerHTML <= 20) {
    taymerSpan.style.color = "orange";
  }

  if (taymerSpan.innerHTML <= 10) {
    taymerSpan.style.color = "red";
  }

  if (taymerSpan.innerHTML == 0) {
    clearInterval(taymerStop);
    endGame();
  }
}

function endGame() {
  if (points.innerHTML < beetlesСaughtNum && BestResult < beetlesСaughtNum) {
    BestResult = beetlesСaughtNum - 1;
    pointsBest.innerHTML = BestResult;
  }

  gameBox.style.display = "none";
  gameEndBox.style.display = "block";

  gameEndPoints.innerHTML = beetlesСaughtNum - 1;
  gameEndBestPoints.innerHTML = BestResult;
}

gameEndBtnRestart.addEventListener("click", function gameRestart() {
  gameBox.style.display = "block";
  gameEndBox.style.display = "none";

  beetlesСaughtNum = 1;
  points.innerHTML = 0;
  taymerSpan.innerHTML = 30;
  taymerStop = setInterval(taymer, 1000);
});
