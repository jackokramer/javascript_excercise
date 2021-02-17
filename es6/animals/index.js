import {Animal, Cat} from './animals.js';

let cat = new Animal('Cat', 5);

//cat.legs = 4;
cat.makeNoise("meow");
console.log(cat.legs) // we have access to the properties defined in the constructor found in the animals file


console.log.log(cat.metadata)
console.log(Animal.return10())
// static allows us to create a function

cat.makeNoise();

