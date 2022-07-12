// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById('container')


const renderImg = () =>{
    let imgsDom = ''
    for(let x = 0; imgs.length>x; x++){
        imgsDom += `<img alt="employee directory" class="team-img" src="${imgs[x]}">`
    }
    container.innerHTML = imgsDom
}

renderImg()