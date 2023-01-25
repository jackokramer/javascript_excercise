/* Alternating Caps
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/



function altCaps(str){
    //loop through the string
    let newStr =  ''
    // upcase every character with an even index
    for(let x = 0; str.length>x; x++){
            if(x%2===0){
                newStr += str[x].toUpperCase()
            } else {
                newStr += str[x]
            }
    }
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

