let [firstname, hobby, lastName] = ['Jaxk', 'self dooer', 'kramer'];

firstname = 'Jax'

//console.log(firstname + hobby + lastName);

//object literals
function addressMaker (city, state){
    const newAddress ={newCity: city, newState: state}; //object literals
    console.log(newAddress);
}

addressMaker('San Francisco', 'California')

//Challenge2 

function addressMaker(address) {
    const {city, state} = address// his solution
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`)
    
}

//here  i am....