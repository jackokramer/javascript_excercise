//Unit testing: Spies on
//test suite:

describe(`${User.name} Class`, () =>{
    let model;

    beforeEach(() =>{
        model = new User()
    })

    describe(`say my name`, ()=>{
        it(`alerts the full name of users`, ()=>{
            //arrange
            model.firstName = ''
            model.lastName = ' Kramer'
            spyOnProperty(window, 'alert')
            //act
            model.sayMyName();

            //assert
            expect(window.alert).toHaveBeenCalled()
            expect(window.alert).toHaveBeenCalledWith('Jack Kramer')
        })
    })
})