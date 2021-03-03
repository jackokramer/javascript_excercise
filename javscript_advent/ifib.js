function ifib(num){
    let fibs = [0,1];
    for(let x = 0; x<num; x++){
        fibs.push(fibs[0]+fibs[1]);
        fibs.shift();
    }
    return fibs[0]
}

console.log(ifib(9))


// recursive fibonacci

function rFib(num){
    if(num === 1 || num ===2){
        return 1
    } else {
        return rFib(num-1)+ rFib(num-2);
    }
}

console.log(rFib(12))