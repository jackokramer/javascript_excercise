let count = 0
const scoreBoard = document.getElementById('score-el')
const homeOnePoint = document.getElementById('home-add1')
const homeTwoPoint = document.getElementById('home-add2')
const homeThreePoint = document.getElementById('home-add3')

homeOnePoint.addEventListener('click',()=>{
    count++
    scoreBoard.textContent = count
})

homeTwoPoint.addEventListener('click',()=>{
    count+=2
    scoreBoard.textContent = count
})

homeThreePoint.addEventListener('click',()=>{
    count+=3
    scoreBoard.textContent = count
})

//Away team setup
const awayScoreBoard = document.getElementById('away-score-el')
const awayOnePoint = document.getElementById('away-add1')
const awayTwoPoint = document.getElementById('away-add2')
const awayThreePoint = document.getElementById('away-add3')

awayOnePoint.addEventListener('click',()=>{
    count++
    awayScoreBoard.textContent = count
})

awayTwoPoint.addEventListener('click',()=>{
    count+=2
    awayScoreBoard.textContent = count
})

awayThreePoint.addEventListener('click',()=>{
    count+=3
    awayScoreBoard.textContent = count
})