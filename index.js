let resultado = document.getElementById("resultado-el");
let cartas = document.getElementById("numcards-el");
let suma = document.getElementById("sum-el");
let masCartas = document.getElementById("morecard-el");
let guardar = document.getElementById("guardar-el");
let firstCard = 0;
let secCard = 0;

function calculoBj() {
  firstCard = Math.floor(Math.random() * (12 - 2) + 2);
  secCard = Math.floor(Math.random() * (12 - 2) + 2);
  sum = firstCard + secCard;
  return firstCard, secCard, sum;
}

let hasBJ = false;
let isAlive = true;
let message = "";
let sePlanto = false;

console.log(firstCard);
console.log(secCard);

console.log(firstCard + secCard);

console.log(hasBJ);

function startGame() {
  isAlive = true;
  hasBJ = false;
  calculoBj();
  if (sum < 21) {
    message = "Otra carta? 😄 ";
  } else if (sum == 21) {
    message = "Blackjack! 🥳 ";
    hasBJ = true;
  } else {
    message = "Perdiste 😭 ";
    isAlive = false;
  }
  cartas.textContent = firstCard + " - " + secCard;
  suma.textContent = sum;
  resultado.textContent = message;
}

function moreCard() {
  anotherC = Math.floor(Math.random() * (12 - 2) + 2);
  if (isAlive === true && hasBJ === false) {
    sum = sum + anotherC;
    if (sum < 21) {
      message = "Otra carta? 😄 ";
    } else if (sum == 21) {
      message = "Blackjack! 🥳 ";
      hasBJ = true;
    } else {
      message = "Perdiste 😭 ";
      isAlive = false;
    }
    cartas.textContent += " - " + anotherC;
    suma.textContent = sum;
    resultado.textContent = message;
  } else if (isAlive === false && hasBJ === false) {
    resultado.textContent = "¡Ya terminó! 😬";
  } else if (hasBJ === true) {
    resultado.textContent = "¡Ya ganaste! 😎";
    isAlive = false;
  } else if (isAlive === false && hasBJ === true) {
    resultado.textContent = " Ganaste! Jugar de nuevo? 😎";
    isAlive = false;
  }
}

function lastsave() {
  if (isAlive === false && sePlanto === false) {
    guardar.textContent = "No podés guardar si perdiste 😬";
  } else if ((sePlanto === false, isAlive === true && hasBJ === false)) {
    guardar.textContent = sum;
    firstCard = 0;
    secCard = 0;
    isAlive = false;
    sePlanto = true;
  } else if ((sePlanto === false, hasBJ === true)) {
    guardar.textContent = "Ya hiciste blackjack! 😉 ";
    sePlanto = true;
  } else if (isAlive === false && !sePlanto === true) {
    guardar.textContent = " Ya perdiste 😔";
    sePlanto = true;
  } else if (sePlanto === true) {
    guardar.textContent = sum + " ¡Ya te plantaste! 😤";
  }
}
