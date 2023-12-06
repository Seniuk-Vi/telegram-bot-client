import React from 'react';
import { ChatEntity } from '../../services/ChatService';
import ChatComponent from './ChatComponent';
import './css/ChatList.css';
interface ChatListProps {
    chats: ChatEntity[] | null;
    setSelectedChat: (chat: ChatEntity) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, setSelectedChat }) => {
    return (
        <div>
            {chats?.map(chat => (
                <ChatComponent key={chat.chatId} chat={chat} setSelectedChat={setSelectedChat} />
            ))}
        </div>
    );
};

export default ChatList;