import React, {useState} from 'react';
import memesData from '../memesData'
export default function Main(){
    const [meme, setMeme] = React.useState(
        {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg'
        })
    const [allMemeImg, setAllMemeImg] = React.useState(memesData)

    function memeData (){
        const memesArray = allMemeImg.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url= memesArray[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImg: url
        }))
        //const url = memesArray[randomNumber].url
        //console.log(url)

        //    const memeData = memesData()
    }
    return(
        <div className="main">
            <div className="form-horizontal">
                <input type="text" className="form-control"
                placeholder="top-text"/>
                <input type="text" className="form-control"
                 placeholder="bottom-text"/>
                    <button className="btn btn-form" onClick={memeData}>Generate New Meme 🏞</button>
            </div>
            <img src={meme.randomImg} className="meme-img"/>
        </div>
    )
}