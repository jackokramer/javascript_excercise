let postArray = []

function renderPosts(){
     let html = ""
        for(let post of postArray){
            html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr/>
            `
             }
        document.getElementById('blog-list').innerHTML = html
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data=>{
        postArray = data.slice(0, 5)
        renderPosts()
        //const title = document.getElementById('subtitle')

    })

function renderNewPost(){

}

document.getElementById('new-post').addEventListener('submit', function(e) {
    e.preventDefault()
    const postTitle = document.getElementById('form-title').value //always add the .value to track the value
    const postBody = document.getElementById('form-body').value
    //console.log(postTitle)
    const data ={
        title: postTitle,
        body: postBody
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(response => response.json())
        .then(post =>{
                postArray.unshift(post)
                renderPosts()
                 document.getElementById("new-post").reset();
            })
})

