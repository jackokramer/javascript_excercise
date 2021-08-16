function linearFunc(arr){
    for(let x = 0; arr.length>x; x++){
        console.log(1000*100000)
    }
}

const arr = [1,2,3,4,5,6]
linearFunc(arr)

//constant doest scale with the input of time to return the same result Big O(n)

//O(n^2)

function square(n){
    for(let x = 0; x<n; x++){
        for(let z =0; z<n; z++) {
            console.log(z, x)
        }
    }
}

//square(4) // O(n^2) this case is equal to 16x16


//cubed O(n^3)
function cube(m){
    for(let v = 0; v<m; v++){
        for(let k = 0; k<m; k++){
            for(let p = 0; p<m; p++){
                console.log(v, p, k)
            }
        }
    }
}

//cube(3)


//O(log n)logorithms

function logFunc(n){
    if(n ===0) return 'Done'
    n = Math.floor(n/2);
    return logFunc(n)
}

logFunc(5)

// O(logn) non recursive

function logN(n){
    while(n>1){
        n = Math.floor(n/2)
    }
}

logN(8)

//binary search ordered array necessary for comprehension

const array = [1,2,3,4,5,6,7,8]
let start  = 0
let target = 100000
for(let p = 1; p<=1024; p++){
    array.push(p)
}

let end = array.length-1


function binarySearch(array, start, end, target){
    console.log(array.slice(start, end))
    if(start>end) return false
    let midIndex = Math.floor((start+end) /2)
    if(array[midIndex] === target) return true //elimate half of the array recursively

    if(arr[midIndex] > target) return binarySearch(array, start, midIndex-1, target)
    else return binarySearch(array, midIndex+1, end) // right of our mid

    //if(arr[midIndex] > target) return binarySearch(array, start, midIndex-1, target)
   // else return binarySearch(array, midIndex+1, end)
}

binarySearch(arr, start, end, target)


// ( n log n)

function nLogFunc(n){
    let q = n
    while(n>1){
        n = Math.floor(n/2);
        for(let b = 1; b<=q; b++){
            console.log(b)
        }
    }
}

//merge sort and o(logn) non
function mergeSort(array){ // 0(logn)
    if(array.length<2){
        return array // base case
    } // [1] no need to sort iy
    // [1,2,3] slice up until n therefore we don't need to use array.length-1
    let middleIndex = Math.floor(array.length/2)
    const leftArray = array.slice(0, middleIndex)
    const rightArray = array.slice(middleIndex, array.length)

    return merge( mergeSort(leftArray), mergeSort(right)) // 0(n)
}


function merge(leftArray, rightArray){
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex < leftArray.length && rightIndex < rightArray.length){
        if(leftArray[leftIndex] < rightArray[rightIndex]){
            result.push(leftArray[leftIndex])
            leftIndex+=1
        } else {
            result.push(rightArray[rightIndex])
            rightIndex+=1
        }
    }
    return result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex))
}

let array = [12, 15, 8 ,3 ,10, 22]

//O(logn)  = log 2 n

function recursiveFib(n){
    if(n ===0){
        return 0
    }
    if(n ===1){
        return 1
    }
    return fib(n-1)+fib(n-2)
}

// O(n!)

function factorial(n){
    if(n ===0){
        console.log('*********')
        return
    }
    for(let h = 0; h < n; h++){
        factorial(n-1)
    }
}

factorial(3) //O(3!)

//space complexity

function countDown(arr){
    if(n===0){
        return
    }
    return countDown(n-1)
}

//Common mistakes with Big O

function twoLoops(a){
    for(let i = 0; i<a; i++){
        // do something O(n)
    }
    for(let r = 0; r< a; r++){
        //do something O(n)
    }
}


function twoInputsAdd(a, b){
    for(let i = 0; i<a; i++){
        // do something O(n)
    }
    for(let r = 0; r< b; r++){
        //do something O(n)
    } // problem here are the two sepetate inputs to the function
}