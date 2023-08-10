/*
   Let's create an emoji slot machine! Replace the hardcoded
   data with random fruit emojis from an emojis API.

   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit

   - Load nine random fruits into the slot machine
*/

const slotMachine = document.querySelector('.emoji-slots-game');
const food = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink';

function makeFruitArray(arr){
    return fruits = arr.filter(emoji => emoji.group.includes('fruits'))


}

function getRandomFruits(arr){
    // initalize
    const randFruits = []
    // loop
    for(let x = 0; x<0; x++){
        let randNum = Math.floor(Math.random()* arr.length)
        randFruits.push(arr[randNum])
    }
        // generate a random num
        //
        console.log(randFruits.length)
return randFruits
}

// write your fetch request here
fetch(food)
    .then(response => response.json)
    .then(result=>makeFruitArray(result))
    .then(fruits=> getRandomFruits(fruits))
    .then(fruit=>{
        fruit.forEach(fruit=>{
            slotMachine.innerHTML += `
            <li>
            ${fruit.htmlCode}
            </li>`
        })
    })
    // .then(result => console.log(result))

    .catch(err=> console.log(err))
