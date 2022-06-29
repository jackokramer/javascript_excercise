
const solarSystem = document.getElementById("solarSystem")
const planetsObj = [
    {
    "name": "Mercury",
    "moons": 0
    },
    {
    "name": "Venus",
    "moons": 0
    },
    {
    "name": "Earth",
    "moons": 1
    },
    {
    "name": "Mars",
    "moons": 2
    },
    {
    "name": "Jupiter",
    "moons": 67
    },
    {
    "name": "Saturn",
    "moons": 62
    },
    {
    "name": "Uranus",
    "moons":27
    },
    {
    "name": "Neptune",
    "moons": 14
    }
]

// Task:
// 1. Display each planet’s name and number of moons in the DOM
const moonsArr =[]
for(let x = 0 ; x<planetsObj.length; x++){
    const {name, moons} = planetsObj[x]
    const numMoons = planetsObj[x].moons
    moonsArr.push(numMoons)

    const planetPtag= document.createElement('p')
    planetPtag.textContent = `${name}: ${moons} moons`
    solarSystem.appendChild(planetPtag)
}
// 2. Calculate and display the total number of moons in the solar system below
const totalMoons = moonsArr.reduce(function(total, currentElement){
    return total + currentElement
})

const totalMoonsP = document.createElement('p')
totalMoonsP.textContent = `Total moons in the solar system: ${totalMoons}`
totalMoonsP.classList.add('total-moons-p')
solarSystem.appendChild(totalMoonsP)

// Stretch goals:
// - 1: Make the numbers count up on page load
// - 2: Make the planet names bold.
