import { getInputDirection } from "./input.js"

export const snakeSpeed = 5
let newSegments = 0


const snakebody = [
    {x: 10, y:11},
]

export function update(){
    addSegment()
    const inputDirection = getInputDirection()
    for (let i = snakebody.length - 2; i>=0; i--){
        snakebody[i+1]= {... snakebody[i]}
    }
    snakebody[0].x += inputDirection.x
    snakebody[0].y += -inputDirection.y

}

export function draw(gameBoard){
    snakebody.forEach(element =>{
        const snakeElement =document.createElement('div')
        snakeElement.style.gridRowStart = element.y
        snakeElement.style.gridColumnStart = element.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })  
}


export function expandSnake(amount){
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} = {}){
    return snakebody.some((segment, index )=> {
        if (ignoreHead && index === 0) return false
        return equalPosition(segment, position)
    })
}

export function getSnakeHead(){
    return snakebody[0]
}

export function snakeIntersection(){
    return onSnake(snakebody[0], {ignoreHead: true})
}

function equalPosition(pos1, pos2){
    return pos1.x === pos2.x &&  pos1.y === pos2.y
}

function addSegment(){
    for(let i = 0; i< newSegments; i++){
        snakebody.push ({...snakebody[snakebody.length - 1]})
    }
    newSegments = 0
}