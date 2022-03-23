import React from 'react';

export default function Header(){
    return(
        <div className="header">
            <header>
                <img src="../images/troll-face.png" className="header-image" alt="troll face"/>
                <h2 className="header-title">Meme Generator</h2>
                <h4 className="header-info">React Course Project 3</h4>
            </header>
        </div>
    )
}