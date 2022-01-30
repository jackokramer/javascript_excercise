
const slides = document.getElementsByClassName('carousel-item')
let slidePostion = 0
const buttonPrev = document.getElementById("prev-slide")
const buttonNext = document.getElementById("next-slide")
const totalSlides = slides.length;

function hideallSlides(){
    for(let slide of slides){
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}

buttonPrev.addEventListener('click', function movePrev(){
    hideallSlides()
        console.log('move to the prev slide')
        if(slidePostion === 0){
            slidePostion === totalSlides -1
        } else{
                slidePostion --
        }
        slides[slidePostion].classList.add('carousel-item-visible')
})

buttonNext.addEventListener('click', function moveNext(){
    console.log('move to the next slide')
    hideallSlides()
    if(slidePostion === totalSlides -1){
        slidePostion =0
    }   else{
            slidePostion ++
        }
        slides[slidePostion].classList.add('carousel-item-visible')
})

console.log(totalSlides)