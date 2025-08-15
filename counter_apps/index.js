let count = 0
let countEl = document.getElementById('count-el')
console.log(countEl)
let incrementBtn = document.getElementById('increment-btn')
let saveBtn = document.getElementById('save-el')
let prevEnteries = document.getElementById('previous-enteries')

function addOne(){
    count+=1
    countEl.textContent=count
}

function save(){
    let savedCount = ` ${count} - `
    prevEnteries.textContent += savedCount
    console.log('caught')
    count = 0
    countEl.textContent= 0
    return prevEnteries
}
