// javascript
const grid = document.querySelector(".grid")
const startBtn = document.getElementById('start')
const scoreBoard = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1
let width = 10

function createGrid(){
    //create 100 of these elements with a for loop
    for(let x = 0; x< 100; x++){
    const square = document.createElement('div')
        // create element
    square.classList.add('square')
    //put the element into our grid
    grid.appendChild(square)
    // push it  into a new sqaures array
    squares.push(square)
    }
}

createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

function moveSnake (){
    if(
        (currentSnake[0] + width >= 100 && direction === 10) ||// if snake has hit bottom
        (currentSnake[0] % width === 9 && direction ===1) ||// if snake has hit right
        (currentSnake[0] % width === 0 && width ===-1) ||// if snake has hit left
        (currentSnake[0] -  width< 0 && direction ===-10)||// if snake has hit top
        squares[currentSnake[0]+direction].classList.contains('snake')
    )
    return clearInterval(timerId)




    //remove last element from out current snake array
    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    /*let lastEl = squares[squares.length - 1]
    lastEl.pop(squares).style.display = 'none' */
    //unshift() adds an element to the front of an arrays
    currentSnake.unshift(currentSnake[0]+direction)
    squares[currentSnake[0]].classList.add('snake')
}
moveSnake()

const timerId = setInterval(moveSnake, 1000)
//clearInterval(timerId)

//keycode 39 = right arrow
//keycode 38 = up arrow
//keycode 37 = left arrow
// 40 is for the down arrow

function control(e){
    if(e.keyCode === 39){
        console.log('right arrow pressed')
        direction =1
    } else if(e.keyCode === 38){
        console.log('up arrow pressed')
        direction =-width
    } else if(e.keyCode === 37){
        console.log('left arrow pressed')
        direction =-1
    } else if(e.keyCode === 40){
        console.log('down arrow pressed')
        direction = +width
    }
}
document.addEventListener('keyup', control)

control()