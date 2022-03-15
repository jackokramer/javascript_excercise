import React from "react"

export default function Card() {
    return (
        <div className="card">
            <h1>Replace this</h1>
                <img src="../images/katie-zaferes.png" className="card-photo"/>
                <br/>
                <div className="card-info">
                    <span>
                        <img src="../images/star.png" className="card-star"/>
                    </span>
                    <span className="grey">5.0</span>
                <span className="grey">(6) - USA</span>
                </div>
                 <p className="card-more-info"> Life lessons with Katie</p>
                <p className="card-price"><span className="card-italic-price">From $138</span>/per person</p>

        </div>

    )
}