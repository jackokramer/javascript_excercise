// $('button').on('click mouseover',function(){
    // alert('Hola Jaquees')
// })

//selection dom elements

const button = document.querySelector('button')

// Call Background

function alertButton(){
    alert('Jola Jaquess')
}

// Event Listners
button.addEventListener('click', alertButton, false)

// Second Version - For Loop Loop

// for(let button of buttons){
    // button.addEventListener('click', alertButton, false)
    // button.addEventListener('mouseover', alertButton, false)
// }

//Selection of DOM Elements part Duplex

const revealButton = document.querySelector('.reveal-section')
const hiddenSection = document.querySelector('.hidden-section')

// Callback function

function revealSection(){
    if(hiddenSection.classList.contains('reveal')){
        hiddenSection.classList('reveal')
    } else{
        hiddenSection.classList.add('reveal')
    }
}

// event listeners

revealButton.addEventListener('click', revealSection, false)