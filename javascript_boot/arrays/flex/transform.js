const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }
];

/*
const accumlate = menuItems.reduce((accumlator, menuItem)=>{
    console.log(`
    accumulator: ${accumlator}, 
    menu item price ${menuItem.price}
    `)
    return accumlator + menuItem.price;// kind of storage where you can store what you like there
},0); //iterates over each element
*/
//console.log(accumlate);

// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];

const carWeight = cars.reduce((accumlate, car)=>{
    if(car.isElectric){
    //console.log(`All cars weigh weighs `)
    return accumlate + car.weight;
    } else {
        return accumlate;
    }   
}, 0)

console.log(carWeight)