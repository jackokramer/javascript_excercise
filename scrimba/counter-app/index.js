let countEl = document.getElementById("count-el")
let count = 0
const incrementBtn = document.getElementById('increment-btn')
const decrementBtn = document.getElementById('decrement-btn')
const saveBtn = document.getElementById('save-btn')
const countSaved = document.getElementById('count-saved')

incrementBtn.addEventListener("click",()=>{
    count +=1
    countEl.textContent= count
})

// decrement the counter
decrementBtn.addEventListener("click",()=>{
    count --
    countEl.textContent=count
})

//save
saveBtn.addEventListener("click",()=>{
    let prevousOnes = `Previous Saves ${count} - `
    countSaved.textContent= prevousOnes
    countEl.textContent = 0
     count = 0

})

