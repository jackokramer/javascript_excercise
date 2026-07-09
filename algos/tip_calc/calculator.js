let num1 = 8
let num2 = 2
let sumEl = document.getElementById('sum-el')
let addEl = document.getElementById('add')
let subEl = document.getElementById('sub')
let divideEl = document.getElementById('divide')
let multiEl = document.getElementById('multi')
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


// Create four functions: add(), subtract(), divide(), multiply()
addEl.addEventListener('click',()=>{
   let total = num1+num2
    sumEl.textContent = total
})


subEl.addEventListener('click',()=>{
   let total = num1-num2
    sumEl.textContent = total
})

divideEl.addEventListener('click',()=>{
   let total = num1/num2
    sumEl.textContent = total
})

multiEl.addEventListener('click',()=>{
   let total = num1*num2
    sumEl.textContent = total
})
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

