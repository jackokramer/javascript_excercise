const http = require('http')

const server = http.createServer((req, res) => {
  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)
/*
const http = require('http')

const server = http.createServer((req, res)=>{
    //req = request
    //resolve
    console.log(req)
    if(req.url === '/'){
    res.end('Welcome to our home Page!')
  }
  else if(req.url === '/about'){
      res.end('here is our short history')
  } else{
  res.end(`
      <h1>Oops page does not exist</h1>
      <p>Can't seem to find the page</p>
      <a href="/"> back home</a>
  `)
    }
})

server.listen(5001)
*/