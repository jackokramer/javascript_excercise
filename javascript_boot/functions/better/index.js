function convertTemp(celcius, decimalPlaces = 1){ //default function values - deafult paramenter used =1

    //celcius to farenhiet
    decimalPlaces = decimalPlaces || 1
    let farenhiet = celcius *1.8 +32
    return Number(farenhiet.toFixed(decimalPlaces))
}


console.log(convertTemp(7))
console.log(convertTemp(12))
console.log(convertTemp(14))




// arrow functions for ease of use strip away extraneous info

const username = "jack";

const capitalize = (name) => `${name.charAt(0).toUpperCase()}${name.slice(1)}`
 console.log(capitalize(username)) // no function key word and a fat arrow following the parameter name


 function greetUser(name, callback){
    return callback(capitalize(name));
 }

 const result = greetUser(username, (name) => `Hi there, ${name}`);

 console.log(result)


/**Challenge*/
// Challenge: Rewrite your first function from a previous challnge to be an arrow function. 
// Stretch goal: Rewrite counting down closure in arrow function form. 


// Challenge start 
const  splitBill = (amount, numPeople) =>`Each person needs to pay ${amount / numPeople}`

 console.log(splitBill(10, 2));
// console.log(splitBill(10, 4));
// console.log(splitBill(10, 5));


// Stretch goal start
const countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;
  return () => countFromNum -= step;
}

const countingDown = countdown(20, 2);

console.log(countingDown());
console.log(countingDown());

 /*
//function convertTemp(celcius, decimalPlaces =1) {
    //celcius to farenhiet
    //decimalPlaces = decimalPlaces || 1
    const farenhiet = celcius * 1.8 + 32;
    return Number(farenhiet.toFixed(decimalPlaces))
}


console.log(convertTemp(21, 0)); // to get an integer provide a zero but zero is a faulty value


 * SHORTER FUNCTIONS WITH ARROW FUNCTIONS


//=>

const username = 'jack';

const capitalize =  name =>  // you can drop the () for a single parameter
    //interpreted as the function body {} cannot have a return statement without {}
    `${name.charAt(0).toUpperCase()}${name.slice(1)}`;


console.log(capitalize(username));

//callback functions

function greetUser(name, callback) {
    return callback(capitalize(name));
}

const result = greetUser(username, name =>`hi there, ${name}!`); //function called after another functon
console.log(result);
//higher order function. calling one function after another

//**CHALLENGE  
// Challenge: Rewrite your first function from a previous challnge to be an arrow function. 
// Stretch goal: Rewrite counting down closure in arrow function form. 


// Challenge start 
const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`

console.log(splitBill(10, 2));
// console.log(splitBill(10, 4));
// console.log(splitBill(10, 5));


// Stretch goal start
const countdown = (startingNumber, step) => {let countFromNum = startingNumber + step;
  return () => countFromNum -= step;

}

const countingDown = countdown(20, 2);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
*/