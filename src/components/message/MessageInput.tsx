import React, { useState } from 'react';
import './css/MessageInput.css';

interface MessageInputProps {
    sendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ sendMessage }) => {
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (message.trim() !== '') {
            sendMessage(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageInput;