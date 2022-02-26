let newDeck = document.getElementById('new-deck-btn')

function fetchFunk(){
    let html = ''
     fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
    html.document.getElementById('cards').innerHTML = `
    <div>
        ${json.deck_id}
    </div>
    `
}

newDeck.addEventListener('click', fetchFunk)


function callback() {
    console.log("I finally ran!")
}

setTimeout(callback, 2000)