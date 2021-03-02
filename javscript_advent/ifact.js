// iterative factorial
function iFact(num){
    let mult = 1;
    for(let x = 1; x <=num; x++){
        mult *= x;
    }
    return mult;
}

console.log(iFact(9))

// recursive factorial
function rFact(num){
    if(num === 1){
        return 1
    } else{
        return num*rFact(num-1);
    }
}

console.log(rFact(10))