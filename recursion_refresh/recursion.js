function getPositionInline(person){
    if(person.nextInLine <= 0){
        return 0
    }
    return getPositionInline+1
}

function reviseEssay(essay){
    read(essay)
    get_feedback(essay)
    apply_changes(essay)
    revise(essay)
}

// recursion is a just a method that calls itself

function recurSive(someValue){
    if(someValue == 0){
        return 0
    }
    else return recurSive(someValue+1)
}

//Exercise
// the simple engineer : input
// output: the reversed version of it
function reverseString(string){
    if(string == ''){
        return  ''
    }
    return reverseString(string.subtr(1) + string.charAt(0))
}

//Pallindrome

function palinDrome(string){
    if(string.length <= 1 ){
        return true
    }
    let firstletter = string;
    let lastletter = string[string.length - 1]

    if(firstletter === lastletter){
        let stringWithoutFirstNLast = string.substring(1, string.length-1)

    return palinDrome(stringWithoutFirstNLast)
  } else {
    return false;
    }
}

//decimal to binary format
const decimalToBinary = (num) =>{
    if(num>=1){
        //return 1
        if(num %2 ){
            return decimalToBinary((num -1)/2)+1
        } else {
            return decimalToBinary(num/2)+0
        }
    } else {
        return ''
    }
}

//factorial recursion

const factorialRecursion = (num) =>{
    if(num<=1){
        return 1
    }
    return num * factorialRecursion(num-1)
}

//Binary Search for
//function binarySearch( A, x, left, right, ){
//    if(left > right){
//        return -1
//    }
    // let mid = (left + right)/2
    // } elseif(x === mid){
        // return x
    // }

//recursion of Fibonacci

function fiboNacci (num){
    let a =1
    let b= 0
    let temp
    while(num>=0){
        temp = a;
        a = a+b
        b = temp;
        num --
    }
    return b
}

console.log(fiboNacci(10))

function recursiveFiboNacci(num){
    if(num<=1) return 1

    return recursiveFiboNacci(num-1) + recursiveFiboNacci(num-2)
}

console.log(recursiveFiboNacci(9))


function recursivebinary(arr){

}