//  Unit Testing: Mocks

// Test Suite
describe(`${User.name} Class`, () => {
    let model
    let mockUserService

    beforeEach(() => {
        mockUserService ={
            lastId: null,
            user: {},
            getUserById(id){
                this.lastId = id;
                return this.user
            }
        }
        const data = { firstName: 'Jack', middleName: 'Quentin', lastName: 'Kramer', id: 17 };
        model = new User(data,mockUserService)
    })
    describe('getMyFullUserData', () => {
        it('gets user data by id',  async() => {
            // arrange
            mockUserService.lastId = null
            //act
            await model.getMyFullUserData()
            //assert
            expect(mockUserService.lastId).toBe(17)
        })

        it('gets full user data', async() => {
            //arange
            mockUserService.user = new User({
                    firstName: 'Jack',
                    middleName: 'Quentin',
                    lastName: 'Kramer',
                    id: 17
        })
        //act
        const result = await model.getMyFullUserData();

        //assert
        expect(result.id).toBe(17)
        expect(result.firstName).toBe('Jack')
        })
    })
})
