
import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood} from "./food.js";
import { outsideGrid } from "./grid.js";

let lastCurrentTime = 0
const gameBoard = document.querySelector("#gameBoard")
const reset = document.querySelector("#resetBtn");


let gameOver = false
reset.addEventListener("click", restart)

function main (currentTime){
    if (gameOver){
        if (confirm("you lost. Press OK to restart"))
        {
            window.location = '/'
        }    
        return
    }
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastCurrentTime)/1000
    if (secondSinceLastRender < 1 / snakeSpeed) return
    
    lastCurrentTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function restart (){
    window.location = '/'
}

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}
function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}