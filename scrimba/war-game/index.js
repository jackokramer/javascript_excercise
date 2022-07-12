
let deckId
const cardsContainer = document.getElementById('cards')
const newDeck = document.getElementById("new-deck")
const drawTwo = document.getElementById('draw-two')
const header = document.getElementById('header')
const remainingText = document.getElementById('remaining')

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            deckId = data.deck_id
            console.log(deckId)
        })
}

newDeck.addEventListener("click", handleClick)



drawTwo.addEventListener('click',()=>{
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data =>{
            console.log(data.cards)
            remainingText.textContent = `Remaining Cards: ${data.remaining}`
            cardsContainer.children[0].innerHTML =`
                <img src=${data.cards[0].image} class='card'/>
                `
            cardsContainer.children[1].innerHTML =`
                <img src=${data.cards[1].image} class='card'/>
                `
            const winnerText = determineWinner(data.cards[0], data.cards[1])
            //console.log(winnerText)
            header.textContent = winnerText
            if(data.remaining ===0){
                drawTwo.disabled = true
            }
    })
})



/**
 * Challenge:
 *
 * Display the images of the 2 cards you drew in the browser.
 * Probably best to use `innerHTML` to insert a couple <img> elements
 * on the page.
 */

function determineWinner(card1, card2){
    let cardVals = ['2','3','4','5','6','7','8','9','10','Queen','Jack',"King","Ace"]
    const cardOnevalue = cardVals.indexOf(card1.value)
    const cardTwoValue = cardVals.indexOf(card2.value)
    if(cardOnevalue> cardTwoValue){
        return 'computer wins'
    } else if(cardOnevalue< cardTwoValue){
       return 'user wins'
    } else {
        console.log('its a tie')
    }
}
const cardObj1 ={
    value: '9'
}

const cardObj2={
    value: '10'
}

determineWinner(cardObj1, cardObj2)