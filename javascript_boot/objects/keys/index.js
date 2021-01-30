const blue ="#00f";
const orange ="#f60";

// group multiple values together - objects
// objects are like file cabinets
 const colors = {
    blue: blue,// keys can only be strings while values can be other objects, strings, datatypes
    orange: "#f60", yellow: '#ff0'
    //objectName.key
}
const obj = {
    sayHi(){
        console.log("Hi")
    }
//objectName.methodName()
}
//console.log(colors.yellow)

//console.log(obj)

//methods are properties just like any other key we have

//obejcts are perfect for grouping together and using static information

// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console


const restaurant = 'viva primavera'
const bar = 'durty nellys'
const cafe = 'wooden coffees'

const favouritePlaces = {
    bar: bar,
    restaurant: restaurant,
    cafe: cafe,
    greeting() {
        console.log(`hello from ${bar}`)
    }
}

console.log(favouritePlaces.restaurant)
console.log(favouritePlaces.greeting())