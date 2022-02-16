const greetingDisplay = document.getElementById("greeting-display")
let greetingSelect = document.getElementById('greeting-select')


function writeGreeting() {
    // Write a function update the message in the greeting-display paragraph each time the form is updated.

    greetingSelect.addEventListener('change', (event)=>{
        const result = document.querySelector('select')
        result.textContent = `${event.target.greetingDisplay}`
    })

}
