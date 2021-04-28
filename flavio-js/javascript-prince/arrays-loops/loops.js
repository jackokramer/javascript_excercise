// WHILE LOOPS


//let count = 10


/*
while(count >=0){
  //loop until the condition evaluates to false
}
*/

//....
/*
do{
  //loop
} while(count>=0)
*/

const list = ['a','b','c','d','e'];
let z = 0;
while(z<list.length){
  console.log(list[z])//value
  console.log(z)//index
  z = z+1
}

/*
while(true){
  if(somethingIsTrue) continue
  // do something else
    break
}
*/
// do while 
do{
  console.log(list[z])
  console.log(z)
  z = z + 1
} while (z<list.length)

//FOR LOOPS

for(let count = 10; count >=0; count --){ // condition, a centralized  place, for increment and condtion check
    //loop
    if(count >= 0) {
      count --;
    }
  }
  

  const listNew = ['a','b','c','d','e']

for(let z = 0; z<listNew.length; z++){
  console.log(listNew[z])//value
  console.log(z); //index
}


//for ..of LOOPS

const list = ['a', 'b', 'c', 'd']

for(const value of list){
  console.log(value)//value
}

//forEach()

const newList = [1,2,4,6,7,8,10]
newList.forEach((item)=>{
  console.log(item)
})
newList.every((item)=>{
  if(item === 2) return true
  return false
})//false

const aList = [1,4,7,12]
aList.some((item)=>{
  if(item===2) return true
  return false
})//true