import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header(props) {
    return(
        <div className="header">
            <FontAwesomeIcon icon="fa-solid fa-earth-americas" />
            <h1 className="title"> my travel Journal</h1>
        </div>
    )
}