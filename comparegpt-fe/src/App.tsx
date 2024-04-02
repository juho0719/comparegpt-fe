import React, { useState } from 'react';

interface IMessage {
  id: number;
  text: string;
}

function App() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages([...messages, { id: messages.length, text: inputText }]);
    setInputText('');
  };

  return (
    <div className="p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full">
            <div className="p-4 border-b-2">ChatGPT Clone</div>
            <div className="p-4">
              {messages.map((message) => (
                <div key={message.id} className="mb-4">
                  <div className="text-sm text-gray-700">{message.text}</div>
                </div>
              ))}
            </div>
            <div className="p-4">
              <form onSubmit={sendMessage}>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Type a message..."
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
