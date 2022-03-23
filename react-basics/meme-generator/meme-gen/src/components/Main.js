import React, {useState} from 'react';
import memesData from '../memesData'
export default function Main(){
        const [memeImg, setMemeImg] = React.useState('')

    function memeData (){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        setMemeImg(memesArray[randomNumber].url)
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
            <img src={memeImg} className="meme-img"/>
        </div>
    )
}