let myLeads = []
let inputField = document.getElementById('input-el')
let saveButton = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

saveButton.addEventListener('click',()=>{
    myLeads.push(inputField.value)
    inputField.value = ' '
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