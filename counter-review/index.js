let countEl = document.getElementById("count-el")
let addBtn = document.getElementById("add-btn")
let subBtn = document.getElementById('sub-btn')
let saveBtn = document.getElementById('save')
let previousEnt = document.getElementById('prev')


let count = 0


addBtn.addEventListener("click", () => {
    count++
    countEl.textContent = count
})

subBtn.addEventListener("click", () => {
    count--
    countEl.textContent = count
})

saveBtn.addEventListener('click', () => {
    console.log('saved')
    let countStr = `${count} - `
    previousEnt.textContent += countStr
    countEl.textContent = 0
    count = 0

})



