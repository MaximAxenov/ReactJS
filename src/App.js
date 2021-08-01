import PropTypes from 'prop-types';
import { Counter, Component } from './components/Component/Component';

import './App.css';
import {useRef, useEfect, useState, useCallback, useEffect} from "react";
import {Message} from "./components/Message";
import { MessageField } from './components/MessageField';
import{Form} from "./components/form";
import { AUTHORS } from './constants';
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';

ReactDOM.render(<Demo />, document.querySelector('#root'));

function App() {
  const[messages, setMessages] = useState([{text:'Dymmy',author: AUTHORS.human, id:1}
]);

  const handleSendMessage = useCallback((newMessage) => {
    setMessages([...messages, newMessage]);
  }, 
  [messages]
  );

  useEffect(()=>{
    if (!messages.length || messages[messages.length -1].author === AUTHORS.robot){
      return
    }

    const timeout=setTimeout(()=>{
    const newMessage={
      text:'I am a robot',
      author: AUTHORS.robot,
      id: Date.now(),
    };

    setMessages([...messages, newMessage]);
  }, 1500);

  return()=> clearTimeout(timeout);
  },[messages]);
  
  return (
    <header className="App-header">
      <Demo />
    <div className="App">
      <MessageField messages={messages}/>
      <Form onSendMessage={handleSendMessage}/>
    </div>
    </header>
  );
}

export default App;