   let postArray = []
   const titleInput = document.getElementById('post-title')
   const bodyInput = document.getElementById('post-body')
   const form = document.getElementById('new-post')

   function renderPost(){
    let html = ''
        for(let post of postArray) {
            html += `<h3>${post.title}</h3>
            <p>${post.body}</p>`
        }
        document.getElementById('items').innerHTML = html
   }

 fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data =>  {
         postArray = data.slice(0,5)
    renderPost()
        })

document.getElementById('new-post').addEventListener('submit', function(e){
    e.preventDefault()
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const data ={
        title: postTitle,
        body: postBody
    }

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        }

fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(response => response.json())
        .then(post => {
            postArray.unshift(post) //unshift() -method adds it to the top
            renderPost()
            titleInput.value =""
            bodyInput.value =''
            //form.reset()
        })
})
