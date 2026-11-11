let myLeads = []
let inputField = document.getElementById('input-el')
let saveButton = document.getElementById('input-btn')

saveButton.addEventListener('click',()=>{
    myLeads.push(inputField.value)
    // myLeads = inputField.value
    console.log(myLeads)
    // console.log('button clicked')
})