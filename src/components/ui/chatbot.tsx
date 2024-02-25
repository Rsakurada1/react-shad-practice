// src/components/ChatComponent.tsx
import { useState } from 'react';
import { sendMessageToLex } from '../../Services/lexService';

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState<string[]>([]);

  const handleSend = async () => {
    const userId = "user123"; // 実際のアプリではユニークなユーザーIDを生成する
    const response = await sendMessageToLex(message, userId);
    setResponses([...responses, response]);
    setMessage('');
  };

  return (
    <div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSend}>送信</button>
      <div>
        {responses.map((res, index) => (
          <p key={index}>{res}</p>
        ))}
      </div>
    </div>
  );
};

export default ChatComponent;
