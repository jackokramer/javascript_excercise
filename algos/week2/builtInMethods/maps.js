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


//    Get an array of all names
const allNames = characters.map(character => character.name)
console.log(allNames)
//    Get an array of all heights
const allHeights = characters.map(character => character.height)
console.log(allHeights)
//    Get an array of objects with just name and height properties
const allNamesHeights = characters.map((character) => ({
    'name': character.name,
    'height': character.height
}))

//    Get an array of all first names
const firstNames = characters.map(character => character.name.split(' ')[0])
console.log(firstNames)