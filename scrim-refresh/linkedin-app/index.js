let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById('ul-el')
console.log(ulEl)
inputBtn.addEventListener('click', function(){
   myLeads.push(inputEl.value)
   console.log(myLeads)
   renderLeads()
})

// render out the lead
function renderLeads(){
    let listItems = ""
    for(let x = 0; myLeads.length>x ; x++){
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        listItems += `<li>
                        <a target='_blank' href='${myLeads[x]}'>
                         ${myLeads[x]} </a>
                    </li>`
        console.log(listItems)
        //create element
        // set textContent
        //append to ul
        /*const li = document.createElement('li')
        li.textContent = myLeads[x]
        ulEl.appendChild(li)*/
    }
        ulEl.innerHTML = listItems
        inputEl.value = " "
        //listItems.window.open()
}
