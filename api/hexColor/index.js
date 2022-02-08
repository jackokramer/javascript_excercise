/*
    Use fetch() to load 1, then 5, then 25 colors from the HexBot

    Use FlexBox to create a Responsive 5x5 Grid displaying the colors
*/

function displayColor(colors){
    let myColorsHTML = colors.map(color =>{
        return `<div class="myColor" style="background: ${color.value}"></div>`
    }).join('')
    document.body.innerHTML = `<div class="myColors">
    ${myColorsHTML}
    </div>`
}

async function getColor(){
    let response = await fetch('https://apis.scrimba.com/hexcolors?count=100')
    let data = await response.json()
    let colors = data.colors

    displayColor(colors)
}

getColor()
