let fruit = ["🍎", "🍊", "🍎", "🍌", "🍎", "🍌", "🍊", "🍌" ]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let bannaShelf = document.getElementById("banana-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function fruitShelf(){
    for(let x = 0; x<fruit.length; x++){
        if(fruit[x] === '🍎'){
            appleShelf.textContent += fruit[x]
        } else if(fruit[x] === '🍊'){
            orangeShelf.textContent += fruit[x]
        } else if(fruit[x] === '🍌'){
        bannaShelf.textContent = fruit[x]
        }
    }
}

fruitShelf()