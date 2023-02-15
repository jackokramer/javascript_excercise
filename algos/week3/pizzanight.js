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
    // keep track of the winning item
    let wiiningItem = ""
    // for each option in the food object
    for(let food in obj){
        // is the current value higher than the value of highestvotes?
        if(obj[food]> highestVote){
            // yes the new vlaue of highestvvotes in the current value
            highestVote = obj[food]
            // winnningItem = the current property.
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
    //  return the string announcing the winner using winningItem and highestVote
    return `the winner is ${wiiningItem} with the ${highestVote}`
}

console.log(findTheWinner(gameNightFood));