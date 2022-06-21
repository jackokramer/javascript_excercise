//linear seach is also known as simple search or sequential, most basic seach algorithm. Given a data struture, like an array, we search for an item by looking at all the elements, until we find it.
//Not very effective.

const linearSearch=(list, item )=>{
    for(const [x, element] of list.entries()){
        if(element === item){
            return x
        }
    }
}

console.log(linearSearch(['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o'], 'n'))