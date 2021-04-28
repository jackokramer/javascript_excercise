console.log('before')

setTimeout(() =>{
    console.log('inside the function')
}, 2000)

console.log('after')

const doSomething = callback => {
    //do things
    const result = 'test'
    //callback(result)
}

console.log(doSomething)

doSomething(result => {
    console.log('result')
})

///Promises

/*doSomethings()
.then((result)=>{
    console.log(result)
    })
    .catch((error) => {
        console.log(result)
    })
    */

    const doOtherThings = () => new Promise((resolve, reject)=>{
        const success = 'new product purchased'
        if(success === true){
          resolve('ok product purchased')
        } else {
          reject ('this error happened')
        }
    })

    // async await

    const doWork = () => new Promise((resolve, reject)=>{
        //do something
        const result = false
        if(result === true){
          resolve('ok')
        } else {
          reject('error!')
        }
      })
    
    ;(async ()=>{ // only time to use a semi-colon  
      try{
      const result = await doWork()
      console.log(result)    
      } catch (error){
        console.log(error)
      }
    
    }) ()

    const doSomethingAsync = () =>{
        return new Promise(resolve => {
          setTimeout(()=> resolve('I did soemthing'), 3000)
        })
      }
      
      const doSomethingNew = async () => {
        console.log(await doSomethingAysnc())
        }
      
      console.log('before')
      doSomething()
      console.log('after')

