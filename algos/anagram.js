//Given two strings ‘a’ and string ‘b’, we have to check if they are anagrams of each other or not and return True/False. For example,

function anagramCheck(a, b){
    if(a.length !== b.length)return false
    const word1 = a.split('').sort().join('')
    const word2 = b.split('').sort().join('')
    return word1 === word2
}

// console.log(anagramCheck('booth', 'tooth'))

console.log(anagramCheck('camry', 'mycar'))
