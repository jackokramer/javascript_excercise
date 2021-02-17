export class Animals {
    constructor(type, legs){
        this.type = type;
        this.legs = legs; //construtor assigns the values to our class
    }
    makeNoise(sound = 'Loud!!'){
        console.log(sound);
    }
    get metadata(){
        return `Type: ${this.type}, legs: ${this.legs}`
    }
    static return10(){
        return 10
    }
}

export class Cat extends  Animals{ // will allow us to inherit some classes in the animals property
    constructor(type, legs, tail){
        super(type, legs);
        this.tail = tail;
    }
    makesNoises(sound='Meow'){
        console.log(sound);
    }
}