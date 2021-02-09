/**EXTRACT EACH NTH
Given an array of integers extract each nth element from it and
for inputArry =[1,2,3,4,5,6,7] and n = 2
the output would be extractEachElement(inputArry=([1,2,3,4,5,6,7],k) = [1,3,4,5,6,7]
 */


 /* My solution
function extractEachKth(arr, n) {
    for(let x = 0; arr.length>x; x++){
        if(arr[x]=== n){
            arr.filter(n)
        }
    }
    return arr;
}
CORRECT SOLUTION
*/

function extractEachKth(nums, index){
    return nums.filter((value, x) => (x+1) % index!==0);
}


console.log(extractEachKth([1,2,3,4,5,6,7,8], 6))


/**
* Test Suite 
*/
describe('extractEachKth()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const index = 3;
        
        // act
        const result = extractEachKth(nums, index);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([1, 2, 4, 5, 7, 8, 10]);
    });
})