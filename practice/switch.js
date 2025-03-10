/**
 * Price list
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
 */

// For Example you've selected Salad. That will be $4

//multiple item example

function selectIem(item){
    let price = 0
    switch(item){
        case `coffee`:
            price =2
            break
        case `sandwiche`:
            price =5
            break
        case `Salad`:
            price =4
            break
        case `Lemon Cake`:
            price =3
            break
        default:
            return `Sorry we don't sell this item ${item}. Goodbye`
    }
    return `You selected ${item}. That will be ${price}`
}
console.log(selectIem('Cheese Cake'))