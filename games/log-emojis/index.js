const myEmojis = ["👨‍💻", "⛷", "🍲", "💀", '🎅🏾', '🤸','💩']
const myEmojisContainer = document.getElementById('container')
const addtoEnd = document.getElementById('push-btn')
const inputVal = document.getElementById('input')
const unshiftBtn = document.getElementById('unshift-btn')
const popBtn = document.getElementById('pop-btn')
const shiftBtn = document.getElementById('shift-btn')



//REDOS
// Push the emoji into the myEmoji's array, and clear the input field
// However, if the input value is empty, don't do anything

// Render the updated myEmojis array in the mini-browser.

// One solution: wrap the code for rendering the emojis in a function and make sure it
// clears away old version of the array before it renders the updated one

// Make the pop and shift buttons work as well


addtoEnd.addEventListener('click',()=>{
    if(inputVal.value){
    myEmojis.push(inputVal.value)
    inputVal.value = ''
    // myEmojisContainer.append(spanTag)
    console.log(myEmojis)
    renderEmojis()
    }
})

function renderEmojis(){
    myEmojisContainer.innerHTML = ''
        for(let x =0; x<myEmojis.length; x++){
            const spanTag  = document.createElement('span')
            spanTag.textContent = myEmojis[x]
            myEmojisContainer.appendChild(spanTag)

        }
}
renderEmojis()

// Make the unshift button work just as the push button (but with unshifting instead of pushing)
unshiftBtn.addEventListener('click',()=>{
    if(inputVal.value){
        myEmojis.unshift(inputVal.value)
        inputVal.value = ''
        renderEmojis()
    }
})

popBtn.addEventListener('click',()=>{
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener('click',()=>{
    myEmojis.shift()
    renderEmojis()
})




