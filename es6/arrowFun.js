//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

//arrow function

const dinnerMenu = (food) => `time to cook the chicken and prep the ${food}` //useful to put a short function on one line


console.log(dinnerMenu('chicken salad')) // to invoke the function