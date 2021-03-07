// recusive Binry Search

function rBinary(key, array, min, max){
    let tArray = array.slice();
    if(min === undefined) min = 0;
    if(max === undefined) max = array.length -1;

    let guess = Math.floor((max-min)/2)+max;
    if(max<=min && tArrayp[guess]!== key) return null;
    else if(tArray[guess]== key)return guess;
    else if(tArray[guess]<key)
    return rBinary(tArray,key,guess+1,max)
    else return rBinary(tArray,key,min, guess-1);
}

console.log(rBinary(3, [1,2,3,4,5,8,9,22,25,31,42], 1, 42));