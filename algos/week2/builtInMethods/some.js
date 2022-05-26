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

//Some
    //Is there at least one male character?
    const oneMale = characters.some(character => {
        if(character.gender === 'male') return true;
        return false
    })
    console.log(oneMale)
    //Is there at least one character with blue eyes?
    const blueEyes = characters.some(character => {
        if(character.eye_color === 'blue') return true
        return false
    })
    console.log(blueEyes)

    //Is there at least one character taller than 200?
    const tallChar = characters.some(character => {
        if(character.height>200) return true;
        return false
    })
    console.log(tallChar)
    //Is there at least one character that has mass less than 50?
    const massSmall = characters.some(character => {
        if(character.mass < 50) return true;
        return false
    })
    console.log(massSmall)
    //
