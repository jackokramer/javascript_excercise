import React from "react";

export default function Card(props) {
    return(
        <div className="container">
                <div className="card">
                    <div className="img">
                        <img src={`../images/${props.img}`} alt="mt-fuji in japan" className="photo" />
                    </div>
                    <div className="text">
                        <div className="first-line">
                        <img className="pin" src="../images/placeholder.png"/>
                            <h4 className="location">{props.location}</h4>
                            <a className="google-maps" href="http://">View on Google Maps</a>
                        </div>
                        <h1 className="title">{props.title}</h1>
                        <h4 className="timeline">{props.timeline}</h4>
                        <p className="description">{props.description}</p>
                    </div>
                </div>
        </div>
    )
}