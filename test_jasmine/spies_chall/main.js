/*  Unit Testing: Spies Challenge
*
*   1. Use a spy and test the method getCodeName() fully
*   2. You will need to use spyOn and toHaveBeenCalledWith()
*   3. HINT: you will need to chain the spy
*    example: spyOn(object, 'key').and.returnValue(value)
*/
// Test Suite
describe(`${User.name} Class`, () => {
    let model;
    beforeEach(() => {
        model = new User();
    });

    describe('say my name', () => {
        it('is coding god when confirmed', () => {
            //arrange
            // model.firstName='Jack'
            // model.lastName='Kramer'
            spyOn(window, "confirm").and.returnValue(true)

            //act
            const result= model.getCodeName()
            //assert
            expect(result).toBe("is TESTING GOD!")
        })
        it('is a scrub when not doing testing', () => {
            //arrange

            spyOn(window, "confirm").and.returnValue(false)

            //act
            const result= model.getCodeName()
            //assert
            expect(result).toBe(`'s a scrub skipping tests in his best friend's ride!`)
        })
         it('asks if a user is a testing god', () => {
            //arrange

            spyOn(window, "confirm").and.returnValue(true)

            //act
            const result= model.getCodeName()
            //assert
            expect(window.confirm).toHaveBeenCalledWith(`Are you a testing god?`)
        })
    });
});