// Search Insert Position
/**
 * Given a sorted array of distinct integers and a target value, return the indexif the targey is found. If not, return the index where it would be if inserted in that order
 */

const searchInsertPosition = (nums, target) =>{
    let left = 0
    let right = nums.length - 1
    while (left <= right){
        const mid = left + Math.floor((right - left) / 2)
        if(nums[mid]===target){
            return mid
        } else if (nums[mid]>target){
        right = right-1
    } else{
        left = mid +1
    }
}
}

console.log(searchInsertPosition([1,2,4,7,9,13,16,18,], 7))