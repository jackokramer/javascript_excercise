const movieDataApi =document.getElementById('bar')
let searchButton = document.getElementById('search')

searchButton.addEventListener('click', () =>{
    fetch("http://www.omdbapi.com/?apikey=2e6de785&t")
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
        })
})
//