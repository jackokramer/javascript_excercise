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

//Two Nums

var addTwoNumbers = function(l1, l2) {
    let newNode = new ListNode(0);
    let head = newNode
    var carry = false
    while(l1 || l2){
        var nodeSum =  (l1?.val || 0) +  (l2?.val || 0);
        nodeSum  += (carry) ? 1 : 0;
        if(nodeSum > 9){
            carry = true
        }else{
            carry = false
        }
        head.next = new ListNode(nodeSum % 10)

        if(l1)l1 = l1.next;
        if(l2)l2 = l2.next;

        head = head.next
    }
    if(carry){
         head.next = new ListNode(carry);
    }
    return newNode.next
};