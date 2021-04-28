function myFunction(){
    document.getElementById('nav').classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.nav')){
        let dropdown = document.getElementsByClassName('.nav')
        let x;
        for(x = 0; x < dropdown.length; x++){
            let openDropdown = dropdown[x];
            if(openDropdown.classList.contains('open-menu')){
                openDropdown.classList.remove('open-menu');
            }
        }
    }
}
