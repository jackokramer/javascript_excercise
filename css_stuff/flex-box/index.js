const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')

// function for toggle menu

function toggleMenu() {
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
        // add the hamburger menu iconv
        toggle.querySelector('a').innerHTML = "<i class = fas fa-bars></i>"
    } else {
        menu.classList.add('active')
        //close the (x) icon
        toggle.querySelector('a').innerHTML = "<i class = fas fa-times></i>"
    }
}

// Event Listner

toggle.addEventListener('click', toggleMenu, false)

const items = document.querySelector('.items')

function toggleItem() {
  if (this.classList.contains("menu-active")) {
    this.classList.remove("menu-active");
  } else if (menu.querySelector(".menu-active")) {
    menu.querySelector(".menu-active").classList.remove("submenu-active");
    this.classList.add("menu-active");
  } else {
    this.classList.add("menu-active");
  }
}

/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".menu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }
}