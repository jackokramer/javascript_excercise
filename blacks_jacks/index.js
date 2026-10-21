// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

let firstCard = Math.floor(Math.random(11)+11)
let secondCardCard = Math.floor(Math.random(11)+11)
let sum = firstCard + secondCardCard
let hasBlackJack = false
let isAlive = true

console.log(sum)
let message = ''

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function startGame(){
    if(sum<21){
        message = 'Do you want to draw another card'
    } else if(sum === 21){
        message = 'black jack'
        hasBlackJack = true
        isAlive = true
} else if(sum > 21){
        message = 'By Bye 👋🏼'
        isAlive = false
}

}

startGame()
console.log(startGame)
console.log(isAlive)
console.log(message)