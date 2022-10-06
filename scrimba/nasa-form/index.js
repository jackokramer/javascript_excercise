const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const loginFormData = new FormData(loginForm)
    console.log(loginFormData)
    const name = loginFormData.get('astronuatName')
    const email = loginFormData.get('email')
    const password = loginFormData.get('password')
    console.log(name,email, password)

})
