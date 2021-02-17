//used to fetch data from an api or used for an asynch function name(params) {

//Promises

const byFlighTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const error = false;
            if(error){
                reject('sorry your payment was not successful')
            } else {
                resolve(`your payment was completed Thank you`)
            }

        }, 300)
    })
}

byFlighTicket()
.then((success)=>console.log(success))
.catch((error)=>console.log(error));


/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 * 
*/

class User {
    constructor(firstname, lastName, email){
        this.firstname = firstname;
        this.lastName = lastName;
        this.email = email;
    }
}

const purchaseProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false
            if(error){
                reject(`500 Level - ${this.firstname} ---Your payment was rejected`)
            } else {
                resolve(`We processed your payment ${this.firstname}  ${this.lastName}here's your confirmation number sent to your ${this.email}`)
            }
        },500)
    })
}

purchaseProduct()
.then((error)=>console.log(error))
.catch((success)=>console.log(success))