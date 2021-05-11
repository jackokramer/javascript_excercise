const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]
//map just returns an array to us with the same length

// retrieve the information in the array we want

const startC =restaurants.filter(restaurant => restaurant.name.startsWith('C')) //does not change the original

const startZ =restaurants.filter(restaurant => restaurant.name.startsWith('Z'))// empty array
//console.log(startC)

const startCAndThree =restaurants.filter(restaurant => restaurant.name.startsWith('C') && restaurant.milesAway < 3
)

console.log(startCAndThree)

//find method

const results = restaurants.find(restaurant =>
    restaurant.name.toLowerCase().includes('north')&& restaurant.milesAway<2)

console.log(results)