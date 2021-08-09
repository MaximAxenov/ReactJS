import React, { useState, useRef, useEffect } from 'react';
import { AUTHORS } from '../../constants';
import "../Form/Form.css"

export const Form = ({ onSendMessage }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSendMessage({
      author: AUTHORS.human,
      id: Date.now(),
      text: value,
    });
    setValue('');
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input className="input" ref={inputRef} type="text" value={value} onChange={handleChange} />
      <input className="button" type="submit" />
    </form>
  )
}