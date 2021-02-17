/*function handleLikePost(step) {
    let likeCount = 0;
    return function addLike() {
        likeCount += step;
        return likeCount
    }
}

const doubleLike = handleLikePost(2);

console.log(doubleLike())
console.log(doubleLike())
console.log(doubleLike())

//partial application refer to the application of part of the arguments but not all of them
*/
function getData(baseUrl){ //moved route to the inner function
    return function (route){
        // add another inner anonymous function
        return function(callback){
    fetch(`${baseUrl}${route}`)
    .then(response => response.json())
    then(data => console.log(data));
}
    }
}

const getSocial = getData('https://jsonplaceholder.typicode.com', '/posts') //higher order functions make them more clear of what they do
const getSolcialMediaComments = getSocial("/comments")
const getSolcialMediaPosts = getSocial("/posts")

getSocial("/posts")

getSolcialMediaPosts(posts=>{
    posts.forEach(post => console.log(post.title));
})

//partail appication removes