/* Find anagrams in an array

When two words have the exact same letters, they are anagrams.

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher".

Write a function to determine which strings in the array are
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase.

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams?
 */

const anagrams = [
    "moz biblical torchbearers",
    "it's razorbill beachcomber",
    "och mcrobbie trailblazers",
    "bib chorizo cellarmaster",
    "thor scribble carbimazole",
    "zilla borscht abercrombie",
    "brazil scorcher batmobile",
    "dame shelburne characterizing",
    "uber englishman characterized",
    "agnes rhumbline characterized",
    "rehab scrutinized charlemagne",
    "dreams zurich interchangeable",
    "bam hamster technocratic",
    "mechatronic masterbatch",
    "bam ratchet mechatronics"
]

function isAnagramInArray(anagram, arr){

}

function isAnagram(str1, str2){
    if(str1.length!== str2.length){
        return false
    } else {
        const newStr1 = str1.split().sort().join()
        const newStr2 = str2.split().sort().join()
        console.log(newStr1, newStr2)
        return newStr1 === newStr2
    }
}

//  reviewed

console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));
