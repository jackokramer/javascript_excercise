const todos = []

const todo1 = {
    text: 'Wash the dishes',
    complete: false
}

const todo2 = {
    text: 'Do Laundry',
    complete: false
}

todos[0] = todo1;
todos[1] = todo2;


console.log(todos);

//objects don't preserve the orders, we can't know anything related to the order

//create them with an initial value