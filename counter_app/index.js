let count = 0
const increment = document.getElementById('count-el')
const saveBtn = document.getElementById('save-btn')
const saveEl = document.getElementById('save-el')

console.log(saveEl)

function incrementBtn(){
    count++
    console.log(count)
    increment.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save(){
    let savedCount = `${count}  - `
    saveEl.textContent += savedCount
    increment.textContent = 0
    count = 0
}