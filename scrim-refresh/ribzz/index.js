let collector = document.getElementById('collector')


collector.addEventListener('submit', event => {
    event.preventDefault();
    let ourFormData = new FormData(event.target)

    let userName = ourFormData.get('firstName')
    let updateHTMLContent = `<h2>Congrats ${userName}!</h2>
                    <p>Your on your way to becoming a bbq master</p>
                    <p class="fine-print">We'll never share your information without your permission</p>`
    let ourMainContent = document.getElementById('two')
    ourMainContent.innerHTML = updateHTMLContent
})

