/**
 * Fetch
 * 
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

/**ReferenceError: fetch is not defined */

 /*
 fetch('https://jsonplaceholder.typicode.com/comments/1') // work with apis with this url
 .then(response => response.json())
 .then(data =>console.log(data))
*/
  fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({
          postId:1,
          name: 'Jack',
          body: 'that was sick!!'
      }),
  }) // work with apis with this url
 .then(response => response.json())
 .then(data =>console.log(data))

 /**
 * Fetch - Challenge
 * 
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

//part1
fetch('https://jsonplaceholder.typicode.com/comments/1')
.then((response)=>response.json())
.then(data=> console.log(data))

 fetch('https://jsonplaceholder.typicode.com/comments', {
     method:'Post',
     body: JSON.stringify({
         name:'Jack',
         email: 'jackokramer@yahoo.com',
         postId: 1
     })
 })
 .then((response) =>json())
 .then((data)=> console.log(data))
