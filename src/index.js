import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function deckBuilder() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
}

const cardContainer = document.getElementById("card-container");
const newCardButton = document.getElementById("new-card-btn");

function generateCard() {
  const cards = deckBuilder();
  const random = Math.floor(Math.random() * 52);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
  let entity;
  cardSuit === "Diamonds"
    ? (entity = "&diams;")
    : (entity = "&" + cardSuit.toLowerCase() + ";");

  const card = document.createElement("div");
  card.classList.add("card", cardSuit.toLowerCase());
  card.innerHTML =
    '<span class="card-value-suit top">' +
    cardValue +
    entity +
    "</span>" +
    '<span class="card-suit">' +
    entity +
    "</span>" +
    '<span class="card-value-suit bot">' +
    cardValue +
    entity +
    "</span>";
  cardContainer.innerHTML = "";
  cardContainer.appendChild(card);
}

newCardButton.addEventListener("click", generateCard);

// Generate the first card when the page loads
generateCard();