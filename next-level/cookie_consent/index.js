/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/

// const modal = document.getElementById('modal')
// const modalCloseBtn = document.getElementById('modal-close-btn')

//     setTimeout(function(){
//     modal.style.display="inline"
//     console.log('modal opened!')
// }, 1500)


// modalCloseBtn.addEventListener('click', function(){
//     modal.style.display='none'
//     console.log('closed modal')
// })

const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    console.log('clicked')
    modal.style.display = 'none'
})