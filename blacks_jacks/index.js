// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

let firstCard = Math.floor(Math.random(11)+11)
let secondCardCard = Math.floor(Math.random(11)+11)
let sum = firstCard + secondCardCard
let hasBlackJack = false
let isAlive = true

console.log(sum)
// 2. Create a variable, sum, and set it to the sum of the two cards
if(sum<21){
    console.log('Do you want to draw another card')
} else if(sum === 21){
    console.log('black jack')
    hasBlackJack = true
    isAlive = true
} else if(sum > 21){
    console.log('By Bye 👋🏼')
    isAlive = false
}

console.log(isAlive)