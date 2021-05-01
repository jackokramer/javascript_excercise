/*doSomething()
function doSomething(){
    console.log('done with this task')
}

console.log(doSomething())

function doSomething(){
    console.log('I did it.')
}

doSomething()

*/


/*dosomething()
const dosomething = function dosomething(){
    console.log('I did something');
}
*/

/* SCOPE*****
let name ="Callie"

function run(){
    console.log(`running with ${name}`);
    let name = 'Rosie'
}

run()
*/

//Immediately Invoked function expressions - a way to execute functions immediately as soon as they're created
/*
//console.log('test')

(function doSomething(){
    // add code here
})()

// also completed with arrows
(const didSomething = function()=>{

})()
*/

const car  = {
    maker: 'Ford',
    model: "fiesta",

    drive(){
    console.log(`Riding in style!!! Driving a ${this.maker} ${this.model} car`)
    },
    stop(){
        console.log(`stopping in a ${this.maker} ${this.model} since there is a....`)
    }
}

car.drive()
car.stop()

car.accelerate =  function(){
    console.log(`going fast in a ${this.maker} ${this.model}`)
}

car.accelerate()

document.querySelector('#button').addEventListener('click', function(a){
    console.log(this)
})

const action = 3

switch(action){
    case 'added item':
    /**Do Something */    
    break
    case 'removed item':
        /**Do Something */    
    break
    deafult: 
    break
}