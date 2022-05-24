//SORT

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
        name: 'Padme',
        height: '150',
        mass: '60',
        eye_color: 'blue',
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

//    Sort by name
const sortName = characters.sort((a,b) => {
    if(a.name < b.name){
        return -1
    } return 1
})
//console.log(sortName)
//    Sort by mass
const sortMass = characters.sort((a, b) => {
    return b.mass - a.mass
})
//console.log(sortMass)
//    Sort by height
const sortHeight = characters.sort((a, b) => {
    return a.height - b.height
})
//console.log(sortHeight)
//    Sort by gender
const sortGender = characters.sort((a, b) => {
if(a.gender === 'female')return 1
 return -1
});

console.log(sortGender)
