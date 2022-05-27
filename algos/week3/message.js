/**************
 * secret - creates closures with secret messages
 *
 */

//secret(msg:String)=>getSecret()=>msg:String
const secret = (msg)=>() =>msg

test('secret', assert=>{
    const msg = 'secret() should return a function that returns the passed secret.'

    const theSecret = 'closures are easy'
    const mySecret = secret(theSecret)

    const acutal = mySecret()
    const expected = theSecret

    assert.equal(acutal, expected, msg)
    assert.end()
})