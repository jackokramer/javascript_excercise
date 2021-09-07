// document.getElementById("count-el").innerText = 5

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// 1. Grab the save-el paragrah and store it in a variable called saveEl

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count =0

//console.log(saveEl)
function increment(){
    console.log('button was clocked')
    count += 1;
    countEl.textContent = count
    //console.log(count);
}

increment()

// 1. Create a function, save(), which logs out the count when it's called
function save(){
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
     let countStr = count + "-"
     saveEl.textContent += countStr
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    //console.log(`is the count now ` + count)
    countEl.textContent = 0;
    count = 0;
    //count = 0; MY SOLUTION
}
save()
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count



//let count =5


//count +1
//count = 3

//count = count + 1 // 5+1

//console.log(count)


/* Setting up the the race 🏎 🏎 🏎

function countDown(){
    console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Go!!')
    /*let count =5;
    for(let x = 0; x < count; x++){
        console.log(count)
    }
    return count;*/
//}
//countDown()

//countDown()

//function jackieRob(){
//    console.log(42 + ' is Jack Robinsons number')
//}

//jackieRob()
//
// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎



// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
/* READ THE DIRECTIONS ENTIRELY
let bonusPoints = 50 //inital
console.log(bonusPoints)


bonusPoints = bonusPoints + 50

console.log(bonusPoints)

bonusPoints = bonusPoints - 75

console.log(bonusPoints)

bonusPoints = bonusPoints+ 45

console.log(bonusPoints)
*/
/*
let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function checkSum(){
    allTimes = lap1 + lap2 + lap3
    console.log(allTimes)
    //return allTimes
}

checkSum()

*/
/*
let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function increment(){
    lapsCompleted += 1
}

increment()
increment()
increment()





console.log(lapsCompleted)

*/

// Create a variable, message, that stores the string: "You have tree new notifications"
/*
let yser_name = "jacko"

let message = "You have tree new notifications"

console.log(yser_name+ ', ' +message)

// Create a variable, messageToUser, that contains the message we have logged

let messageToUser = yser_name + " " + message

console.log(messageToUser)
*/

/*
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

let myName = 'Jacko'

let greeting = 'hi, my name is'

let myGreeting = greeting + ' ' + myName

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

console.log(myGreeting)
*/