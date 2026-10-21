let firstCard = 10 //Math.floor(Math.random(11)+11)
let secondCardCard =4 //Math.floor(Math.random(11)+11)
let sum = firstCard + secondCardCard
let hasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')

function startGame(){
    sumEl.textContent = `Sum: ${sum}`
    if(sum<21){
        message = 'Do you want to draw another card'
    } else if(sum === 21){
        message = 'black jack'
        hasBlackJack = true
        isAlive = true
} else if(sum > 21){
        message = 'By Bye 👋🏼'
        isAlive = false
}
    messageEl.textContent = message
}

startGame()
console.log(startGame)
console.log(isAlive)
console.log(message)