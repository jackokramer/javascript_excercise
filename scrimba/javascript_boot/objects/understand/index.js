//primitative include the following five types of
/**
 * undefined, boolean, null, number, string, symbol
 */

 //primitive-passed by value. Objects are data structures to hold any number of primitives

 const nums = 42;
 const anotherNum = 42;
 //console.log(nums === anotherNum)

 //objects -pased by reference 
 const obj = {};
 const anotherObj = obj;
 anotherObj.a = 1;
 //console.log('obj', obj);
 //console.log('anotherobj', anotherObj) //they are the same
 //console.log(obj === anotherObj) // its a reference and not the same object itself. primitvie values are immutable


//because of javascript not passing the copy of the object but just a refernce to the original one we updated both variables at once

const color = 'green';
const hexCode = "#0f0";

const colors ={
    'yellow Color': "#ff0",
    blue: "#f00",
    orange: "#f60",
    [color]: hexCode
}

function getColor(key) {
    return colors[key];
}

//delete colors['yellow Color']
delete colors.blue
console.log(colors);

colors.red = "#f00";
console.log(colors);
console.log(colors['yellow Color']) //use this key and it allows you to access keys dynamically

console.log(getColor('blue'))