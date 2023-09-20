import React, { useEffect, useState } from 'react';

interface ChatMessage {
  text: string;
  bot: string;
  sender: 'user' | 'bot'; // Add this property
}

function Chatbot() {
  const [chatData, setChatData] = useState<ChatMessage[]>([]);

  useEffect(() => {
    // Fetch chat data from the server (replace '/api/chat-data' with your API endpoint)
    // fetch('/api/chat-data')
    //   .then((response) => response.json())
    //   .then((data) => setChatData(data))
    //   .catch((error) => console.error('Error fetching data:', error));

    const arrayData: ChatMessage[] = [
      {
        text: "hey Ahita How Are u haha",
        bot: "I'm doing well bro what's up haha",
        sender: 'user'
      },
      {
        text: "I'm doing well what about you haha",
        bot: "I'm doing well bro what's up haha",
        sender: 'bot'
      },
      {
        text: "hey Ahita How Are u haha",
        bot: "I'm doing well bro what's up haha",
        sender: 'user'
      },
      {
        text: "hey Ahita How Are u haha",
        bot: "I'm doing well bro what's up haha",
        sender: 'bot'
      },
      {
        text: "hey Ahita How Are u haha",
        bot: "I'm doing well bro what's up haha",
        sender: 'user'
      },{
        text: "hey Ahita How Are u haha",
        bot: "I'm doing well bro what's up haha",
        sender: 'bot'
      },
      {
        text: "hey Ahita How Are u haha",
        bot: "I'm doing well bro what's up haha",
        sender: 'user'
      },
      {
        text: "hey Ahita How Are u haha",
        bot: "I'm doing well bro what's up haha",
        sender: 'bot'
      },
      {
        text: "hey Ahita How Are u haha",
        bot: "I'm doing well bro what's up haha",
        sender: 'user'
      },
      {
        text: "hey Ahita How Are u haha",
        bot: "I'm doing well bro what's up haha",
        sender: 'bot'
      }
    ];
    setChatData(arrayData);
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {chatData.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div>hey man haha</div>
    </div>
  );
}

export default Chatbot;
