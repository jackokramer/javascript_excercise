let firstCard = Math.floor(Math.random()*11)+1 //Math.floor(Math.random(11)+11)
let secondCardCard = Math.floor(Math.random()*11)+1 //Math.floor(Math.random(11)+11)
let cards = [firstCard, secondCardCard] // array - ordered list of items
let sum = firstCard + secondCardCard
let hasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard(){
    return 5
}
function startGame(){
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
    let card =  getRandomCard()//Math.floor(Math.root(2)+11)
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}


// arrays are compsite data types rather than a primitive data type like booleans and numbers.
//methods are function on an object
