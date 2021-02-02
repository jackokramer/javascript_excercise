const { CompositionHookList } = require("twilio/lib/rest/video/v1/compositionHook");

const nums ={
    1:1,
    true: true
}

Object.keys(nums).length;

console.log(Object.keys(nums)) //lacks flexibility

//Maps are just like Objects +
//Object

/*
const map1 = new Map([
    ['key', 'value'],
    [1, 1],
    [true, true]
]);

map1.set('key', 'value'); // set mutates our original map object 

console.log([...map1.keys()]); //normal objects are unordered while maps provide orderedChildSegments

map1.forEach((value, key) =>{
    console.log(key,value);
})
*/
// can we use an entire object as a key in our map

const user1 = {name: 'jack'}
const user2 = {name: 'jocelyn'}

const secretKey1 = "asdjaksjdkajks"
const secretKey2 = "weiourewijk"

const map2 = new WeakMap([
    [user1, secretKey1],
    [user2, secretKey2]
])

console.log(map2)
const key1 = map2.get(user1)

console.log(key1)


new Map([
    ["name", 'jaxk'],
    ['verifeid', true]

])
//WeakMap variaent of map used for garbage collection - only accepts objects as keys use when this benefit is present

// Challenge: 
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

const music = {name:'jazz'}

const favtoritePlace = new Map([
    ['music', 'jazz'],
    ['names', 'Paris House'],
    ['visted', true],
    ['averageBill', 50]
]
);

console.log(favtoritePlace)
console.log(favtoritePlace.get('averageBill'))