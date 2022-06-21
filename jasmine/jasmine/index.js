

// Test Suite
describe(`${User.name} Class`, () => {
    let model;

    beforeEach(()=>{
        model = new User();
        console.log('jack')
    })
    describe('default values', () => {
        fit('first name defaults to empty', () =>{
                //assert
                expect(service.firstName).toBe('')
            })
            it('last name defaults to empty', () =>{
                //assert
                expect(service.lastName).toBe('')
            })
            it('middle name defaults to empty', () =>{
                //assert
                expect(service.middleName).toBe(' ')
            })
    })
    describe('full name', () =>{
        beforeEach(() => {
            model = new User({firstName: 'Jack', lastName: 'Kramer'})
        })
        it('middleinital when middle name is defined with first and last', () =>{
            //arrange
            model.middleName = 'Quentin'
            //act
            const result =model.fullName
            //assert
            expect(result).toBe(`${model.firstName} ${model.middleName[0]} ${model.lastName}`)
        })
        it('when no middle name is defined just return first and last', () =>{
            //arrange
            model.middleName = ''

            //activity
            const result  = model.fullName
            //assert
            expect(result).toBe(`${model.firstName}${model.lastName}`)
        })
    })
})

//fdescribe runs it first and xdescribe skips it.
// these can be applied to it as well fit and xit


/* Unit Testing: Skipping and Focusing Challenge
*
*   1. Listen and hear the importance of what I am about to say.
*   2. Raise your right hand and say,
*       'I will be a quality developer that protects the code and my sanity.'
*   3. Type out below:
*   'I understand the value testing brings and will help to educate those about it.'
*/

/*
* Challenge Prompt Here
* ------------------------
*
*/