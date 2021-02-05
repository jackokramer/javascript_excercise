const linkName = document.querySelector(".link-name")

const nameInput = document.querySelector('.name-input')

function setName(name) {
    linkName.innerText = "Welcome";
    let nameInner = document.createElement('span')
    nameInner.innerText = name;
    nameInner.setAttribute('class','name')
    linkName.appendChild(nameInner)
    return nameInner;
}

nameInput.addEventListener("change", ()=>{
    setName(nameInput.value);
})

//challenge 2

const btn = document.querySelector('.btn');
const text = document.querySelector('.text')

let shown = true;

function toggleText(){
    if(shown){
        btn.innerText = "show text 👀";
        text.style.opacity =0;
    } else {
        btn.innerText ="hide text🙈"
        text.style.opacity = 1;
    }
    shown = !shown
}

btn.addEventListener('click',()=>{
    toggleText();
})

// challenge 3

const urlInputs = document.querySelector('input[name="url"]')
const colorInputs = document.querySelector('input[name="color"]')
const widthInputs = document.querySelector('input[name="width"]')

const image = document.querySelector('.image')

let url = "";
let width = "";
let color = "#000000"

function hideImageOnLoad(){
    image.style.display = "none";
}

function setImage(url, width, color){
    image.style.display = "block"
    image.style.borderStyle = 'solid'
    image.style.backgroundImage = "url(" + url + ")"
    image.style.borderWidth = width + 'px'
    image.style.borderColor = color
}

urlInputs.addEventListener('change', ()=> {
    url = urlInputs.value
    setImage(url, width, color)
})

colorInputs.addEventListener('change', ()=> {
    color = colorInputs.value
    setImage(url, width, color)
})

widthInputs.addEventListener('change', ()=> {
    width = widthInputs.value
    setImage(url, width, color)
})

hideImageOnLoad();

/// Challenge 5

const img = document.querySelector('.img-main');

let images = [
    {"src": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400", "alt":"Forest"},
      {"src": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400", "alt": "Foggy mountains"},
    {"src": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400", "alt": "Bridge in forest"},
    {"src": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", "alt": "Flower field"},
    {"src": "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400", "alt": "Green trees"}
]; 

function loadImage () {
    let src = img.getAttribute('src');
    let imageInfo = images[Math.floor(Math.random()*images.length)];
    while(src === imageInfo.src) {
        imageInfo = images[Math.floor(Math.random()*images.length)];
    }

    img.setAttribute("src", imageInfo.src);
    img.setAttribute('alt', imageInfo.alt);
}

img.addEventListener('click', ()=>{
    loadImage();
})

document.body.addEventListener("keydown", e =>{
    if(e.key === ""){
        loadImage();
    }
})

loadImage()