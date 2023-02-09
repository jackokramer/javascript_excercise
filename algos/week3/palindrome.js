//given an integer return true if x is a palindrome integer.

// reverse your input string

const isPalindrome=(str)=>{
    let emptyStr =``
    for(let x=str.length-1; x>=0; x--){
        emptyStr+= str[x]
    }
    return emptyStr === str
}

console.log(isPalindrome(`abba`))
console.log(isPalindrome(`civic`))