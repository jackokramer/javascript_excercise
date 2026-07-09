// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let purchaseBtn = document.getElementById('purchase')
let errorMsg = document.getElementById('error')

purchaseBtn.addEventListener('click',()=>{
    let message = 'Something went wrong, please try again'
    errorMsg.textContent = message
})