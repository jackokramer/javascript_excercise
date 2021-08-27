/* Unit Testing: It Test Challenge
*
*   1. Write a unit test for lastName and middleName to test its default values.
*   2. Group all 3 unit tests with an appropriate describe.
*/

class User {
    firstName;
    lastName;
    middleName;

    constructor(data = {}){
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName || '';
    }
}


// Test Suite
describe(`${User.name} Class`, () =>{
    let model;
    beforeEach(()=>{
    model = new User()
})

    describe(`default values`, () =>{
    it('first name defaults to empty', () =>{
        //assert
        expect(model.firstName).toBe('');
    })
        it('last name defaults to empty', () =>{
        //assert
        expect(model.lastName).toBe('');
    })
        it('middle name defaults to empty', () =>{
        //assert
        expect(model.middleName).toBe('');
    })
    })// model setup
    describe('full name', () => {
        beforeEach(() => {
           model = new User({ firstName: 'Jack', lastName: 'Kramer' });
        });

        it('middle initial when middleName is defined with first and last', () => {
            // arrange
            model.middleName = 'Quentin';

            // act
            const result = model.fullName;

            // assert
            expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);
        });

        it('when no middle name return just first and last', () => {
           // arrange
           model.middleName = '';

           // act
           const result = model.fullName;

           // assert
           expect(result).toBe(`${model.firstName} ${model.lastName}`);
        });
    });
});