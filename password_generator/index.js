const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12

function getRandomCharacter(){
    let randomCharacter = Math.floor(Math.random()*characters.length)
    return characters[randomCharacter]
}

function createRandomPass(){
    let randomPassword = ''
    for (let x =1; x<randomPassword.length; x++){
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

console.log(createRandomPass())
const generateRandompassword = createRandomPass()

console.log(`here's a random password ${generateRandompassword}`)