import React from "react"

export default function Card(props) {
        let badgeText
        if(props.openSpots === 0){
            badgeText ="Sold Out"
        } else if(props.location === 'Online'){
            badgeText ="Online"
        }
    return (
        <div className="card">
            {badgeText&&<div className="card-badge">{badgeText}</div>}
                <img src={`../images/${props.img}`} className="card-photo"/>
                <br/>
                <div className="card-info">
                    <span>
                        <img src="../images/star.png" className="card-star"/>
                    </span>
                    <span className="grey">{props.rating}</span>
                <span className="grey">({props.reviewCount}) - USA</span>
                </div>
                 <p className="card-more-info">{props.title}</p>
                <p className="card-price"><span className="card-italic-price">From ${props.price}</span>/per person</p>

        </div>

    )
}