function arrayReplace(arr, elemtoReplace, substElem){
    for(let i = 0; i < arr.length; i++){
        if(elemtoReplace === arr[i]){
            substElem = arr[i];
        }
    }
    return arr
}