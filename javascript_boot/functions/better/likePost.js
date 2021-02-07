/*const handleLikePost = (step)  =>{ //partial application not using all arguments but using some and waiting for the rest
  let likeCount = 0;
  return function addLike() {
    likeCount += step;
    return likeCount;  
  }
}

const doubleLike = handleLikePost(2);

console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());
*/
//import "isomorphic-fetch"

const fetch = require('node-fetch')

function getData(baseUrl, route){
    fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data=> console.log(data))
}

getData('https://jsonplaceholder.typicode.com', '/posts')