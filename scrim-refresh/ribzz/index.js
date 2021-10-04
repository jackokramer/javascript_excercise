let collector = document.getElementById('collector')


collector.addEventListener('submit', event => {
    event.preventDefault();
    let ourFormData = new FormData(event.target)

    let userName = ourFormData.get('firstName')
    let emailAddress = ourFormData.get('emailAddress')
    let updateHTMLContent = `<h2>Congrats ${userName}!</h2>
                    <p>Your on your way to becoming a bbq master</p>
                    <p class="fine-print">We'll  send you weekly bbq tips to ${emailAddress}</p>`
    let ourMainContent = document.getElementById('two')
    ourMainContent.innerHTML = updateHTMLContent
})

