// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById('container')
const modal = document.getElementById('modal')
const openModal = document.getElementById('open-modal')
const closeModal = document.getElementById('close-modal')
const overlay = document.getElementById('overlay')

function renderImg(){
    let imagesDOM = ""
   for(let x = 0; imgs.length>x; x++){
       imagesDOM += `<img src = "${imgs[x]}" class="team-img" alt="hipster douches">`
   }
 container.innerHTML = imagesDOM
}

renderImg()

openModal.addEventListener('click', function () {
    overlay.style.display = "block"
})

closeModal.addEventListener('click', function(){
    overlay.style.display = "none"
})

