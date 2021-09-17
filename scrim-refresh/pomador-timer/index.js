// You got this! 💫
const workBtn = document.getElementById('work-btn')
const shortBreakBtn = document.getElementById('short-break-btn')
const longBreakBtn = document.getElementById('long-break-btn')
let timeDisplay = document.getElementById('time-display')
let numOfMins = 0
let typeOfCountdown = ""
let timeout


workBtn.addEventListener('click', function(){
    startTimer(25)
})
shortBreakBtn.addEventListener('click', function(){
    startTimer(5)
})
longBreakBtn.addEventListener('click', function(){
    startTimer(15)
})

function startTimer(time) {
    document.title = "Pomodoro Timer"
    clearInterval(timeout)
    let allowedTime = time*60
    showTime(allowedTime)
    timeout = setInterval(function(){
        if(allowedTime === 0){
            showTime(0)
            clearTimeout(timeout)
        } else {
            allowedTime --
            showTime(allowedTime)
            console.log(allowedTime)
        }
    }, 1000)
}

function showTime (allowedTime) {
    let minutes = pad(Math.floor(allowedTime/60))
    let seconds = pad(allowedTime%60)

    let time = timeDisplay.innerText = `${minutes}: ${seconds}`
    document.title = time
    timeDisplay.innerText =time
}

function pad(number){
    return number< 10 ? `0${number.toString()}`: number
}
// 💻 Work: 25 mins
// ☕️ Short break: 5 mins
// 🌯 Long break: 15 mins
