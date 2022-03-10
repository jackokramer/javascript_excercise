import React from 'react'
import logo from "../images/logo.svg"

export default function (){
    return (
        <nav>
            <div className="one">
                <img src={logo} className="App-logo" width="200px"/>
                <h1 className="title"> React Facts</h1>
            </div>
            <ul className="nav-items">
                <li className="nav-items-li"><a href="#">Home</a></li>
                <li className="nav-items-li"><a href="#">About</a></li>
                <li className="nav-items-li"><a href="#">News</a></li>
                <li className="nav-items-li"><a href="#">Pricing</a></li>
            </ul>
        </nav>
    )
}