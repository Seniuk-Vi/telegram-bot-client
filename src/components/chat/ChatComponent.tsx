import React from 'react';
import { ChatEntity } from '../../services/ChatService';
import './css/ChatComponent.css';

interface ChatComponentProps {
    chat: ChatEntity;
    setSelectedChat: (chat: ChatEntity) => void;
}

const ChatComponent: React.FC<ChatComponentProps> = ({ chat, setSelectedChat }) => {
    return (
        <div onClick={() => setSelectedChat(chat)} className="chatComponent">
            {chat.userName}
        </div>
    );
};

export default ChatComponent;