// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorMessage = document.getElementById('error')

let purchaseButton = document.getElementById('purchaseBtn')

purchaseButton.addEventListener('click',()=>{
    errorMessage.textContent='Something went wrong, please try again'
})