fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data =>{
        const postArrBlog = data.slice(0, 5)
        let html = ""
        for(let post of postArrBlog){
            html += `
            <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr/>
            `
        }
        document.getElementById('blog-space').innerHTML = html
    })

document.getElementById('new-post').addEventListener('submit', (event) =>{
    event.preventDefault()
    let submittedTitle = document.getElementById('post-title').value
    let submittedText = document.getElementById('post-body').value
    console.log(submittedText)
    const data ={
        title: submittedTitle,
        body: submittedText

    }
          //console.log(submittedInfo)

})