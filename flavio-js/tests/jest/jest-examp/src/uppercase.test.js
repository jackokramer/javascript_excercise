const uppercase= require('./uppercase')
const upperCase = require('./uppercase')

test(`uppercase 'test' to equal 'TEST'`, (done) => {
    uppercase('test', (str) => {
        expect(str).toBe('TEST')
        done()
    })
})

//promise upercase test
const upperCase = require('"./upperCase')
test(`uppercase 'test' to equal 'TEST'`, () => {
    return upperCase('test').then((str) => {except(str).toBe("TEST")
    })
})

//async await uppercase test
