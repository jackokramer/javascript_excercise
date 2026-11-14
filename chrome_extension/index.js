let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
let inputField = document.getElementById('input-el')
let saveButton = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

saveButton.addEventListener('click',()=>{
    myLeads.push(inputField.value)
    console.log(myLeads)
})

for(let x = 0; x<myLeads.length; x++){
    console.log(myLeads[x])
    ulEl.innerHTML += `<li>${myLeads[x]}</li> `
}