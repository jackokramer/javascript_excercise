//Given an array of strings group the anagrams together in their own array.
// Input ['eat','tea','nat','tan','ate', bat]
//OUTPUT ['eat', 'tea', 'ate']
//['tan', 'ate']
//['bat']

let list = ['eat','tea','nat','tan','ate', 'bat']

const groupAnagram = (strs)=>{
    let hash = {}
    strs.forEach(str=>{
        let letters = str.split('').sort()
        hash[letters]? hash[letters].push(str):hash[letters] = str //terinary operator
    })
    const keys = Object.keys(hash)
    const values = keys.map(function(x){return hash[x]
    })
    return values
}