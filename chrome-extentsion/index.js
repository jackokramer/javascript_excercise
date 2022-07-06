const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
//let listItem = document.getElementById('list-item')
let ulEl = document.getElementById('ul-el')
let myLeads = `[]`

myLeads = JSON.parse(myLeads)
myLeads.push('')
console.log(myLeads)

localStorage.setItem('myLeads', 'www.examplelead.com')

inputBtn.addEventListener('click', () =>{
    console.log(myLeads)
    myLeads.push(inputEl.value)
   //myLeads.textContent = listItem
   inputEl.value = ''
   localStorage.setItem('myLeads', JSON.stringify(myLeads))

   renderLeads()
})

function renderLeads(){
    let listItems = ''
        for(let x = 0; x < myLeads.length; x++){
        listItems += `<li>
            <a target="_blank" href="${myLeads[x]}" class='new-info'>${myLeads[x]}</a>
        </li>`
    }
        ulEl.innerHTML = listItems

}