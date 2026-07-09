let count = 0

let countEl = document.getElementById('count')
let addOne = document.getElementById('increment-btn')
let saveBtn = document.getElementById('save-btn')
let prevEntry = document.getElementById('prev-entry')

addOne.addEventListener('click',()=>{
    count++
    console.log(count)
    countEl.textContent = count
})

saveBtn.addEventListener('click',()=>{
    prevEntry.textContent += ` ${count} - `
    count = 0
    countEl.textContent = count

})