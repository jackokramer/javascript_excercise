// # Given an integer x, compute and return the square root of x.
// # If the output would not return a real number, return -1.
// # Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

// # Example 1:

// # Input: x = 4
// # Output: 2

// # Example 2:
// # Input: x = 8
// # Output: 2.828...

// # Example 3:
// # Input: x = -4
// # Output: -1


function squareD(num){  
for(let x = 0; x*x<num; x++){// x
// does the current number * current number (y)equal the target number (x)
  if( x*x===num){
 return x
  } 
}
return num
  }
  
  console.log(squareD(9))


//leet code.

