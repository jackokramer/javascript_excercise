let count = 0
let countEl = document.getElementById('count-el')
let incrementbtn = document.getElementById('increment-el')
let saveEl = document.getElementById('save-el')
let previous = document.getElementById('previous-entry')

incrementbtn.addEventListener('click', ()=>{
    count+=1 //important
    countEl.textContent= count
    console.log(count)
})

saveEl.addEventListener('click',()=>{
    let currentEntry = `${count} - `
    currentEntry.textContent += count
    previous.textContent +=  currentEntry
    count = 0

})