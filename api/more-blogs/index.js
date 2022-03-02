let postArrayBlog= []

function renderPosts(){
    let html = ""
        for(let post of postArrayBlog){
            html += `
            <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr/>
            `
        }
        document.getElementById('blog-space').innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data =>{
        postArrayBlog = data.slice(0, 5)
        renderPosts()
    })

document.getElementById('new-post').addEventListener('submit', (e) =>{
    e.preventDefault()
    let submittedTitle = document.getElementById('post-title').value
    let submittedText = document.getElementById('post-body').value
    console.log(submittedText)
    const data ={
        title: submittedTitle,
        body: submittedText
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(data => {
        //console.log(data)
       postArrayBlog.unshift(data)
       renderPosts()
        })
         document.getElementById("new-post").reset();
})