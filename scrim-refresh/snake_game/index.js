// javascript
const grid = document.querySelector(".grid")
const startBtn = document.getElementById('start')
const scoreBoard = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1
let width = 10
let appleIndex = 0
let score = 0
let speed = 0.9
let intervalTime = 1000
let timerId = 0


function createGrid(){
    //create 100 of these elements with a for loop
    for(let x = 0; x< width*width; x++){
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

function startGame(){
    //remove the snake for the grid and apple
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    //clearInterval(timerId)
    currentSnake = [2,1,0]
    //generate apple -done
    score =0
    // reapply score to the browser
    scoreBoard.textContent = score

    direction = 1
    intervalTime = 1000
    generateApple()
    //read the class of snake to our current Snake
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    const timerId = setInterval(moveSnake, 1000)
}

function moveSnake (){
    if(
        (currentSnake[0] + width >= width*width && direction === width) ||// if snake has hit bottom
        (currentSnake[0] % width === width-1 && direction ===1) ||// if snake has hit right
        (currentSnake[0] % width === 0 && width ===-1) ||// if snake has hit left
        (currentSnake[0] -  width< 0 && direction === -width)||// if snake has hit top
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

        /// deal with snake head getting the apple
        if(squares[currentSnake[0]].classList.contains('apple')) {
            //remove the (class) apple
            squares[currentSnake[0]].classList.remove('apple')
            //grow snake by one by adding class of snake
            squares[tail].classList.add('snake')
            console.log(tail)
            // grow our snake array
            currentSnake.push(tail)

            // generate a new apple
            generateApple()

            // add one to the score
            score += 1
            scoreBoard.textContent = score
            // speed up the snake
            clearInterval(timerId)
            console.log(intervalTime)
            intervalTime * speed
            console.log(intervalTime)
            timerId = setInterval(moveSnake, intervalTime)
        }



    squares[currentSnake[0]].classList.add('snake')
}


function generateApple(){
    do {
        // generate a random number
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
        squares[appleIndex].classList.add('apple')
}
generateApple()
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
startBtn.addEventListener('click',function(){
    startGame()
})