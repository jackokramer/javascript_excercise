const cats =[
    {
        name: 'Ramones',
        thumbnail: 'imgs/Pumpkin.jpeg',
        catOftheDay: true
    },
     {
        name: 'Swindle Buttler',
        thumbnail: 'imgs/Snuggles.png'
        // credit: 'https://unsplash.com/photos/OzAeZPNsLXk'
    },
     {
        name: 'Cruella Devil',
        thumbnail: 'imgs/Cruella.png',
        // credit: 'https://unsplash.com/photos/w2DsS-ZAP4U'
    }
]

const catBasket = document.getElementById('cat-basket')
//console.log(catBasket)



cats.forEach(cat=>{
    const card = document.createElement('div')
    card.classList.add('card')
    catBasket.appendChild(card)

    if(cat.catOftheDay === true){
        card.classList.add('catOfTheDay')
    }

    card.classList.add('catOfTheDay')

    const pic = document.createElement('img')
    pic.classList.add('pic')
    pic.src = cat.thumbnail
    card.appendChild(pic)

    const catName = document.createElement('h2')
    catName.classList.add('cat-name')
    catName.textContent = cat.name
    card.appendChild(catName)

    const paw = document.createElement('span')
    paw.classList.add("material-icons-outlined")
    paw.textContent = 'pets'
    card.appendChild(paw)
    paw.addEventListener('click', function(){
    paw.classList.toggle('high-pawed')
})
})

cats[0].classList.add("catOftheDay")
