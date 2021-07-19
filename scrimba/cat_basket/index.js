const cats =[
    {
        name: 'Ramones',
        thumbnail: 'imgs/Pumpkin.jpeg',
        location: 'San Francisco',
        catOftheDay: true
    },
     {
        name: 'Swindle Buttler',
        thumbnail: 'imgs/Snuggles.png',
        location: 'Venice'
    },
     {
        name: 'Cruella Devil',
        thumbnail: 'imgs/Cruella.png',
        location: 'Venice'
    },
    {
        name: 'Oaxaca',
        thumbnail: 'imgs/oaxaca.jpeg',
        location: 'Mexico',
},
    {
        name: 'Paz',
        thumbnail: 'imgs/paz.jpeg',
        location: 'Venice',
},
    {
        name: 'Heart throbber',
        thumbnail: 'imgs/heart-throbb.jpeg',
        location: 'Coppenhagen'
    },
    {
        name: "Salvador Dali",
        thumbnail: 'imgs/salvador.jpeg',
        location: 'Barcelona'
    },
    {
        name: "Brookings",
        thumbnail: 'imgs/brookings.jpeg',
        location: 'Oregon'
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

    const location = document.createElement('p')
    location.classList.add('location')
    location.textContent = cat.location
    card.appendChild(location)

    const paw = document.createElement('span')
    paw.classList.add("material-icons-outlined")
    paw.textContent = 'pets'
    card.appendChild(paw)
    paw.addEventListener('click', function(){
    paw.classList.toggle('high-pawed')
})
})

cats[0].classList.add("catOftheDay")
