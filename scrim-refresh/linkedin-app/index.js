//if an array has backticks `` use JSON.stringify() to allow push function to add others to the array
//myLeads = Json.parse(myLeads) will turn a set of strings into an array
//myLeads = JSON.stringify(myLeads) turns them all into strings.
let myLeads = []
let oldLeads = []
console.log(myLeads)
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
console.log(ulEl)
const deleteBtn = document.getElementById('delete-btn')
const tabBtn= document.getElementById('tab-btn')

const leadsFromLocal = JSON.parse(localStorage.getItem('myLeads'))
console.log(leadsFromLocal)

if(leadsFromLocal){
    myLeads = leadsFromLocal
    render(myLeads)
}

const tabs = [
    {
        url:"https://www.linkedin.com/in/per-harald-borgen/"
    }
]

tabBtn.addEventListener('click', function(){
    console.log(tabs[0])
})

// render out the lead
function render(leads){
    let listItems = ""
    for(let x = 0; leads.length>x ; x++){
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        listItems += `<li>
                        <a target='_blank' href='${leads[x]}'>
                         ${leads[x]} </a>
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

// 2. Listen for double clicks on the delete button (google it!)
deleteBtn.addEventListener('dblclick', function(){
    console.log('double stuffed')
    localStorage.clear(myLeads)
    myLeads = []
    render(myLeads)
    //deleteBtn.classList.toggle('myLeads')
})
// 3. When clicked, clear localStorage, myLeads, and the DOM

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    localStorage.setItem('myLeads',
    JSON.stringify(myLeads))
   render(myLeads)
   console.log(localStorage.getItem('myLeads'))
})


/* arguments vs parameters
*/