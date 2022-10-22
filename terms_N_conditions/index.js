const continueBtn = document.getElementById('continue-btn')
const acceptTerms = document.getElementById('accept-terms')
const addMail = document.getElementById('add-mail')
continueBtn.addEventListener('click', function(){
    if(addMail.checked){
        console.log("mail accepted")
    } else{
        console.log('mail not accepted')
    }
    if(acceptTerms.checked){
    console.log(acceptTerms.value)
    } else {
        console.log('terms refuded')
    }
})