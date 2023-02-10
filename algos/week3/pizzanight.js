/* Pizza Night?
It's the weekend and you and your friends can't agree on
what to order for dinner, so you put it to a vote.

Write a function to find the food with the highest number of votes.

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with
how many votes it received.

Example input: {"🐈 cats": 19, "🐕 dogs": 17}
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
    "🍕 pizza": 3,
    "🌮 tacos": 10,
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    //initialize some variables to:
        // keep track of the current highest vote number.
    let highestVote = 0
    let wiiningItem = ""
    for(let food in obj){
        if(obj[food]> highestVote){
            highestVote = obj[food]
            wiiningItem = food
        }
    }
    // console.log(highestVote, wiiningItem)
    // let newObj = {}
    // let sum = 0
    // for(let x = 0; x<obj.length; x++){
    //     if(!newObj){
    //         sum += obj[x]
    //     } else {
    //         console.log(`already counted`)
    //     }
    // }
    // return newObj
    return `the winner is ${wiiningItem} with the ${highestVote}`
}

console.log(findTheWinner(gameNightFood));