let myLeads =[]
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById("delete-btn")

const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"))

if(leadsFromLocalStorage){
    myLeads= leadsFromLocalStorage
    render()
}
function render(){
    let listItem = `<li>
                    <a href="${inputEl.value}" target="_blank">`+ inputEl.value + `</a>
                </li>`
    ulEl.innerHTML+=listItem
} //more efficient as it doens't loop through everything


// delete button
deleteBtn.addEventListener('dblclick', ()=>{
    localStorage.clear()
    myLeads = []
    render()
})

//input button
inputBtn.addEventListener('click',()=>{
    myLeads.push(inputEl.value)
    console.log(myLeads)
    localStorage.setItem('leads', JSON.stringify(myLeads))
    render()
    console.log( localStorage.getItem("leads") )
    inputEl.value = ' '
})
