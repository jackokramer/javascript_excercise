let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''

let messageEl = document.getElementById('message-el')
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

function startGame(){
if(sum <= 20){
    sumEl.textContent= 'Sum: ' + sum
    cardsEl.textContent = 'Cards are : ' +  firstCard + " and " + secondCard
    message = `would you like another card?`
} else if(sum ===21){
    hasBlackJack = true
    sumEl.textContent = 'Sum: ' + sum
    cardsEl.textContent =  'Cards are : ' + firstCard  + " and " + secondCard
    message = `nailed it baby black jack!!`
} else {
    sumEl.textContent = 'Sum: ' + sum
    cardsEl.textContent = 'Cards are : ' + firstCard + " and " +secondCard
    isAlive = false
    message = `later loser`
}
    messageEl.textContent = message
console.log(message)
}

//New Card function
function newCard(){
    console.log('Drawing a new card from the deck')
    let card = 7
    sum = card + firstCard + secondCard
    startGame()
}

/*
if(sum< 21){
    console.log('Do you want to draw a new cards? 😃')
} else if( sum === 21){
    console.log('nailed it black jack baby!!! 🥳')
} else if( sum > 21){
    console.log(`you're out of the game bye bye 😭`)
}
*/
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
/*
let age = 22

if(age<21){
    console.log('beat it ya scrub')
} else {
    console.log(`come right in my dear`)
}
*/
// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"


// Check if the person is elegible for a birthday card from the King! (100)
/*
let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
    console.log("not eligible")
} else if (age === 100) {
    console.log(`Here's your birthday card from the King!!!!!👑`)
} else{
    console.log(`not elegible already got one`)
}
*/