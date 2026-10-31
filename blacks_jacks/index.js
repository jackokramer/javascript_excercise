let cards = [] // array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

console.log(cards)

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard(){
    //return firstCard + secondCardCard
     //if else statement
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
}

console.log(cards)
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =[firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent = `Cards: `
        // Create a for loop that renders out all the cards instead of just two
    for( let x = 0; x<cards.length; x+=1){
        cardsEl.textContent += `${cards[x]} `
    }
    sumEl.textContent = `Sum: ${sum}`
    if(sum<21){
        message = 'Do you want to draw another card'
    } else if(sum === 21){
        message = 'black jack'
        hasBlackJack = true
} else if(sum > 21){
        message = 'By Bye 👋🏼'
        isAlive = false
}
    messageEl.textContent = message
}

function newCard(){
    console.log("draw new card")
    if(isAlive === true && hasBlackJack=== false){
    let card =  getRandomCard()//Math.floor(Math.root(2)+11)
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}
//

// arrays are compsite data types rather than a primitive data type like booleans and numbers.
//methods are function on an object
