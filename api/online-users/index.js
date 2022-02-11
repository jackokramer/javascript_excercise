/*
    1.

    Load users from users.json (originally from https://jsonplaceholder.typicode.com/users)

    Create a simple component that displays the user's username
        -Alongside a green circle
        -The username and circle should be in individual divs
        -Both should be vertically and horizontally centered
        -The component should only be wide enough to Fit its Content (and some padding)

    2.

    Write a getUserDiv function

    Create a Flexbox container my-online-users

    Display the users vertically
        -Fill all available space

    Challenge

    Using the body tag as a Flexbox container
        re-create the provided layout

    Hint: The Header and Footer are each 10%
        of the container's height
*/



async function displayusers(){
    let response = await fetch("users.json")
    let data =  await response.json()
    console.log(data)
    return data
}

function getUserDiv(user){
    return `<div class="my-online-user">
    <div class="user-username">${user.name}</div>
    <div class="user-online"></div>
    </div>`
}

displayusers().then(users =>{
    let sampleuser = users[0]
    let userDiv = getUserDiv(sampleuser)

    document.body.innerHTML = `
    <div class="header">header</div>
    <div class="my-online-users">
    ${users.map(users=>{
        return getUserDiv(users)

    }).join(' ')}</div>
    <div class="main-content">main content</div>
    <div class="footer">footer</div>
    `;
})

