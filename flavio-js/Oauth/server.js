const app = express('app')


app.get("/callback", (req, res)=>{
    const code = req.query.code

    axios.post(`https://github.com//login/oauth/access_token`, {
        clientId: 'sdhjsdkhfj219038n',
        client_secret: 'sdhjsdkhfj219038n',
        code
    })
    .then((res)=>{
        consol.log(res.data)

        const params = new URLSearchParams(res.data)
        const access_token = params.get('access_token')
        axios.get('https://github.com/user',{
        headers:{
            "authorization": `token${access_token}`,
    }
})
    .then((res)=>{
    consoe.log(res.data)
})
    })
    .catch((err)=>{
        console.error(err)
    })
    response.end()
})



.catch((err)=>{
    console.log(err)
})