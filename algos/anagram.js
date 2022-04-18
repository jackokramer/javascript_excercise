//Given two strings ‘a’ and string ‘b’, we have to check if they are anagrams of each other or not and return True/False. For example,

function anagramCheck(a, b){
    let lenOne = a.length
    let lenTwo = b.length
    if(lenOne !== lenTwo){
        console.log('Invalid Input')
        return
    }
    let word1 = a.split(' ').sort().join(' ')
    let word2 = b.split(' ').sort().join(' ')
    if(word1 === word2) {
        console.log('True')
    } else {
        console.log('false')
    }
}

//console.log(anagramCheck('booth', 'tooth'))

console.log(anagramCheck('camry', 'mycar'))
