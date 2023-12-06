import React from 'react';
import { ChatRole, MessageEntity } from '../../services/ChatService';
import './css/MessageComponents.css'; // Import the CSS file

interface MessageComponentProps {
    message: MessageEntity;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ message }) => {
    const isCurrentUser = message.role === ChatRole.admin;
    const messageClass = isCurrentUser ? 'admin' : message.role;

    return (
        <div className={`message ${messageClass}`}>
            <div>
                <strong>{message.role}</strong>
            </div>
            <div>
                {message.content}
            </div>
        </div>
    );
};

export default MessageComponent;