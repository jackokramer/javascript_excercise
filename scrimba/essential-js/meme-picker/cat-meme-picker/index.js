import {catsData} from '/data.js'

const emoRadio = document.getElementById('emotion-radios')
const getImgBtn = document.getElementById('get-image-btn')
const gifOnlyOption = document.getElementById("gifs-only-option")
const memeModal = document.getElementById('meme-modal')
const memeModalInner = document.getElementById('meme-modal-inner')
const closeModal = document.getElementById('meme-modal-close-btn')

emoRadio.addEventListener('change', highlighCheckedOption)
getImgBtn.addEventListener('click', renderCat)

function highlighCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for(let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function renderCat(){
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML =
    `<img
        class="cat-img"
        src="./images/${catObject.image.toUpperCase()}"
        alt="${catObject.alt.toUpperCase()}"
        >`
    memeModal.style.display = 'flex'
    closeModal.addEventListener('click', ()=>{
        memeModal.style.display='none'
    })
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    console.log(catsArray)
    if(catsArray.length === 1){
        return catsArray[0]
    } else {
        const randomNum = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNum]
    }

}

const getMatchingCatsArray = () =>{
    const isGif = gifOnlyOption.checked
    if(document.querySelector('input[type="radio"]:checked')){
    let selectedEmotions = document.querySelector('input[type="radio"]:checked').value

const chooseEmotion = catsData.filter((emotion)=> {
    if(isGif){
        return emotion.emotionTags.includes(selectedEmotions) && emotion.isGif
    } else {
        return emotion.emotionTags.includes(selectedEmotions)
    }

})
console.log(chooseEmotion)

return chooseEmotion
    }
}

function getEmotionsArray(cats){
    const emotionArray= []
    for(let cat of cats){
        for(let emotion of cat.emotionTags){
            if(!emotionArray.includes(emotion))
            emotionArray.push(emotion)
        }
    }
    return emotionArray
}

function renderEmotionsRadio(cats){
    const emotions = getEmotionsArray(cats)
    let radioItems = ``
    for(let emotion of emotions){
       radioItems +=`
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
                <input
                    name="emotions"
                    id="${emotion}"
                    value ="${emotion}"
                    type="radio"
                    >
        </div>`
    }
    emoRadio.innerHTML = radioItems
}

renderEmotionsRadio(catsData)
