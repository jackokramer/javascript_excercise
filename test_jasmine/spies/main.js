/* Unit Testing: It Test Challenge
*
*   1. Write a unit test for lastName and middleName to test its default values.
*   2. Group all 3 unit tests with an appropriate describe.
*/

/*  Unit Testing: Spies Challenge
*
*   1. Use a spy and test the method getCodeName() fully
*   2. You will need to use spyOn and toHaveBeenCalledWith()
*   3. HINT: you will need to chain the spy
*    example: spyOn(object, 'key').and.returnValue(value)
*/


// Test Suite
describe(`${User.name} Class`, () =>{
    let model;
    beforeEach(()=>{
    model = new User()
})

    describe(`say my name`, () =>{
        it('alerts the full name of user', () =>{
            //arrange
            model.firstName = "Jack"
            model.lastName = "Kramer"
            spyOn(window, 'alert')

            //act
            model.sayMyName();
            //assert
            expect(window.alert).toHaveBeenCalled()
            expect(window.alert).toHaveBeenCalledWith('Jack Kramer')
    })
})
})