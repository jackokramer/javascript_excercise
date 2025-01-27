
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ` `

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById('cards-el')

let player = {
    name: "Jack",
    chips: 175
}

let playerEl = document.getElementById('player-El')
playerEl.textContent = `${player.name}: $${player.chips}`
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber> 10){
        return 10
    }else if(randomNumber ===1){
        return 11
        } else{
            return randomNumber
        }
    }


function startGame(){
      let cardOne = getRandomCard()
      let cardTwo = getRandomCard()
      cards = [cardOne, cardTwo]
    sum  = cardOne + cardTwo
    isAlive = true
    renderGame()
}

function renderGame(){
    cardsEl.textContent= `Cards: `
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
function newCard(){
    if(isAlive === true && hasBlackJack === false){
    console.log('drove')
    isAlive = false
    let newCard = getRandomCard()
    sum+= newCard
    cards.push(newCard)
    renderGame()
    }
}



console.log(sum)