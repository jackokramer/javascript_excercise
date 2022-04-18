// algo from hacker rank checking versions to see if they're obsolete

function badVersion(version){
    const findBadOne = (left, right)=>{
        if(left < right){
            let mid = Math.ceil((left+right) / 2)
                if(badVersion(mid && (right === mid || left===mid)))
                    return mid
            if(badVersion(mid)){
                return badVersion(0,mid)
            }
            return findBadOne(mid,right)
        }
        return function(n){
            let left = 0, right = n
            return findBadOne(left,right)
        }
    }
}