//find the first and last position of an element in a sorted array

function searchRange(nums, target){
    if(!nums) return [-1,-1]
    let res = new Array()
    for(let first = 0; first<nums.length; first++){
        if(nums[first]===target){
            res.push(first)
            break
        }
        if(first ===nums.length){
            res.push(-1)
        }
    }
    for(let last = nums.length; last>0; last--){
        if(nums[last]=== target){
            res.push(last)
            break
        }
        if(last===0){
            res.push(-1)
        }
    }
    return res
}