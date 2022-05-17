let eye = document.getElementById('eye')
eye.addEventListener('click', toggleVisibility)

const toggleVisibility = () => {
    const password =document.getElementById('password')
    if(password.type === 'password'){
        password.type = 'text'
        eye.innerText = 'visibility_off'
    } else {
        password.type = 'password'
        eye.innerText = 'visiblity'
    }
}