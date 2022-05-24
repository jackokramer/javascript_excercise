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

//FILTER

    //Get characters with mass greater than 100
    const massGreater = characters.filter(person => person.mass>100)
    //console.log(massGreater)
    //Get characters with height less than 200
    const heightLess = characters.filter(person => person.height<200)
    //console.log(heightLess)
    //Get all male characters
    const male = characters.filter(person => person.gender === 'male')
    // console.log(male)
    //Get all female characters
    const female = characters.filter(person => person.gender === 'female')
console.log(female)