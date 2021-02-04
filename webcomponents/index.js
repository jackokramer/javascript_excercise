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