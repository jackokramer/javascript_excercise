let count = 0

let countEl = document.getElementById('count')
let addOne = document.getElementById('increment-btn')
let saveBtn = document.getElementById('save-btn')

addOne.addEventListener('click',()=>{
    count++
    console.log(count)
    countEl.textContent = count
})

saveBtn.addEventListener('click',()=>{
    count = 0
    countEl.textContent = count

})