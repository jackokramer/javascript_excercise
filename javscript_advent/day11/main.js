//Sum Odd Fibnoacci Numbers

/*
Give a positive integer num, return the sum of all odd Fibnoacci numbers that are less than or equal to num.
The first two number of the fibonacc sequence are 1 and 1. Ever additional number in the sequence is the sumof the two previous numbers. The first six numbers of the fibonacc sequence are 1,1,2,3,5 and 8.

For example, sumFib(10) should return 10 because all odd fibonacci numbers are less than or equal to 10 are 1,1,3 and 5.

Example: function(
    sumOddFiboncciNums(10) should return 10.
    sumOddFiboncciNums(1000) should return 11785.
    sumOddFiboncciNums(4000000) should return 4613732.
)
*/

function sumOddFiboncciNums(arr){
let sum  = 0;
let prev = 0;
let current = 1;
while(current <= num){
    if(arr[x]/2 ===1){
    sum+=current
    }
}
const nextVal = current;
    prev = current;
    current = nextVal
}

describe('sumOddFibonacciNumbers()', () => {
    it('returns sum of all odd Fibonnci numbers', () => {
        // arrange
        const num = 10;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(10);
    });

    it('returns sum of all odd Fibonnci numbers 2nd example', () => {
        // arrange
        const num = 1000;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(1785);
    });
});
//Non recursive Fibnoacci
// num  =5
function fibNacci(num){
    if(num<3) return 1;

    let prev = 1; //1//2
    let current = 1; //1//3
    // x = 3
    for(let x = 2; x<num; x++){
        const next = prev + current; // 1+1
        prev = current; // 1
        current = next; // 2
    }
    return current;
}

console.log(fibNacci(2000))

// recursive fibonacci

function recursiveFib(nums){
    if(nums<3) return 1;
    return recursiveFib(nums-1)+ recursiveFib(nums-2);
}

console.log(recursiveFib(5 ))