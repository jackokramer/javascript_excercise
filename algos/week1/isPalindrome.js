//given an integer return true if x is a palindrome integer.

const isPalindrome = (x) =>{
    if(x<0||(x!==0 && x%10 ===0)) return  false
    let reversed = 0
    while(x> reversed){
        reversed = reversed*10 + x %10
        x = ~~ (x/10)
    }
    return x === reversed || x === ``(reversed)
}