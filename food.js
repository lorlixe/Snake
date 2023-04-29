import { randomGridPosition } from "./grid.js";
import { onSnake, expandSnake } from "./snake.js";

let food = getRandomFoodPosition();
const EXPANSION_RATE = 5;
let score_number = 0;
score.innerHTML = "Score : " + score_number;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
    score_number += 5;
    score.innerHTML = "Score : " + score_number;
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    console.log(newFoodPosition);
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
