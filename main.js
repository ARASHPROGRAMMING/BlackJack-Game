let fristCard = getRandomCards();
let secoundCard = getRandomCards();
let cards = [fristCard, secoundCard];
let sum = fristCard + secoundCard;
let hasBlackJack = false;
let isAlive = true;
let massage = "";
let massageEl = document.getElementById("massage-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function getRandomCards() {
  let randomCard1 = Math.floor(Math.random() * 16);
  let randomCard2 = Math.floor(Math.random() * 16);
  return randomCard1, randomCard2;
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardEl.textContent = `Card: `;
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = `Sum: ${sum}`;
  if (sum < 21) {
    massage = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    massage = "Whooo! You`ve got BlacKjack! 🥳";
    hasBlackJack = true;
  } else if (sum > 21) {
    massage = "You`r out of the game! 😭";
    isAlive = false;
  }
  massageEl.textContent = massage;
}

function newCard() {
  if (hasBlackJack === true && massage === true) {
    let card = getRandomCards();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
