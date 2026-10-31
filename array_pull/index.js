let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand(){
    let randomHand = Math.floor(Math.random()*3)
    return hands[randomHand]
}

console.log(getHand())