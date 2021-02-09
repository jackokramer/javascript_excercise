// Adjacent Element Products

/**
Given an array of integers, find the pair of adjacent elementssthat has the largest product and return that product.
Example
For inputArray = [3,6,-2,-5,7,3] the output should be adjacentElementsProduct(inputArray) = 21
7 and three produce the largest product.
 */
function adjacentElementsProduct(nums) {
let largeProduct= nums[0] *nums[1];
for(let x = 0; nums.length>x; x++){
       const  adjacentProduct = nums[x]*nums[x+1];
    }
    if(largeProduct<adjacentProduct){
        largeProduct = adjacentProduct;
    }
    return largeProduct;
}

    /* const largestProd = nums[0]*nums[1];
 for(let x = 1; nums.length-1>x; x++){
     const nextProd = nums[x] * num[x+1];
     if(largestProd<nextProd){
         largestProd = nextProd;
     }
 }
*/


/**
 * TEST SUITE
 */

 describe('adjacentElementsProduct()', () => {
    it('returns largest product of adjacent values', () => {
        // arrange
        const nums = [3, 6, -2, -5, 7, 3];
        
        // act
        const result = adjacentElementsProduct(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(21);
    });
});