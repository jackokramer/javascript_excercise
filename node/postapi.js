 const axios = require('axios')

 axios.post('https://ptsv2.com/t/wdv29-1621319997/post', {
     todo: 'Buy the Milk',
 })
 .then((res)=>{
     console.log(`statusCode: ${res.statusCode}`)
     console.log(res)
 })
 .catch((error) =>{
     console.error(error)
 })

const https = require('https')

const data = JSON.stringify({
    todo: 'Buy the milk'
})

const options = {
    hostname: 'ptsv2.com',
    port: 444,
    path: '/t/wdv29-1621319997/post',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
    }
}

const req = https.request(options, (res)=>{
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', (d)=>{
        process.stdout.write(d)
    })
})

req.on('error', (error)=>{
    console.log(error)
})

req.write(data)
req.end()