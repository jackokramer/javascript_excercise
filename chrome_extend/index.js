let myLeads =[]
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"))

if(leadsFromLocalStorage){
    myLeads= leadsFromLocalStorage
    renderLeads()
}
inputBtn.addEventListener('click',()=>{
    myLeads.push(inputEl.value)
    console.log(myLeads)
    localStorage.setItem('leads', JSON.stringify(myLeads))
    renderLeads()
    console.log( localStorage.getItem("leads") )
    inputEl.value = ' '
})


function renderLeads(){
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
