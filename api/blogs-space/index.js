fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data=>{
        //console.log(data)
        const postArray = data.slice(0, 5)
        console.log(postArray)
        //const title = document.getElementById('subtitle')
        let html = ""
        for(let post of postArray){
            html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr/>
            `
        }
        document.getElementById('blog-list').innerHTML = html
    })