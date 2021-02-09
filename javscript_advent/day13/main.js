function avoidObstacles(nums) {
    //  write code here.

    let largestNum = nums.sort(a,b => a-b)[nums.length - 1];
    for(let x = 1; largestNum>x; x++){
        if(nums.every(value => value%x !==0)){
            return x
        }    
    }
    /*
    let largestNum = nums.sort((a,b)=> a-b[nums.length - 1])
    for(let x = 1; largestNum-1 >=x; x++){
        if(nums.every((value)=> value%x !== 0)){
            return x;
        }
    }*/
}



/**
* Test Suite 
*/
describe('avoidObstacles()', () => {
    it('returns minimal number of jumps in between numbers', () => {
        // arrange
        const nums = [5, 3, 6, 7, 9];
        
        // act
        const result = avoidObstacles(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(4);
    });
});