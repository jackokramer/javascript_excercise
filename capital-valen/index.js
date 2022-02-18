document.getElementById("btn").addEventListener("click", correct)


function correct() {

    let firstChar = document.getElementById("paragraph")
    if(firstChar[0]){
        firstChar.toUpperCase()
    }else if(firstChar.length){
        firstChar.toLowerCase()
    }
    // Write the JavaScript to grab the message from the paragraph and correct its capitalisation.
    // It should read "Valentine's"
    // Render the corrected message to the DOM.

}
