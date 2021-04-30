



function calculateDays (){

let currentTime = Date.now();
let dob = document.getElementById('dob').value;
console.log(dob)
const parsedDob = parseInt(dob);

if(isNaN(parsedDob)){
    (console.log(`no date provided please fill 😵‍💫`))
    const dateDisplay = document.getElementById('daysOld')
    dateDisplay.innerText = "no date provided please fill 😵‍💫"
} else {
    let timeDiff = currentTime - new Date(dob)
    const dateDisplay = document.getElementById('daysOld')

    const daysOld = Math.round(timeDiff/1000/60/60/24)

    dateDisplay.innerText = ` You are officially ${daysOld} days old 💨💩(old fart...) `
//console.log(Math.round(timeDiff/1000/60/60/24))
}
}