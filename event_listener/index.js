/*$('button').on("click mouseover",function(){
    alert("Hello")
});

//select dom element
let buttons = document.querySelectorAll('button')

//callback function
function buttonAlert(){
    alert("Hello")
}

//event listeners
for(let button of buttons){
    button.addEventListener('click', buttonAlert, false)
}
*/
/** Nav Menu */

const hamburgler = document.querySelector('.toggle')
const menu = document.querySelector('.menu')

function toggleMenu(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active")
        hamburgler.querySelector('a').innerHTML = "<i class='fa fa-bars'></i>"
    } else{
        menu.classList.add('active');
        hamburgler.querySelector('a').innerHTML = "<i class='fa fa-times'></i>"
    }
}

hamburgler.addEventListener('click', toggleMenu, false)
//submenu
const items = document.querySelectorAll('item');

function toggleItem(){

}
for(let item of items){
    if(item.querySelector('.submenu')){
        item.addEventListener('click', toggleItem, false)
        item.addEventListener('keypress', toggleItem, false)
    }
}

//close submenu

function closeSubmenu(){
    let clickInside = menu.contains(target);
    if(!clickInside && menu.querySelector('.submenu-active')){
        menu.querySelector('.submenu-active').classList.remove('submenu-active')
    }
}

document.addEventListener('click', closeSubmenu, false);

/**End Nav Menu */

const button = document.querySelector('.toggs')
const section = document.querySelector('section')

function toggleSection(){
    if(section.classList.contains('visible')){
        section.classList.remove('visible')
    } else{
        section.classList.add('visible')
    }
}

//event listeners

button.addEventListener('click', toggleSection, false)