let myLeads = []
// myLeads.push('hotleadszzz')
const inputField = document.getElementById('input-el')
const saveButton = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const ulEl = document.getElementById('ul-el')
const tabBtn = document.getElementById("tab-btn")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renders(myLeads)
}

const tabs = [
    {url: ""}
]

tabBtn.addEventListener('click',()=>{
    console.log(tabs[0].url)
})

function renders(leads){
let listItems = ''
for(let x = 0; x<leads.length; x++){
    listItems += `<li>
        <a href="${leads[x]}" target="_blank">${leads[x]}</a>
    </li>`
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML += listItems
}

deleteBtn.addEventListener('dblclick',()=>{
    localStorage.clear()
    myLeads = []
    renders(myLeads)
})

saveButton.addEventListener('click',()=>{
    myLeads.push(inputField.value)
    inputField.value = ' '
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    console.log(myLeads)
    renders()
})

