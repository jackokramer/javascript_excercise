// Get Maximum in a Generated array
/**
 * You are givn an integer n A 0 indexed integer array. Nums of length n+1 is generated the following way.
 * nums[0] = 0
 * nums[1] = 1
 * nums[2 *1] = nums[i] when 2<=2*i <=num
 * nums[2*i+1] = nums[i] + nums[i +1] when 2 <2=2*2 i +1 <=nums
 * Return the maximum integer in the array nums
 */
// Recursive Solution

let obj={}

const getMaxGenArray = (n) =>{
    if(n===0) return 0
    if(n===1) return 1
    if(n===2) return 2

    if(obj[n] ===undefined){
        if(n%2 ===0){
            obj[n]= answer(n/2)
        } else {
            let temp = (n-1)/2
            obj[n]=answer(temp)+ answet(temp+1)
        }
    }
    return obj[n]
    let max = -Infinity
    for(let x =0; x<=n; x++){
        max = Math.max(max, answer(x))
    }
    return max
}

// not working.....