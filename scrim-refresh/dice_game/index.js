// Create variables for the game state
let playerOne = document.getElementById("player1")
let platerTwo = document.getElementById("player2")
let playerOneScore =  0
let playerTwoScore = 0
let player1Turn = true


let rollBtn = document.getElementById('rollBtn')
let resetBtn = document.getElementById('resetBtn')

let player1Scoreboard = document.getElementById('player1Scoreboard')
let player2Scoreboard = document.getElementById('player2Scoreboard')
let messageFront = document.getElementById('message')

let player1Dice = document.getElementById('player1Dice')

let player2Dice = document.getElementById('player2Dice')

console.log(messageFront)

rollBtn.addEventListener('click', function(){
    const roll = Math.floor(Math.random() *6)+1
    console.log(roll)
    return roll
})