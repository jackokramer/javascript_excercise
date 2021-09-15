// 1. Loop through the myEmojis array and log each of them out to the console
// Grab the emojiContainer div and store it in a variable. Log it to the console
// Hook an event listener up with the button, and log out the input field's value when it's clicked

let myEmojis = ["👹", "🤘🏼", "😵‍💫"]
let emojiContainer = document.getElementById('emojiContainer')
const emojiInput = document.getElementById("emoji-input")
const unshiftBtn = document.getElementById('unshift-btn')
const pushBtn = document.getElementById('push-btn')
const popBtn = document.getElementById('pop-btn')
const shiftBtn = document.getElementById('shift-btn')


console.log(emojiContainer)

function renderEmojis(){
        emojiContainer.innerHTML = ""
    for(let x = 0; x<myEmojis.length; x++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[x]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener('click', function(){
        if(emojiInput.value){
            myEmojis.push(emojiInput.value)
            emojiInput.value = ""
            renderEmojis()
            console.log(myEmojis)
            }
})

unshiftBtn.addEventListener('click', function(){
    if(emojiInput.value){
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

shiftBtn.addEventListener('click', function(){
        myEmojis.shift()
        renderEmojis()
})

popBtn.addEventListener('click', function(){
        myEmojis.pop()
        renderEmojis()
})