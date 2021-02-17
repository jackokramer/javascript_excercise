let numArray = [1,2,3,4,5];

console.log(numArray.includes(0));// checks to see if the number is in the array and assigns a boolean to it.

/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

/*
const addedList = [...listIngredients,
'chocolate',
'we got the choclate']
*/
if(listIngredients.includes('chocolate')){
    console.log('We can make a cholocate cake')
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate")
}
console.log(listIngredients.includes('chocolate'), )