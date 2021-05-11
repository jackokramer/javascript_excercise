const todos = []

const todo1 = {
    text: 'Wash the dishes',
    complete: false
}

const todo2 = {
    text: 'Do Laundry',
    complete: false
}

//todos[0] = todo1;
//todos[1] = todo2;

todos.push(todo1, todo2);
console.log(todos);

const index = [todos.length-1]

console.log(index)

//objects don't preserve the orders, we can't know anything related to the order

//create them with an initial value

// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 


const favouriteSongs = []

const song1 = {
    title: 'Torniquet',
    artist: 'Marilyn Manson',
    label: 'Epic',
}

const song2 = {
    title: 'Hunks of Burning Love',
    artist: 'Elvis Preseley',
    label: 'RCA',
}

const song3 = {
    title: 'When the Levee Breaks',
    artist: 'Led Zepplin',
    label: 'Swan Song',
}

favouriteSongs.push(song1, song2, song3)

//console.log(favouriteSongs[2])
console.log(favouriteSongs[favouriteSongs.length -1])

//favouriteSongs.pop()

//console.log(favouriteSongs)