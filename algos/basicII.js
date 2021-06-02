//Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggieSize(arr){
    for(let x = 0; arr.length>x; x++){
        if(arr[x]>0){
            arr[x] = 'biggie smalls'
        }
}
    return arr
}

//Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printLow(arr){
    let low = arr[0] // added variables to log them  and return them properly.
    let high = arr.length-1
    console.log(low)
    return high
    }

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printOne(arr){
    let second = arr.length-2
        console.log(second)
    for(let x = 0; arr.length>x; x++){
        if(arr[x]%2===1){
            return arr
        }
    }
}

//Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVis(arr){
    let double  = 0;
    for(let x = 0; arr.length>x; x++){
       double = arr[x]*2
    }
    return double
}

//Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr){
    let last = arr.length-1 // change post to last and set it up as the last index of the array.
    for(let x = 0; arr.length>x; x++){
        if(arr[x]>0){
            let count = arr[x]
            count = last
        }
        return arr
    }
}

//Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensNOdds(arr){
    let odd = 0
    let even = 0
    for(let x = 0; arr.length>x; x++){
        if(arr[x]===1){
            odd++
            even = 0
        } else if( arr[x]===0){
            even++
            odd = 0
        }
        if(odd === 3){
            console.log(`that's odd`)
            odd = 0
        } else if(even === 3){
            console.log(`even more so`)
            even = 0
        }

    return arr
}
}

//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrementInSec(arr){
    for(let x = 0; arr.length>x; x++){
        if(arr[x] !== 0){
            console.log(arr[x]);
        }
        return arr
    }

}

//Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function prevLength(arr){
    for(let x = arr.length - 1; x >= 0; x--){
         arr[x] = arr[x-1].length
        }
        return arr
    }

    console.log(prevLength(["hello", "dojo", "awesome"]))

// Add Seven Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    let newArr = []
    for(let x = 0; arr.length>x; x++){
        newArr.push(arr[x]+7)
    }
    return newArr
}

//Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reveresArr(){
    //let temp = arr[0]
    for(let x = 0; arr.length/2>x; x++){
        let temp = arr[x]
        arr[x] = arr[arr.length -1 -x]
        arr[arr.length-1-x] = temp
    }
    return arr
}