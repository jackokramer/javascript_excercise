// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

function search(budget, prices) {
  let newPrices = []
  // prices = []
  //budget = number
  for(let x = 0; x<prices.length; x++){
    if(prices[x] <= budget){
        newPrices.push(x)
        console.log('in my budget')
        } else {
      console.log('out of my budget')
      }
    }
    return newPrices
// return array of prices that are within budget
}

console.log(search(7,[1,12,5,6,9]))

const coffeeBudge= (budget, prices)=>{
    prices.filter(element => element <= budget)
    .sort((a,b)=> a-b)
    .join(',')
}