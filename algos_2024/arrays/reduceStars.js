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


/*
REDUCE
*/
    // Get the total mass of all characters
    const totalMass = characters.reduce((acc,curr)=>
           {return parseInt(acc)+ parseInt(curr.mass)}, 0)
    console.log(totalMass)
    // Get the total height of all characters
const totalHeight = characters.reduce((acc, curr)=>{return parseInt(acc)+ parseInt(curr.height)},0)
    console.log(totalHeight)

    // Get the total number of characters in all the character names
const totalCharName = characters.reduce((acc, curr)=> acc+ curr.name.length, 0
)
      console.log(totalCharName)

    // Get the total number of characters by eye color (hint. a map of eye color to count)
const eyeColor = characters.reduce((acc,curr)=>{
  const color= curr.eye_color
  if(acc[color]){
    acc[color]= acc[color]+1
  } else {
    acc[color]=1
  }
  return acc
}, {})

console.log(eyeColor)

