/* Unit Testing: Final Challenge
*
* 1. Add to One of Your Existing Projects
* 2. My GitHub repo to write tests for simple methods 
* - https://github.com/PizzaPokerGuy/100AlgorithmsChallenge
*/

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        model = new User();
    });

    describe('additional matchers testing area', () => {
        it('has my first name', () => {
            // arrange
            const firstName = 'Dylan';
            const lastName = 'Israel';
            
            // act
            model = new User({firstName, lastName});
            
            // assert
            expect(model.fullName).toMatch(/Dylan/);
        });
    });
});