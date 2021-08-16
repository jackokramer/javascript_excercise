const twoSum = function(target, nums){
    const map = new Map()
    for(let x = 0; x < nums.length; x++){
        const need = target - nums[x]
        if(map.has(need) && map.get(need) !==x){
            return [x, map.get(need)]
        }
        map.set(nums[x], x)
    }
}


var twoSums = function(target, nums){
    const map1 = new Map()
    for(let x  = 0; x<nums.length; x++){
        let goal = target - nums[x]
        if(map1.has(goal)){
        return  [map1.get(goal), x]
        }
        map1.set(nums[x], x)
    }
}