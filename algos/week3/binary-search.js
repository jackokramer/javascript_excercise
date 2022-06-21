/*******
 *Binary search assumes the array (any data structure) you are searching through is in order.seed
 Parameters array, item we need to search for
Part the array into two parts
Binary Search has a 0(log n) complexity
 */

const binarySearch= (list, item) => {
    let low = 0
    let high = list.length - 1
    while(low<=high){
        const mid = Math.floor((low + high)/2)
        const guess = list[mid]
        if(guess === item){
            return mid
        }
        if(guess>item){
            high = mid-1
        } else {
            low = mid+1
        }
    }
    return null // if not found
}

console.log(binarySearch([1,2,3,4,5,6,8,9], 7))