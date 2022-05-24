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

//REDUCE

    //Get the total mass of all characters
    const totalMass = characters.reduce((acc, cur) =>{
       return parseInt(acc) += parseInt(cur.mass)
   }, 0)
    //console.log(totalMass)
    //Get the total height of all characters
    const allHeights = characters.reduce((acc, curr)=> parseInt(acc) + parseInt(curr.height),0)
    //Get the total number of characters in all the character names
    const totalNameChar = characters.reduce((acc, cur) =>{
        return acc + cur.name.length
    })
    //Get the total number of characters by eye color (hint. a map of eye color to count)
    const eyeColorChar = characters.reduce((acc, curr)=>{
        const eyeColor = curr.eye_color
        if(acc[eyeColor]){
            acc[eyeColor] ++
        } else {
            acc[eyeColor] = 1
        }
    }, {})