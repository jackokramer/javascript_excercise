/*
 * Implement a method that takes a string as input. Assume the string is a well-formed English paragraph.
 * The method should return the word that occurs most frequently in the string.
 */
// taking the most used word in a paragraph and highlighting it.

function mostFrequentWord(str){
    let words = str.match(/\w+/g)
    console.log(words)
    let occurances ={}
    for(let word of words){
        if(occurances[word]){
            occurances[word]++
        } else {
            occurances[1]
        }
    }
    console.log(occurances)
    let max = 0
    let mostRepeat = ''
    for(let word of words){
        if(occurances[word]> max){
            max = occurances[word]
            mostRepeat = word
        }
    }
    return mostRepeat
}


const str = "Over the hills and far away. from all the jerks and getting in the car and leaving on a roadtrip"

console.log(mostFrequentWord(str))

/*
 * Implement an immutable class in JavaScript. The class should fully encapsulate an
 * array of integers, an arbitrary data object, and a Date and allow clients
 * to specify all three when the class is constructed. Once instantiated, the value
 * of each property should not change.
 */

class Immutable{
    constructor(int, arbyJ, date){
        this.int = 0
        this.arbyJ = this.bigInt()
        this.date = this.getFullYear()

        Object.freeze(this)
    }
}

const objectNews = new Immutable(17, 'jackokramer', 2021)

console.log(objectNews)