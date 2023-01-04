// reverse Odds

const reverseOdds=(str)=>{
    let newStr = str.split(" ").map(e=>{
        if(e.length %2 !==0){
            return e.split(' ').reverse().join(' ')
        } else {
            return e
        }
    })
    return newStr.join(' ')
}

console.log(reverseOdds('Make sure uoy only esrever sdrow of ddo length'))