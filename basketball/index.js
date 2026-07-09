let count1 = 0
let count2 = 0


countOneEl = document.getElementById('scoreOne')
countTwoEl = document.getElementById('scoreTwo')

//player1
playerOneAddOne= document.getElementById('add1Player1')
playerOneAddTwo= document.getElementById('add2Player1')
playerOneAddThree= document.getElementById('add3Player1')



playerOneAddOne.addEventListener('click', ()=>{
    count1++
    console.log(count1)
    countOneEl.textContent = count1
})

playerOneAddTwo.addEventListener('click', ()=>{
    count1+=2
    console.log(count1)
    countOneEl.textContent = count1
})

playerOneAddThree.addEventListener('click', ()=>{
    count1+=3
    console.log(count1)
    countOneEl.textContent = count1
})

// End Player1


// player 2
playerTwoAddOne= document.getElementById('add1Player2')
playerTwoAddTwo= document.getElementById('add2Player2')
playerTwoAddThree= document.getElementById('add3Player2')



playerTwoAddOne.addEventListener('click', ()=>{
    count2++
    console.log(count2)
    countTwoEl.textContent = count2
})

playerTwoAddTwo.addEventListener('click', ()=>{
    count2+=2
    console.log(count2)
    countTwoEl.textContent = count2
})

playerTwoAddThree.addEventListener('click', ()=>{
    count2+=3
    console.log(count2)
    countTwoEl.textContent = count2
})