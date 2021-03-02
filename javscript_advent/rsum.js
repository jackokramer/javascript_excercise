
//recusrsive sum
function rSum(num){
    if(num==1){
        return 1
    } else {
        return num + rSum(num-1);
    }
}

console.log(rSum(9));


//iterative sum
function iSum(num) {
    let sum = 0;
    for(let x = 1; x<= num; x++){
            sum +=x;
    }
    return sum
}

console.log(iSum(10))