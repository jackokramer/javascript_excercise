function countVowelConsonant(str) {
  // write code here
 /* let count = 0;
  if(str === 'a', 'e','i', 'o', 'u'){
    count++
  } else {
    count + 2;
  }
  return count
  */

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const chars = str.split('')
  const total = chars.reduce((acc, char)=>{
    if(vowels.includes(char)){
      return acc+1;
    }
    return acc +2;
  }, 0)
  return total;
}

console.log(countVowelConsonant('sleep'));


/**
Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});