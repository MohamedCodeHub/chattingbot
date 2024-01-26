import React, { useState } from 'react';
import './chatbot.css';
import ChatMessage from './ChatMessage.js';
import { analyze } from './utils.js';

function Chatbot() {
  const [message, setMessages] = useState([{
    message: 'may i have your name'

  }])

  const [text, setText] = useState('')
  const onSend = () => {
    let list = [...message, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text)
      list = [...list, { message: reply }]
    }
    else {
      list = [...list,
      { 
        message: `hi,${text}`,
      },
      {
        message: "how can i help you"
      },

      ]
    }
    setMessages(list)
    setText("")
    setTimeout(() => {
      document.querySelector('#copyright').scrollIntoView();
    })

  }
  return (
    <div>
      <div className='d-flex align-items-center justify-content-center'>
        <img src="https://static.vecteezy.com/system/resources/previews/004/996/790/original/robot-chatbot-icon-sign-free-vector.jpg" alt="logo"
          height={150}
          width={150}
        />
        <h2 className='text-primary'>Chatbot</h2>
      </div>
      <div className='chat-message'>
        {
          message.length > 0 && message.map((data) => <ChatMessage {...data} />)
        }
        <div className='d-flex mt-2'>
          <input type="text" className='form-control' value={text} onChange={(e) => setText(e.target.value)}></input>
          <button type="primary" className='me-3' onClick={onSend}>send</button>
        </div>
        <div id="copyright" className='mt-3'>copyright reserved</div>
      </div>
    </div>
  )
}
export default Chatbot;