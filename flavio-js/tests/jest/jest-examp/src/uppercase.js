// callbacks done the right way
//upercase.js

function uppercase(str, callback){
    callback(str.toUpperCase());
}
module.exports= uppercase;


//promised version

const upperCase = (str)=>{
    return new Promise((resolve, reject)=>{
        if(!str){
            reject('Empty string or not a string')
            return
        }
        resolve(str.toUpperCase())
    })
}

module.exports = upperCase

//async await uppercase test

const uppercAse = require('./uppercase')

test(`uppercase 'test to eqaual 'TEST`, async () =>{
    const str = await uppercAse('test')
    expect(str).toBe("TEST")
})