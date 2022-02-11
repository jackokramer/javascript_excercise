/*
    Challenge:

        Reverse the Column's direction in my-gallery
            Such that my-photos appear over #my-selected-photo

        Change the size of #my-selected-photo to 300x300
            And set its default src to be the 3rd item in the Photos array

        Align the photos in my-photos to the right, using Flexbox
            Align #my-selected-photo to the left, using Flexbox
*/

async function photoGallery(){
    let response = await fetch("photos.json")
    let photos = await response.json()
    //console.log(photos)
    return photos
}

function getPhotosHtml(photos){
    let myPhotosHMTL = photos.map(photo =>{
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`
    }).join(' ')
    console.log(myPhotosHMTL)
}

photoGallery().then(photos => {
    document.body.innerHTML = `
    <div class="my-gallery">
    <img style= "display:none;" class="-my-photo" id"my-selected-photo" src="https://picsum.photos/id/${photos.id}/200/200"/>
    ${getPhotosHtml(photos)}
    </div>`

    let myPhotoImg =Array.from(document.getElementsByClassName('my-photo'))
    myPhotoImg.forEach(photoImg =>{
        photoImg.addEventListener('click', event =>{
            let selectedPhotoSrc = `${photoImg.src.substr(0,photoImg.src.length-7)}200/200`

            let selectedPhoto = document.getElementById('my-selected-photo')
            selectedPhoto.src = selectedPhotoSrc;
            selectedPhoto.style.display = 'inline'
        })
    })
    //console.log(myPhotoImg)
})