const navbarToggle = navbar.querySelector('#navbar-toggle')
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded')==='true'

const togglenavVariable = () =>{
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute('aria-expanded', isNavbarExpanded)
}

navbarToggle.addEventListener('click', togglenavVariable)
