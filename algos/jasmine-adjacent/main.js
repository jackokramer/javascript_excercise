function adjacentElementsProduct(nums) {
    let nums = []
    for(let x = 0; x<nums.length; x++) {
        if(nums[x]){//come up with a check factore that looks at both values of the array and checks if they're valid

        }
    }
}



/**
* Test Suite
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