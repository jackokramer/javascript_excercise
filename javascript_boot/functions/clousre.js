function handleLikePost(step) {
  let likeCount = 0;
  return function addLike() { //closure is preserving the like count in this instance. Direct link of the preservation itself
    likeCount += step;
    return 'like count:', likeCount 
  }
  //addLike();
}

/*
const like= handleLikePost(2)
console.log(like())
console.log(like())
console.log(like())
*/

// Closures are a property of JavaScript functions alone. 
//To observe a closure you must execute or call the function in a different scope than where the function was defined. For
// Helps remember values. Hold onto a value somehow you builld a function with closure to keep track of the value

/**CHALLENGE  */

// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step
/*
// Start
function countDown(startingNum, step) {
    let counts = startingNum + step;
     return function subTracts(){
        counts -= step;
        return counts;
        //console.log(`Subtracting ${count} from ${start}`);
        //if(start === end){
        //    return  countDown //'count down completed';
     //   }
    }
}

const countingDown = countDown(19, 4);

 console.log(countingDown);
// console.log(countingDown());
// console.log(countingDown());
*/

//Closures example:

function handleLikePost(step){
  let likeCount = 0;
  return function addLike(){
      likeCount+=step;
      console.log('like count', likeCount)
      return likeCount;
  }
  //addLike();
}

const doubleLike = handleLikePost(2);
console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());

//closures are a property of javascriptfunctions

//call function in a different scope tha where the function was originally defined


/* CHALLENGE : Write a countdown function with a hard-coded starting number inside closure
 Stretch goal: Write a countdown function that can count from a provided number,
 with a provided step
 */

// Start
function countdown(startingNum, step) {
  let counts = startingNum
  return function minusTheBear(){
    counts -= step;
    console.log('count down', counts)
    return counts
  }
}

 const countingDown = countdown(17,3);

 console.log(countingDown());
 console.log(countingDown());
 console.log(countingDown());
