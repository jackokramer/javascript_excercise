// Discount Calculator
// Create a function that takes two arguments: the original price and the dicount percentage (both as integers) and returns the final price as the discount.
// Notes your answer should be rounded to the two decimal places
// Examples:
// discountCalculator(1500, 50) => 750
// discountCalculator(89, 20) => 71.2
// discountCalculator(100, 75) => 25

const discount=(original, percent)=>{
    console.log(original-(original*(percent*.01)))
}

discount(89,20)