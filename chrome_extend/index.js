let myLeads =[]
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

let name = localStorage.setItem('myLeads', 'hotleads.com')

console.log(localStorage.getItem('hotleads.com'))
localStorage.clear()
inputBtn.addEventListener('click',()=>{
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLead()
    inputEl.value = ' '
})


function renderLead(){
    let listItem = `<li>
                    <a href="${inputEl.value}" target="_blank">`+ inputEl.value + `</a> </li>`
    ulEl.innerHTML+=listItem
} //more efficient as it doens't loop through everything






// function renderLeads(){
// let listItems =''
// for(let x=0; x<myLeads.length; x++){
//     listItems += `<li>${myLeads[x]}</li> `
//     console.log(listItems)

// }

// ulEl.innerHTML += listItems
// }
