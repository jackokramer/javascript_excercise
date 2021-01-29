/* Insert dashes
Transform a given sentence into a new one with dashes between each two consecutive letters.
Example:
for input = "aba caba" the output will be
"a-b-a c-a-ba"
hints
*join(), split()
*/

function insertDashes(arr) {
    // write code here
    const words = arr.split(' ')
    const dashedWords = words.map((word) =>{
        const chars = word.split('')
        return chars.join("-")
    })
    /*for(let x = 0; x < arr.length; x++){
        if(arr[x]*/
    return dashedWords.join(' ')
        }




/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";

        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});