/*
 * Implement a method that takes a string as input. Assume the string is a well-formed English paragraph.
 * The method should return the word that occurs most frequently in the string.
 */
// taking the most used word in a paragraph and highlighting it.

let string = 'how do you do'

function mostRepeatedWord(string) {
  let words = string.match(/\w+/g)
  console.log(words)

  let occurances = {}

  for(let word of words){
    if(occurances[word]){
      occurances[word]++
    } else {
      occurances[word]=1
    }
  }
console.log(occurances)

let max = 0;
let mostRepeatedWord = ''

for (let word of words){
  if(occurances[word]>max){
    max= occurances[word]
    mostRepeatedWord = word
  }
}
  return mostRepeatedWord
}

//  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ducimus?
//Nostrum reprehenderit culpa error rerum molestiae aperiam necessitatibus unde minima nulla, ab nemo debitis obcaecati quae sapiente neque ducimus quisquam numquam earum, ea quis nobis laborum praesentium possimus iusto? Laboriosam!</p>

/*
 * Implement an immutable class in JavaScript. The class should fully encapsulate an
 * array of integers, an arbitrary data object, and a Date and allow clients
 * to specify all three when the class is constructed. Once instantiated, the value
 * of each property should not change.
 */
"use strict"


class Immutable{
    constructor(array, arbitrary, date){
    this.array =[]
    this.arbitrary =  new Object(undefined) // a javascript object
    this.date = ''
    Object.freeze(this)
    }
}

//const Immutable = new Immutable([1,4,5,7], '8/18/2021')
