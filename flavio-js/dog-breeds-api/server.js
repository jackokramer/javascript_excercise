//Performing a GET Request with XHR
const data = JSON.stringify({
  name: "Roger",
  age: 8,
})

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', function(){
    xhr.withCredentials = true
    if(this.readyState===this.DONE){
        const breeds = JSON.parse(this.responseText).message;
        for(const breed in breeds){
            console.log(breed)
        }
    }
})

xhr.open("GET", "https://dog.ceo/api/breeds/list/all")
xhr.open("POST", "https://dog.ceo/api/breeds/list/all")
xhr.setRequestHeader("content-type", "application/json")
xhr.setRequestHeader("authorization", "Bearer 123abc456def")

xhr.send()

//fetch api response
;(async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all", {
        method:"GET"
})

const data = await response.json()
for(const breed in data.message){
    console.log(breed)
}
})()

//POST REQUEST fetch APi

;(async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all", {
        method:"POST",
        headers: {
            "content-type": "application/json",
            authorization: "Bearer 123abc456def",
        },
        body:{
            name: "Roger",
            age: 8
        },
})
 console.log(response.data)
})()
//NODE HTTPS MODULE EXAMPLES
const http = require('https')

const options = {
    method : "GET",
    hostname: "dog.ceo",
    path: "/api/breeds/list/all"
}

const req = http.request(options, (res)=>{
    const chunks = []
    res.on("data", (chunk)=>{
        chunks.push(chunk)
    })

    res.on('end', ()=>{
        const body = Buffer.concat(chunks)
        const data = JSON.pass(body.toString())
        for(const breed in data.message){
            console.log(breed)
        }
    })
})

req.end()

//request.node library

const request = require('request')

const options = {
    method : "GET",
    url : "http://dog.ceo/api/breeds/list/all",
    json : true
}

request(options,(error, response, body) => {
    if(error) throw new Error(error)
    for(const breed in body.message){
        console.log(breed)
    }
})

//Axios example

const axios = require('axios')
 const getBreeds = async()=>{
     try {
         return await axios.get("https://dog.ceo/api/breeds/list/all")
     } catch (err) {
         console.log(error)
     }
 }

 const countBreeds = async () => {
     const breeds = await getBreeds()
     .then(response => {
     if(response.data.message){
         console.log(`Got ${object.entries(breeds.data.message).length} breeds`
         )
     }
 })
 .catch(error =>{
     console.log(error)
 })
 }
 countBreeds()


//AXIOS POST request
const axios = require('axios')
;(async()=>{
    const response = await axios.post("https://dog.ceo/api/breeds/list/all",
    {
        name: "ROger",
        age: 8
    },
    {
    headers:{
        "content-type": "application/json",
        authorization:"Bearer 123abc456def"
    },
}
    )
    console.log(response.data)
})()
