// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// let string = ''
let purchaseBtn= document.getElementById('purchase')
let errorId = document.getElementById('error')

purchaseBtn.addEventListener('click',()=>{
    errorId.textContent= `Something went wrong, please try again`
    console.log(errorId)
})