const numbers = [1,2,3,4,5]

/*
const doubledNum = numbers.reduce((acc, num)=>{
    acc.push(num*2) 
    return acc
}, []) // callback function for reduce is called the reducer

console.log('doubled numbers', doubledNum)// map did the work here.
const doubledNumbers = numbers.map(num=> num*2);
console.log('numbers', numbers)

console.log('.map() way to complete it', doubledNumbers)*/

const greaterNumbers = numbers.reduce((acc, num)=> {
    if(num>3) {
    acc.push(num);
    }
    return acc
}, [])

//same thing can be done with a filter method

const greaterNumber = numbers.filter(num=>num>3);
console.log(greaterNumbers)

console.log(greaterNumber)

// real power of reducer
// the majority of array method can be thought of as reductions