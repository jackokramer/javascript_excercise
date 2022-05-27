// Generic Partial Application Function

const partialApply = (fn, ...fixedArgs)=>{
    return function(...remainingArgs){
        return fn.apply(this, fixedArgs.concat(remainingArgs));
    }
}

test('add10', assert =>{
    const msg = `partialApply() should partially apply functions`

    const add = (a, b) => a+b

    const add10 = partialApply(add, 10)
    const actual = add10(5)
    const expected = 15

    assert.equal(actual, expected, msg)
})