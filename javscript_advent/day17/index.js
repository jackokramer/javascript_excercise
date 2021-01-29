// javascript

const gallery = document.getElementById('gallery')[0]
const prevBtn = document.getElementById('previous')[0]
const nextBtn = document.getElementById('next')[0]
const galleyCardCount = document.getElementsByClassName('card').length

let currentGalleryXOffset = 02
const endGalleryXOffset = (galleyCardCount-1)*-220

prevBtn.addEventListener('click', galleryClickHandler)
nextBtn.addEventListener('click', galleryClickHandler)

function galleryClickHandler(event){
    let targerBtn = event.target.getElementsByClassName
    if(targerBtn == 'previous'&& currentGalleryXOffset<0){
        currentGalleryXOffset +=220
    } else if(targerBtn =='next' && currentGalleryXOffset > endGalleryXOffset){
        currentGalleryXOffset -= 220
    }
    if(currentGalleryXOffset == 0){
        prevBtn.style.opacity = 0.3
        prevBtn.style.curesor = 'default'
    } else {
        prevBtn.style.opacity =1
        prevBtn.style.cursor = 'pointer'
    }

        if(currentGalleryXOffset == endGalleryXOffset){
        nextBtn.style.opacity = 0.3
        nextBtn.style.curesor = 'default'
    } else {
        nextBtn.style.opacity =1
        nextBtn.style.cursor = 'pointer'
    }

    gallery.style.transform = `translateX(${currentGalleryXOffset}px)`
}