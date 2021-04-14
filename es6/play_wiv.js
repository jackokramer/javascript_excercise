let users = [
    {
        name: "jack",
        age: 29
    },
    {
        name: 'Jejak',
        age: 32
    },
    {
        name: 'Rosie',
        age: 27
    }
]

console.log(users[0].age)

console.log(users[1].name)

for(let x  = 0; x< users.length; x++){
    console.log(users[x].name, '-' , users[x].age )
}