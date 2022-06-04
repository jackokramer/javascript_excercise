/*
    Task: Add an event listener for 'keyup'
    1. Capture the event in a 'let' called 'searchQuery' - storing the value
    2. Make sure the captured value is lowercase
    3. Log to the console to demonstrate it works
    */

document.getElementById('searchInput').addEventListener('keyup', (event)=>{
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name')
    // console.log(searchQuery)
    // console.log(allNamesDOMCollection[0].textContent)
    for(let counter = 0; counter < allNamesDOMCollection.length; counter++){
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        if(currentName.includes(searchQuery)){
        allNamesDOMCollection[counter].style.display = 'block'
        } else {
            allNamesDOMCollection[counter].style.display = 'none'
        }
    }
})