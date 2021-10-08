
const width = 28
const grid = document.querySelector('.grid')
let scoreDisplay = document.getElementById('score')
let squares = []
let score = 0;

  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

//create board
function createBoard(){
    for(let x = 0; x<layout.length; x++) {
        // create a square
        const square = document.createElement('div')
        // put square in a grid
        grid.appendChild(square)
        // put square into the array
        squares.push(square)

        //create a wall
        if(layout[x] === 0){
            squares[x].classList.add('pac-dot')
        } else if(layout[x]===1){
            squares[x].classList.add('wall')
        } else if(layout[x]===2){
            squares[x].classList.add('ghost-lair')
        } else if(layout[x] === 3){
            squares[x].classList.add('power-pellet')
        }
    }
}

createBoard()

let pacmanCurrentIndex = 490;
squares[pacmanCurrentIndex].classList.add('pacman')

//up key = 38
//left key = 37
// right = 39

//starting postion of pacman
function control(e){
        squares[pacmanCurrentIndex].classList.remove('pacman')
        switch(e.keycode){
            case 40:
            //console.log('pressed down')
            if(
                !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
                !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                pacmanCurrentIndex + width < width * width)
                pacmanCurrentIndex += width
            break
            case 38:
            //console.log('pressed up')
            if(
                !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') &&
                !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                pacmanCurrentIndex - width>=0)
                pacmanCurrentIndex -=width
            break
            case 37:
            //console.log('left key')
            if(
                !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair') &&
                !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                pacmanCurrentIndex % width !==0)
                pacmanCurrentIndex -=1
                if(pacmanCurrentIndex === 364){
                    pacmanCurrentIndex = 391
                }
            break
        case 39:
            //console.log('right key')
            if(!squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')&&
                !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                pacmanCurrentIndex % width < width -1)
                pacmanCurrentIndex +=1
                if(pacmanCurrentIndex === 391){
                    pacmanCurrentIndex = 364
                }
            break
    }
        squares[pacmanCurrentIndex].classList.add('pacman')
        pacDotEaten()
        powerPelletEatn()
        checkForWin()
        checkGameover()
}
document.addEventListener('keyup', control)

function pacDotEaten(){
    if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        score++
        scoreDisplay.innerHTML =  score
    }
}


function powerPelletEatn(){
    //if square pacman is in contains a power pellet
    if(squares[pacmanCurrentIndex].classList.contains('power-pellet')){
    //removeing class of power-pellet from square
    squares[pacmanCurrentIndex].classList.remove('power-pellet')
    // add a score of 10
    score +=10
    //change each use of the four ghosts  to isScared
    ghosts.forEach(ghost => ghost.isScared= true)
    //setTimeout() to unscare ghost after 10 seconds
    setTimeout(unScareGhost, 10000)
    }
}
function unScareGhost(){
    ghosts.forEach(ghost => ghost.isScared= false)
}
class Ghost{
    constructor( className, startIndex, speed){
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this. currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost('blinky', 348, 200),
    new Ghost('pinky', 376, 300),
    new Ghost('minky', 351, 150),
    new Ghost('zedd', 379, 500)
]


ghosts.forEach(ghost =>{
    squares[ghost.startIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
})

ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost){
    console.log('moved ghost')
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random()* directions.length)]
    console.log(direction)

    ghost.timerId = setInterval(function(){
        // create
        //if the next sqaure does not contain a wall or a ghost
        if(
            !squares[ghost.currentIndex+direction].classList.contains('wall')&&
            !squares[ghost.currentIndex+direction].classList.contains('ghost')
            ) {
        //remove any ghsot classes
        squares[ghost.currentIndex].classList.remove(ghost.className)
        squares[ghost.startIndex].classList.remove('ghost', 'scared-ghost')
        //ghosts.remove(Ghost)
        // add direction to current index
        ghost.currentIndex += direction
        //add ghostclass
        //ghosts.add(ghost.className('pinky'))
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
        } else direction = directions[Math.floor(Math.random() *directions.length)]

        //if ghost is currently scared
    if(ghost.isScared){
        squares[ghost.currentIndex].classList.add('scared-ghost')
    }
    if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')){
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        //if the ghost is currently scared and pacman is on it
        ghost.currentIndex = ghost.startIndex
        //remove classnames = ghost.className, 'ghost', 'scared-ghost'
        //change ghosts current index back to its start index
        // add score 100
        score +=100
        //re-add classnames of ghost.className and 'ghost' to the ghosts new postion
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }

        checkGameover()
        //readd classnames of ghost.className and 'ghost' to the new ghost postion
    }, ghost.speed)
}

//check for a gameOver
function checkGameover(){
    //if square pacman is in contains a ghost AND the square does NOT contain a scared ghost
    if(
        squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost'))
        {
    //for each ghost - wee need to it stop moving towards
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    //remove event listener from our control function
    document.removeEventListener('keyup', control)

    scoreDisplay.innerHTML = 'You lose'
    }
}

//  check for win

function checkForWin(){
    if(score === 274){
        //stop each ghost moving
        ghost.forEach(ghost => clearInterval(ghost.timerId))
        //remove eventlisteners
        document.removeEventListener('keyup', control)
        //tell users we have won
        scoreDisplay.innerHTML = 'You win'
    }
}