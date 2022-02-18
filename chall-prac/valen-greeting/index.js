const greetingDisplay = document.getElementById("greeting-display")
let greetingSelect = document.getElementById('greeting-select')


function writeGreeting() {

    greetingSelect.addEventListener('change', (event)=>{
        const result = document.querySelector('select').charAt()
        result.textContent = `${event.target.greetingDisplay}`
        return result
    })

}
