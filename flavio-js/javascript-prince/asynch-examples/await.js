const promiseToDoSomething= () =>{
    return new Promise(resolve => {
      setTimeout(()=> resolve('I completed the task'), 10000)
    })
  }
  
  const watchOverSomeoneDoingSomthing = async () =>{
    const something = await promiseToDoSomething()
    return something + ' and I watched'
  }
  
  const watchOverSomeoneElse = async () =>{
    const something = await watchOverSomeoneDoingSomthing()
    return something + ' and I watchd as well'
  }
  
  watchOverSomeoneElse().then(res => {
    console.log(res)
  })