//const pizza = fetch('https://foodish-api.herokuapp..com/api/images/pizza HTTP/1.1',
//const json = await req.json()
//{
//    'method': 'GET',
//    "headers": {
//        "user-agent": ""
//    }
//})
//.catch(err => {
//    console.log(err)
//});

(function async(){
    const container = getElementById('container')
    console.log(container)
    const req = await fetch('https://foodish-api.herokuapp.com/api/images/pizza')
    const json = await req.json()
    const pizza = json.images
    const img = document.createElement('img')
    img.src = pizza
    console.log(img)
})()