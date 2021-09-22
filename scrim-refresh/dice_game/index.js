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

function showDisplay(){
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'block'
}


rollBtn.addEventListener('click', function(){
    const roll = Math.floor(Math.random() *6)+1
    // 1. Update the scores for each player
    // 2. Display the scores in their scoreboards
    console.log(roll)
    if(player1Turn) {
        playerOneScore += roll
        player1Dice.textContent = roll
        console.log(`player 1 rolled a ${roll}`)
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        player1Scoreboard.textContent = playerOneScore
        message.textContent = "Player 2 turn"
        //player1Turn = false this doesn't work unfortunately need to add whats on line 46 player1turn = !player1Turn
} else {
    playerTwoScore += roll
    player2Dice.textContent = roll
    console.log(`player 2 rolled a ${roll}`)
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
    player2Scoreboard.textContent = playerTwoScore

    message.textContent = "Player 1 turn"

}
    // 1. Check if a player has won. If so, change the message to "Player X has won!"
    if(playerOneScore >= 20){
        message.textContent = "Player 1 has won! 🤖"
        showDisplay()
        //reset()
    } else if(playerTwoScore >= 20){
        message.textContent = "Player 2 has won! 👻"
        showDisplay()
        //reset()
    }
    // 2. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block
player1Turn = !player1Turn
})


resetBtn.addEventListener('click', function(){
   reset()
})

function reset(){
    message.textContent = "Player 1 turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    playerOneScore = 0
    playerTwoScore = 0
    player1Turn = true
    resetBtn.style.display = 'none'
    rollBtn.style.display = 'block'
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
}