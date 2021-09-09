let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById('cards-el')

let playerInfo = {
    name: 'jack',
    value: 290,
    sayHi: function(){
        console.log('Hi')
    }

}
let playerEl = document.getElementById('player-el')
playerEl.textContent = playerInfo.name + " : " + playerInfo.value

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard(){
        // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumber =  Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
     // Generate two random numbers
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
     // Re-assign the cards and sum variables so that the game can start
     cards= [firstCard, secondCard]
     sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let x = 0; x< cards.length; x++){
        cardsEl.textContent += cards[x] + " "
    }
    //cardsEl.textContent = 'Cards are : ' +  cards[0] + " and " + cards[1]
    //render out all the cards we have
    if(sum <= 20){
    //render out first card and second card
    // Create a for loop that renders out all the cards instead of just two
    sumEl.textContent= 'Sum: ' + sum
    message = `would you like another card?`
} else if(sum ===21){
    hasBlackJack = true
    sumEl.textContent = 'Sum: ' + sum
    message = `nailed it baby black jack!!`
} else {
    isAlive = false
    message = `later loser`
}
messageEl.textContent = message
console.log(message)
}

//New Card function
function newCard(){
        // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
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
/*
let featuredLists = ["check out my project", "here's the code for my project", 'and my portfolio']

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let myList = ['Univeristy of Oregon', 'Professional Surfer', 'Avid reader', 'Student of the arts']
*/

// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
//let mySelf = ['Jack', 17, false]
// It should contain your name (string), your age (number), and whether you like pizza (boolean)


// Push the newMessage to the messages array, and then log out the array
/*
let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)

console.log(messages)
*/


// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?
/*
//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {

    console.log(count)

}
*/
