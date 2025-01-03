let cardOne = 11
let cardTwo = 10
let sum = cardOne+cardTwo

let message = ``

let messageEl = document.getElementById("message-el")

function drawCard(){
    if(sum <=20){
        message = `You have ${sum} pleasse draw more`
    } else if(sum===21){
        message = "Black jack baby"
    } else {
        message = `You lose loswe ${sum}`
    }
    messageEl,textContent= message
}