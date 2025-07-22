let count = 0
const increment = document.getElementById('count-el')
const saveEl = document.getElementById('save-btn')

console.log(count)

function incrementBtn(){
    count++
    console.log(count)
    increment.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save(){
    console.log(count)
    let previous = 'Previous Entry'
}