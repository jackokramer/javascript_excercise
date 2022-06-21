/* Unit Testing: Additional Matchers Challenge
*
* 1. Look through the docs and write a test for a matcher we haven't discussed yet
* - https://jasmine.github.io/api/edge/matchers
*/

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
        it('my first name', ()=>{
            //arrange
            let firstName = 'Jock'
            let lastName = 'Kramer'
            //act
            model = new User({firstName, lastName})
            //assertion
            expect(model.fullName).toMatch(/Jack/)
        })
    });
});