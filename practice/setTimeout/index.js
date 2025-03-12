function logAnswer(answer,points){
    console.log(`the answer is ${answer} and you got ${points}!`)
}

console.log(`what is the capital of Peru?`)

const questionTimer = setTimeout(logAnswer, 3000, `Lima`, 10)

document.getElementById('stop').addEventListener('click', ()=>{
    clearTimeout(questionTimer)
    console.log('canceling')
})