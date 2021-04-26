const cloneDeep = 
      require('lodash.clonedeep')


class Person  {
  constructor(name){
    this.name = name
  }
  speak(){
    return 'Hello, I am ' + this.name + '.'
  }
}

let flavio  = new Person('Flavio')

//console.log(flavio)
flavio.speak('hola')

class Student {
  hello(){
    return 'hello I am Jack'
  }
}

const jack = new  Student()
jack.hello()

class Individual {
  static genricHello(){
    return 'Hello Mate how are you?'
  }
}
Individual.genricHello()

class Programmer extends Person{
  hello(){
    return super.hello() + 
      '. I am a programmer too.'
  }
}

const june = new Programmer()
//june.hello()

const car ={
  color: 'blue',
  owner: {
  name: 'jack'
}
}

const truck = Object.assign({}, car)
car. owner.name
truck.color = 'yellow'
car
truck
truck.owner.name = "bill"
console.log(truck)