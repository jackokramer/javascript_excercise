const fetch = require("node-fetch");

/*
function handleLikePost(step) { // handleLikePost is a higher order function since its returning a function
  let likeCount = 0;
  return function addLike() {
    likeCount += step;
    return likeCount;  
  }
}

const doubleLike = handleLikePost(2); //parial application applies we are using some of the arguments of a function while waiting for the rest of them

console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());
*/

const getData = baseUrl => route => callback =>
        fetch(`${baseUrl}, ${route}`)
        .then(response => response.json())
        .then(data => console.log(data));
        


const getSolcialMediaData = getData('https://json.placeholder.typicode.com')
getSolcialMediaData('/comments');
const getSolcialMediaPosts = getSolcialMediaData('/posts');
getSolcialMediaPosts(posts =>{
    posts.forEach(post => console.log(post.title))
})
const getSolcialMediaComments = getSolcialMediaData('/comments');
getSolcialMediaComments()
//getData('https://json.placeholder.typicode.com', '/post');
//getData('https://json.placeholder.typicode.com', '/comments');

/**
 * FUNCTIONS - How they should be named 
 */

 //functions should be named as verbs since they are performing a certain action

//create a todo
function createToDo(){

}


 //update a todo
 function updateToDo(){

 }
 // check off todo
 function checkCompleteToDo(){

 }
 //delete them

 function deleteToDo(){

 }

 //geting a todo Example fetching a todo
 function getTodo(){}