let contacts = ['Mary', 'Joel', 'Jane'];

let personalFriends = ['David', ...contacts, 'Lily'];// spread operator ... adding a name to front will add it to the front of the array

contacts.push('Jonny');

console.log(personalFriends)


let person = {
    name: 'Adam',
    age: 56,
    city: 'Los Angeles'
}

let employee = {
    ...person,
    position: 'gutarist',
    band: 'the melvins'
}

console.log(employee)

/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = ['chicken',...shoppingList, 'salad', 'cheese'];

console.log(shoppingBasket)