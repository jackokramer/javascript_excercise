/** Maximum Adjancent Difference between
 * Given an array of integers find the maximum absolute difference between any two of its adjacent elements.
 * Example for inputArray=[2,4,1,0], the output should be arrayMaximalAdjacent Difference(inputArray)=3
 *  * Example for inputArray=[2,9,1,0], the output should be arrayMaximalAdjacent Difference(inputArray)=8
*/

//hint Math.abs()

function arrayMaximalAdjacentDifference(nums) {
    /*let previous = nums.length-2;
    for(let x =0 ; nums.length>x; x++){
        if(nums[x]>nums){
            Math.abs(nums[x]-nums);
        }
        if(nums[x] === previous){
            let diff = nums[nums.length-1] - previous;
        }
    }
    return diff;
    */
   let maxDiff = 0;
       for(let x =0 ; nums.length-1>x; x++){
        const absoluteDiff = Math.abs(nums[x]-nums[x+1])
        if(maxDiff<absoluteDiff){
            maxDiff = absoluteDiff;
        }
    }
    return maxDiff;
}



/**
* Test Suite 
*/
describe('arrayMaximalAdjacentDifference()', () => {
    it('returns largest difference between adjacent values', () => {
        // arrange
        const nums = [2, 4, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(3);
    });

    it('returns largest difference between adjacent values example 2', () => {
        // arrange
        const nums = [2, 9, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});