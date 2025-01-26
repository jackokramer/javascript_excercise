let cardOne = getRandomCard()
let cardTwo = getRandomCard()
let cards = [cardOne, cardTwo]
let sum = cardOne + cardTwo
let hasBlackJack = false
let isAlive = true
let message = ` `

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById('cards-el')

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    return randomNumber
}

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent= `Cards: `//${cards[0]} and ${cards[1]}`
    for(let x = 0; x<cards.length; x++){
        cardsEl.textContent += cards[x] + " "
    }
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
// new function
function newCard(){
    console.log('drove')
    let newCard = getRandomCard()
    sum+= newCard
    startGame()
}



console.log(sum)