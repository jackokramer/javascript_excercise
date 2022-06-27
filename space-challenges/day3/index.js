const countdownDisplay = document.getElementById("countdown-display")
const rocket = document.getElementById("rocket")
let timeRemaining = 15

// Task:
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation
const interVals = setInterval(countDown, 1000)

function countDown() {
    console.log(timeRemaining)
    if(timeRemaining == 0){
        rocket.classList.add('liftOff')
        clearInterval(interVals)
        countdownDisplay.textContent = 'Lift Off'
        console.log("lft off")
        clearInterval(interVals)
    } else{
    countdownDisplay.textContent = timeRemaining
    timeRemaining --
    }
}

// Stretch goals:
// 1) Add fire under the rocket.
// 2) Randomly don’t launch the rocket when the timer reaches 0.

