

const modalElem = document.getElementById('modal')
const closeX = document.getElementById('modal-close-btn')
setTimeout(()=>{
    modalElem.style.display = 'inline'
},1500)

closeX.addEventListener('click', ()=>{
    modalElem.style.display = 'none'
})

const acceptBtn = document.getElementById('accept')
const declineBtn = document.getElementById('decline')
const modalText= document.getElementById('modal-text')
const btnDiv = document.getElementById('btn-div')

decline.addEventListener('mouseover', ()=>{
    btnDiv.classList.toggle('reverse')
    console.log('hovered')
})

/*
Challenge:
1. Create a const to store the user's name and
   use a FormData method to extract the
   submitted name from the FormData object.
2. Insert the user's name into the HTML string
   that contains the final message we show our
   users.
*/

const formControl = document.getElementById('consent-form')


formControl.addEventListener('submit', (e)=>{
    console.log('form submitted')
    e.preventDefault()
         setTimeout(()=>{
        document.getElementById('upload-text').innerText= `Making the sale...`
    },1500)
    const consentFormDates = new FormData(formControl)
    console.log(consentFormDates)
})

acceptBtn.addEventListener('click', ()=>{
    modalText.innerHTML = `
        <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
</div>
    `
    setTimeout(()=>{
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks ${name}, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
        `
    closeX.disabled = false

    }, 3000)

    /*
Challenge:
1. Inside the body of this event listener,
   create a const and set it equals to a new
   instance of FormData which takes in our HTML
   form element as a parameter.
2. Log out the const (you should just get
   a FormData object).
*/

const submittedFormData = new FormData(formControl)
console.log(submittedFormData)
const name = submittedFormData.get('name')
const email = submittedFormData.get('email')
console.log(name, email)
})

