const sortBtn = document.getElementById('sort-btn')
const containerDiv = document.getElementById('container')

sortBtn.addEventListener('click', function(){
    console.log('sort me!')
    containerDiv.classList.toggle('reverse')
})
