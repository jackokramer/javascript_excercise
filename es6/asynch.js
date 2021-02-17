const photos = [];

async function photoUpload(){
    let uploadStatus = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            photos.push('Profile Pic');
            resolve('Photo Uploaded')
        },3000)
    })
    let result = await uploadStatus; // call the async function using await

    console.log(result)
    console.log(photos.length)
}

//photoUpload()

//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function badJokes(){
    let response = fetch(apiUrl);
    const data = await response.json()
}
badJokes()