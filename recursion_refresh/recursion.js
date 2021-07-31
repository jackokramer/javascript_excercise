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


function recursivebinary(n, arr){
    let mid = Math.floor(arr.length/2);
    if(arr.longth === 1 && arr[0] != n){
        return false;
    }
    if(n===arr[mid]){
        return true
    } else if(n<arr[mid]){
        // do soemthing
        return recursivebinary(n, arr.slice(0, mid))
    } else if(n>arr[mid]){
        //do something with it
        return recursivebinary(n, arr.slice(mid))
    }
}

// merge sort Algorithms

const _mergeArray = (a, b) =>{
    const c = []
    while(a.length && b.length){
        c.push(a[0]>b[0]? b.shift(): a.shift())
    }
    // if we stull have values add them to the end of 'c'
    while(a.length){
        c.push(a.shift())
    }
    while (b.length){
        c.push(b.shift())
    }
    return c
}
    // let start = x[0]
    // let end  = data.length(x-1)
    // let mid = data.length(end)/2
    const mergeSort = (a) => {
        if(a.length<2) return a
        const middle = MAth.floor(a.length/2)
        const a_l = a.slice(0, middle)
        const a_r = a.slice(middle, a.length)
        const sorted_l = mergeSort(a_l)
        const sorted_r = mergeSort(a_r)
        return _mergeArray(sorted_l, sorted_r)

    }
