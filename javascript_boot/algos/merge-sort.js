let defaultCompare = (a, b) =>
    a>b ? 1 : (a<b ? -1 : 0);

    /** My attempt 
function merge(arr, start, mid, end) {
    let temp = [];
    let i = start
    let j = mid+1
    let k = 0
    while(i<=mid && j <= end){
        if(arr[i] <= arr[j]){
            temp[k] = temp[i]
        } else {
            temp[k] = arr[j]
        }
    }
}
*/

let mergeSort = (
    array,
    start = 0, 
    end = array.length,
    compare = defaultCompare,   
) => {
    let length = end - start;
    if(length <=1){
        return array.slice(start, end)
    }

    // divide by
    let pivot = Math.floor(length / 2);

    //conquer 
    let left = mergesort(array, start, start + pivot, compare);
    let right = mergesort(array, start+ pivot, end , compare);

    //combine
    let sorted = [];
    let x = 0, j=0
    for(let k =0; k<length; k++){
        if(x<left.length && compare(left[x], right[j]) <=0){
            sorted.push(left[x]);
            x++
        } else {
            sorted.push(right[j]);
            j++
        }
    }
    return j
}

console.log(mergesort(array, start))

export default mergeSort