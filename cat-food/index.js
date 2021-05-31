const fish = document.getElementById('fish')
const cat = document.getElementById('cat')

fish.addEventListener('click', feedCat)

function feedCat(){
    cat.classList.remove('hungry')
    console.log(cat)
    cat.classList.add('fed')
    setTimeout(function(){
        cat.classList.add('hungry')
    }, 100)

    setTimeout(function(){
        cat.classList.remove('fed')
    }, 2000)

}

// cats cradle