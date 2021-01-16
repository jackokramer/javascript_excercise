// predict 1

/*var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

console.log(arr);
*/
// predict 2

/*
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

*/
//console.log(arr)

// predict 3

/*
//var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);
*/


/* 
Print Values and Sum

Print each array value and the sum so far
The expected output will be: 
*/


    let testArr = [6,3,5,1,2,4]
    let sum = 0;
    for(let x = 0; testArr.length>x; x++){
        sum +=testArr[x];
        console.log('val', testArr[x], 'sum',sum);
    }        

console.log(testArr);

// value * position 
/*
    1) Mutiple each value in the array by its position.
    2) expected output to be. [0,3,10,3,8,20]
*/

for(let z = 0; z<testArr.length; z++){
    testArr[z] = testArr[z]*z;
}
console.log(testArr);