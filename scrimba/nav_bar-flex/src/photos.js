const murals = [
    {
        name:"Ramones",
        thumbnail:'imgs/Pumpkin.jpeg',
        location:'San Francisco',
        catchOfTheDay: true,
    },
        {
        name:"Swindling Buttler",
        thumbnail:'imgs/Snuggles.png',
        location:'Venice',
    },
            {
        name:"Crulla Devil",
        thumbnail:'imgs/Cruella.png',
        location:'Venice',
    },
            {
        name:"Oaxaca",
        thumbnail:'imgs/oaxaca.jpeg',
        location:'Mexico',
    },
            {
        name:"Paz",
        thumbnail:'imgs/paz.jpeg',
        location:'Venice',
    },
            {
        name:"Heart Throbber",
        thumbnail:'imgs/heart-throbb.jpeg',
        location:'Coppenhaggen',
    },
            {
        name:"Salvador Dali",
        thumbnail:'imgs/salvador.jpeg',
        location:'Barcelona',
    },
            {
        name:"Brooking",
        thumbnail:'imgs/brookings.jpeg',
        location:'Oregon',
    }
]
const muralBasket = document.getElementById('cat-basket')



murals.forEach(murals =>{
    const card = document.createElement('div')
    card.classList.add('card')
    muralBasket.appendChild(card)

    const pic = document.createElement('img')
    pic.classList.add('pic')
    pic.src = murals.thumbnail
    card.appendChild(pic)

    const muralName = document.createElement('h2')
    muralName.classList.add('name')
    muralName.textContent = murals.name
    card.appendChild(muralName)

    const location = document.createElement('p')
    location.classList.add('location')
    location.textContent = murals.location
    card.appendChild(location)

    const paw = document.createElement('span')
    paw.classList.add('material-icons-outlined')
    paw.textContent = 'pets'
    card.append(paw)
    paw.addEventListener('click', function highPaw(){
    console.log('highed')
paw.classList.toggle('high-pawed')
})
})