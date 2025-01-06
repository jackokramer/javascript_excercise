let cardOne = 11
let cardTwo = 10
let sum = cardOne + cardTwo
let hasBlackJack = false
let isAlive = true
let message = ` `

let messageEl = document.getElementById("message-el")

function startGame(){
    if(sum <=20){
        message = `You have ${sum} pleasse draw more`
    } else if(sum===21){
        message = "Black jack baby"
        hasBlackJack = true
    } else {
        message = `You lose loswe ${sum}`
        isAlive=false
    }
    messageEl.textContent= message
}