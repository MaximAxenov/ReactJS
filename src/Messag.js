import React from 'react';
import './Messag.css';

export default function Messag(props) {
    return (
        <div>
            <h1 className="messag">Hello, {props.name}</h1>
        </div>
    )
}
