const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP

//     Get an array of all names
const allNames = characters.map((character)=>{
    return character.name
})
// console.log(allNames)
//     Get an array of all heights
const allHeights = characters.map((character)=>{
    return parseInt(character.height)
})
//  console.log(allHeights)
//     Get an array of objects with just name and height properties
const allHeightNames = characters.map((character)=>({
    name: character.name,
    height: character.height
    //   return `${character.name} - ${parseInt(character.height)}`
}))
// console.log(allHeightNames)
//     Get an array of all first names
const firstNames = characters.map((character)=>character.name.split(' ')[0])

// console.log(firstNames)


// More Map
const values = [2,43,22,11,28]
const newValues = values.map((number, index)=> {
    number+2
    console.log(`new value ${number} at ${index}`)
})
// console.log(newValues)
// REDUCE

//     Get the total mass of all characters
//     Get the total height of all characters
//     Get the total number of characters in all the character names
//     Get the total number of characters by eye color (hint. a map of eye color to count)


// FILTER

//     Get characters with mass greater than 100
const massGreat= characters.filter(character => character.mass>100)
// console.log(massGreat)
//     Get characters with height less than 200
const heightLess = characters.filter(character => character.height<200)
// console.log(heightLess)
//     Get all male characters
const maleChar = characters.filter(character => character.gender === 'male')
// console.log(maleChar)
//     Get all female characters
const femaleChar = characters.filter(character => character.gender === 'female')
console.log(femaleChar)


// SORT

//     Sort by name
//     Sort by mass
//     Sort by height
//     Sort by gender
