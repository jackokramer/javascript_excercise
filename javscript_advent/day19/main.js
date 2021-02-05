function differentSymbolsNaive(str) {
    //  write code here.
    /** Solution 1 
    const uniqueChars = [];
    const chars = str.split("");

    chars.ForEach((char)=>{
        if(!uniqueChars.includes(char)){
            uniqueChars.push(char);
        }
    })
    return uniqueChars.length
    */
   /** Solution 2*/
   const chars = str.split("");
   return new Set(chars).size;
}



/**
* Test Suite 
*/
describe('differentSymbolsNaive()', () => {
    it('returns count of unique characters', () => {
        // arrange
        const str = 'cabca';
        
        // act
        const result = differentSymbolsNaive(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
});