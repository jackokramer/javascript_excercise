let cardOne = 11
let cardTwo = 10
let sum = cardOne + cardTwo
let hasBlackJack = false
let isAlive = true
let message = ` `

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")

function startGame(){
    sumEl.textContent= sum
    if(sum <=20){
        console.log(`do you want to draw a new card?`)
        message = `You have pleasse draw more`
    } else if(sum === 21){
        console.log(`You Win!!!`)
        message = "Black jack baby"
        hasBlackJack = true
    } else {
        console.log(`You lose.....`)
        message = `You lose loser`
        isAlive=false
    }
    messageEl.textContent= message
}

console.log(sum)