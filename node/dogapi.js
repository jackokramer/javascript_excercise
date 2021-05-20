const https = require('https');
const options ={
    hostname: 'dog.ceo',
    port: 443,
    path: '/api/breeds/list/all',
    method: 'GET',
}

const req = https.request(options, (res) =>{
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', (d)=>{
        process.stdout.write(d)
    })
})

req.on('error',(error)=>{
    console.log(error)
})

req.end()