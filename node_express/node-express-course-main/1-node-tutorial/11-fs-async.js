const {readFile, writeFile} = require('fs');
//const fs = require('fs'); DIFFERENT WAY TO ACCESS THE METHOD

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return `you've encountered an error ${err}`
    }
    const first = result
readFile('./content/second.txt', 'utf8', (err,result) => {
    if(err){
        console.log(err)
        return
        }
        const second = result
writeFile(
    './content/result-async.txt',
    `Here is the result : ${first}, ${second}`,
    (err,result) => {
        if(err){
            console.log(err)
            return
        }
        console.log('done with this task')
    })
    })
})
console.log('starting next task')