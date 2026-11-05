const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let stageEl = document.getElementById("stage")
let passwordGenButton = document.getElementById("generate-password")
let passwordLength = 12


passwordGenButton.addEventListener('click',()=>{
    let randomIndex = Math.floor(Math.random()*characters.length)
    let randomIndexTwo = Math.floor(Math.random()*characters.length)
    let randomIndexThree = Math.floor(Math.random()*characters.length)
    let randomIndexFour = Math.floor(Math.random()*characters.length)
    let randomIndexFive = Math.floor(Math.random()*characters.length)
    let randomIndexSix = Math.floor(Math.random()*characters.length)
    let randomIndexSeven = Math.floor(Math.random()*characters.length)
    let randomIndexEight = Math.floor(Math.random()*characters.length)
    let randomIndexNine = Math.floor(Math.random()*characters.length)
    let randomIndexTeen = Math.floor(Math.random()*characters.length)
    let randomIndexEleven = Math.floor(Math.random()*characters.length)
    let randomIndexTweleve = Math.floor(Math.random()*characters.length)

    stageEl.textContent = `${characters[randomIndex]}${characters[randomIndexTwo]}${characters[randomIndexThree]}${characters[randomIndexFour]}${characters[randomIndexFive]}${characters[randomIndexSix]}${characters[randomIndexSeven]}${characters[randomIndexEight]}${characters[randomIndexNine]}${characters[randomIndexTeen]}${characters[randomIndexEleven]}${characters[randomIndexTweleve]}`
})


// function getRandomCharacter(){
//     let randomCharacter = Math.floor(Math.random()*characters.length)
//     return characters[randomCharacter.passwordLength]
// }

// console.log(getRandomCharacter)

// function createRandomPass(){
//     let randomPassword = ''
//     for (let x =1; x<randomPassword.length; x++){
//         randomPassword += getRandomCharacter()
//     }
//     return randomPassword
// }

// console.log(createRandomPass())
// const generateRandompassword = createRandomPass()

// console.log(`here's a random password ${generateRandompassword}`)