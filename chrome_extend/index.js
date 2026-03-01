let myLeads =["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')



inputBtn.addEventListener('click',()=>{
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

let listItems =''
for(let x=0; x<myLeads.length; x++){
    listItems += `<li>${myLeads[x]}</li> `
    console.log(listItems)

}

ulEl.innerHTML += listItems

