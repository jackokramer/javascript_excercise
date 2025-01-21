let cardOne = 11
let cardTwo = 10
let cards = [cardOne, cardTwo]
let sum = cardOne + cardTwo
let hasBlackJack = false
let isAlive = true
let message = ` `

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById('cards-el')

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent= `Cards: ${cards[0]} and ${cards[1]}`
    sumEl.textContent= `Sum: ${sum}`
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

function newCard(){
    console.log('drove')
    let newCard = 7
    sum+= newCard
    startGame()
}



console.log(sum)