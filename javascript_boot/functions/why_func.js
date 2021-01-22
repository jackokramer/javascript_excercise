const user1 = "Reed";
const user2 = "Doug";

//const message = `User (user) says: (text)`;
const text =  `hello ${user2}`

function sentText(message){
    return `${user1} says: '${text}'`
}

//console.log(sentText())

// console.log('hello world');
// console.log('hello world');

// input -> performs an action
// input -> returns some data
function echo(input, greeting) {
 `${greeting} ${input}`;  
}

const result = echo(42, "Hi");
//console.log(result);

//CHALLENGE -> Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 

// Write your code below:

function splitBill(price, nums){
    let share = price / nums
    return `Every person owes ${share} each`
}

console.log(splitBill(15,7))


// Testing your solution
console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))
