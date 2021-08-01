import React, {useState} from "react";
import {AUTHORS} from "../../constants";
import '../form/index.css'

export const Form = ({onSendMessage}) => {
    const [value, setValue]= useState('');

    const handleChange=(e)=>{
        setValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        onSendMessage({
            author: AUTHORS.human,
            id: Date.now(),
            text: value,
        });
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="input" type="text" value={value} onChange={handleChange} autoFocus/>
            <input className="butt" type="submit"/>
        </form>
    )
}