function encloseInBrackets(str) {
    const solution1 = '()' + str + ")"
    const solution2 = `(${str})`
    const solution3 = '('.concat(str, ')')

    return solution2
}



/**
* Test Suite
*/
describe('encloseInBrackets()', () => {
    it('adds () around a string', () => {
        // arrange
        const str = "Yo";

        // act
        const result = encloseInBrackets(str);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe('(Yo)');
    });
});