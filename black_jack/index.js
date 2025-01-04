let cardOne = 11
let cardTwo = 10
let sum = cardOne+cardTwo
let hasBlackJack = false

let message = ``

let messageEl = document.getElementById("message-el")

function drawCard(){
    if(sum <=20){
        hasBlackJack = false
        message = `You have ${sum} pleasse draw more`
    } else if(sum===21){
        message = "Black jack baby"
        hasBlackJack = true
    } else {
        message = `You lose loswe ${sum}`
        hasBlackJack = false
    }
    messageEl,textContent= message
}