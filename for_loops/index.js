let sentence = ["Hello", "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for(let x =0; x< sentence.length; x++){
    greetingEl.textContent += sentence[x]+' '
}