let count = 0;

let pointsOne = document.getElementById('points-one')
let pointsTwo = document.getElementById('points-two')

function getOnePlayerOne(){
    count +=1
    console.log(count)
    pointsOne.textContent = count
}

function getTwoPlayerOne(){
    count +=2
    console.log(count)
    pointsOne.textContent = count
}

function getThreePlayerOne(){
    count +=3
    console.log(count)
    pointsOne.textContent = count
}

// player 2
function getOnePlayerTwo(){
    count +=1
    console.log(count)
    pointsTwo.textContent = count
}

function getTwoPlayerTwo(){
    count +=2
    console.log(count)
    pointsTwo.textContent = count
}

function getThreePlayerTwo(){
    count +=3
    console.log(count)
    pointsTwo.textContent = count
}

function reset(){
    count = 0
    pointsOne.textContent = 0
    pointsTwo.textContent = 0
}