let myLeads = []
// myLeads.push('hotleadszzz')
let inputField = document.getElementById('input-el')
let saveButton = document.getElementById('input-btn')
let deleteBtn = document.getElementById('delete-btn')
const ulEl = document.getElementById('ul-el')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener('dblclick',()=>{
    localStorage.clear()
    myLeads = []
    renderLeads()
    console.log(myLeads)
})

// let keyName = localStorage.getItem('myLeads')
// console.log(keyName)

saveButton.addEventListener('click',()=>{
    myLeads.push(inputField.value)
    inputField.value = ' '
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    console.log(myLeads)
    renderLeads()
})

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
function renderLeads(){
let listItems = ''
for(let x = 0; x<myLeads.length; x++){
    listItems += `<li>
        <a href="${myLeads[x]}" target="_blank">${myLeads[x]}</a>
    </li>`
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML += listItems
}