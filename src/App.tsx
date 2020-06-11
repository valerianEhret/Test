import React from 'react';
import { Message } from "./Message"

import './App.css';

function App() {


  // Ishodnye dannye
  let messages = [
    { id: 1, text: "Hello" },
    { id: 1, text: "How are you?" },
    { id: 1, text: "I am fine" },
    { id: 1, text: "Schiki-Miki" },
  ];

  // preobrayovenie map, elementy massiva preobrazovyvutsja v Componenty Message
  let messagesElements = messages.map(m => <Message text={m.text} />);

  return (
    <div className="App">
      {messagesElements}
    </div>
  );
}

export default App;
