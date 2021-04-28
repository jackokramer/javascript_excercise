let names = ['jack', 'geoff', 'june', 'michelle', 'sabine', {age: 37}]

names[3] = 'Megan'

console.log(names)
console.log(names[5])

names.unshift('Maddy')
console.log(names)

const fruits = ['apples', 'oranges', 'bananas']

fruits.push('appricots', 'melons', 'cherries')

console.log(fruits)

const allFruits = fruits.concat('mango', 'melon', 'avocado')

console.log(allFruits)

allFruits.shift()

console.log(allFruits)

const array = [1,3,5,6]

array.includes(7)
array.includes(3)

array.find((element, index, array)=>{
  if(element === 2){
    return true
  }
})

const cars = [
  {
    color: 'blue',
    maker: 'Ford',
    model: 'Fiesta'
  },
  {
    color: 'yellow',
    maker: 'Chevy',
    model: 'Impala'
  }
]
cars.find((element, index, array)=>{
  if(element.color === 'blue'){
    return true
  }
})
console.log(cars)