const { max } = require("date-fns");

//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function onetoTwofifty(){
    let arr = []
    for(let x = 1; x<=255; x++ ){
        arr.push(x)
    }
}

onetoTwofifty();

//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function sumEvenNum(){
    let sum = 0
    for(let x = 1; x<=1000; x++){
        if(x%2===1){
            sum+=x
        }
    }
}

//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sumOddFive(){
    let sum = 0
    for(let x = 1; x<=5000; x++){
        if(x%2===1){
            sum+=x
        }
    }
}

//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function iterArr(arr){
    let sum = 0
    for(let z = 0; z < arr.length; z++){
        sum+=arr[z]
    }
    return sum
}

//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr){
    let max = arr[0];
    for(let x = 0; x< arr.length; x++){
        if(arr[x]>max){
            max = arr[x]
        }
    }
    return max
}

//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAvg(arr){
    let sum  = 0
    for(let x = 0; arr.length>x; x++){
        sum += arr[x]
    }
    return sum/arr.length
}

//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function arrOdd(){
    let arr = []
    for(let x = 0; 50>x; x++){
        if(x%2===1){
            arr.push(x);
        }
    }
    return arr;
}
//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr, Y){
    let count = 0;
    for(let x= 0; x < arr.length; x++){
        if(arr[x]>Y){
            count++
        }
        return count
    }
}
console.log(greaterThanY([1,3,4,5], 3))

//Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squaredD(arr){
    for(let x = 0; arr.length>x; x++){
        arr[x] = arr[x]*arr[x]
    }
    return arr
}

//TypeError: Cannot read property 'length' of undefined

//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr){
    let max = arr[0]
    let min = arr[0]
    let sum = 0
    for(let x = 0; arr.length>x; x++){
        if(arr[x]>max){
            max = arr[x]
        } else if(arr[x]<min){
            arr[x] = min
        }
        sum = sum + arr[x]
    }
    let avg = sum /arr.length
    let arrNew = [min, max, avg]
    return arrNew;
}

//Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapVals(arr){
    let temp = arr[0]
    arr[0] = arr[arr.length-1]
    arr[arr.length-1] = temp
    return arr
}

//Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numToString(arr){
    for(let x = 0; arr.length>x; x++){
        if(arr[x]<0){
            arr[x] = 'Dojo'
        }
    }
    return arr
}
