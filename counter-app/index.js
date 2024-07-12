let countEl = document.getElementById('count-el')
let savedInstance = document.getElementById('saved-instances')

let count = 0

function countedPass(){
    count +=1
    countEl.textContent= count
}

function savedLog(){
    let savedStuff = 'Prevous enteries: ' + count
    console.log(savedStuff)
    savedInstance.textContent = savedStuff
    countEl.textContent = 0
    count = 0
}