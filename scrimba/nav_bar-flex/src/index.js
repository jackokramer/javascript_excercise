const toggle = document.querySelector(".toggle");
const menu = document.querySelector('.menu')
const items = document.querySelectorAll(".item")

// Toggle mobile menu

function toggleMenu(){
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
        //adds the hamburger icon
        toggle.querySelector('a').innerHTML= "<i class='fas fa-bars'></i>"
    } else {
        menu.classList.add('active')

        //adds the close (x) icon
        toggle.querySelector('a').innerHTML = '<i class="fas fa-times"></i>'
    }
}

// Event Listener

toggle.addEventListener('click', toggleMenu, false)

// Activate Submenu
function toggleItem(){
    if(this.classList.contains('submenu-active')){
        this.classList.remove("submenu-active")
    } else if(menu.querySelector("submenu-active")){
        menu.querySelector("submenu-active").classList.remove("submenu-active")
        this.classList.add("submenu-active")
    } else {
        this.classList.add("submenu-active")
    }
}

// event listener for items_count
for(let item of items){
    if(item.querySelector(".submenu")){
        item.addEventListener('click', toggleItem, false)
        item.addEventListener("kepress", toggleItem, false)
    }
}

// close anywhere

function closeSubmenu(e){
    let isClickInside =menu.contains(e.targert)
    if(isClickInside && menu.querySelector('.submenu-active')){
        menu.querySelector(".submenu-active").classList.remove("submenu-active")
    }
}

// Event Listener

document.addEventListener('click', closeSubmenu, false)
