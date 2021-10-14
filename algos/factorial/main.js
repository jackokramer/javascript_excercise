function factorialNumber(num) {
    if(num<=1){
        return 1
    }
    return num * factorialNumber(num-1)
    /**
     * let mult = 1
     * for(let x= 0; x < num; x++){
     *      mult*=x
     * }
     * return mult
     */
}



/**
* Test Suite
*/
describe('factorialNumber()', () => {
    it('returns factorial of number param', () => {
        // arrange
        const num = 5;

        // act
        const result = factorialNumber(num);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(120);
    });
});