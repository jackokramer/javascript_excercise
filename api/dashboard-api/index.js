/**
 * Challenge part 2: Display the image's author
 *
 * With the data you've already fetched, display the name of the
 * image author on the page. They show up as the "user" in the data
 * returned from the API.
 *
 * Don't worry about positioning the author in the lower-left yet.
 */

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res=>res.json())
    .then(data=> {
        console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        // document.body.innerHTML =
        // `<div class="author-name>
            // <p>${data.user.name}</p>
        // </div>`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })
.catch(err => {
    console.log('🤨 an error took place...')
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1448375240586-882707db888b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ4NTgzMzI&ixlib=rb-1.2.1&q=80&w=1080)`
    //report the error to some kind of service the engineers can look into
})
// getBackgroundImage().then(photo =>{
    // document.body.innerHTML = `<div class="background-image> ${photo.image}</div>`
// })

fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=105010fed3e34db89adc65a1023698b7')
    .then(res => {
        if(!res.ok){
            throw Error('something went wrong')
        }
        console.log(res.status)
        return res.json()
        })
    .then(data => {
        document.getElementById('news').innerHTML = `
        <span> 😎 ${data.author}</span>
        <p>${data.title}</p>
        <p>${data.description}</p>`
        document.getElementById('other-news').innerHTML += `
        <p> More information on other News</p>`
     console.log(data)})
    .catch( err => console.log(err))

function getCurrentTime(){
    let date  = new Date();
    document.getElementById('time').textContent = date.toLocaleTimeString('en-us', {timeStyle: 'short'})
}
setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position =>{
fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    .then(res =>{
        if(!res.ok){
            throw  Error('weather data not available')
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById('weather').innerHTML = `
            <img class="weather" src="${iconUrl}"/>
            <p class="city-temp">${Math.round(data.main.temp)}º</p>
        <p class="city-name">${data.name}</p>

        `
    })
    .catch(err =>console.error(err))
    })


/*
navigator.geolocation.getCurrentPosition()
    .then(position => {
        console.log(position)
    })

async function getLocation (){
    const position = await navigato.geolocation.getCurrentPosition()
    console.log(position)
}
*/