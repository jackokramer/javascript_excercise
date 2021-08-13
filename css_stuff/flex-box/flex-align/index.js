const toggleMenu = document.querySelector('.toggle-menu')
const pageHeader = document.querySelector('.page-header')

toggleMenu.addEventListener('click', function(){
    pageHeader.classList.toggle('menu-opened')
    document.body.classList.toggle('overflow-y-hidden')
})