let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", () =>{
    let randomIndexOne = Math.floor(Math.random()*fighters.length)
    let randomIndexTwo = Math.floor(Math.random()*fighters.length)
    stageEl.textContent = `${fighters[randomIndexOne]} vs. ${fighters[randomIndexTwo]}!!!!`

})