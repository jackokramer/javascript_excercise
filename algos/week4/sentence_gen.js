//Generate a sentence that takes two parameters. It should return a string back upon the description of the array.
//Example If you pass the largest countries and  ['USA', 'China', 'India']. It should return the three largest countries are China, India, USA.

//let largestCountries = ['USA', 'China', 'India']

const generateSentence = (desc, arr)=>{
    let baseString = `The ${arr.length} are ${desc} `
    const lastIndex = arr.length - 1
    for(let x = 0; arr.length>x; x++){
        if(x === lastIndex){
            baseString +=arr[x]
        } else {
            baseString += arr[x] + ','
        }
    }
    return baseString
}

const sentence = generateSentence('highest mountains', ['K2', 'Mount Fuji', 'Mount Everest'])

console.log(sentence)