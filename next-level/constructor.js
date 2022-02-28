// function Animal(){
//     this.species = 'tiger',
//     this.weight = 56,
//     this.age = 4
// }

// //this refers to the new object we're creating

// const animal1 = new Animal

// console.log(animal1)

const animalForRelease1 = {
    name: 'Tilly',
    species: 'tiger',
    weightKg: 56,
    age: 2,
    dateOfRelease: '03-02-2022'
}
const animalForRelease2 = {
    name: 'Nelly',
    species: 'elephant',
    weightKg: 320,
    age: 16,
    dateOfRelease: '03-02-2022'
}

function Animal(data){
    this.name = data.name
    this.species = data.species
    this.weight = data.weightKg
    this.age = data.age
    this.dateOfRelease = data.dateOfRelease
    this.summary = function(){
        console.log(`${this.name} is ${this.age} years old and weight ${this.weight} and ${this.species}`)
    }
}

const lilyTiger = new Animal(animalForRelease1)

const nellyElephant = new Animal(animalForRelease2)

console.log(lilyTiger)
console.log(nellyElephant)

lilyTiger.summary()
nellyElephant.summary()