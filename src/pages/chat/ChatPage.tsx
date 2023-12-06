import React, { useEffect, useState } from 'react';
import { ChatEntity, getAllChats, sendMessageToChat } from '../../services/ChatService';
import { useAuth } from '../../utils/IAuthContext';
import ChatList from '../../components/chat/ChatList';
import MessagesList from '../../components/message/MessageList';
import MessageInput from '../../components/message/MessageInput';
import './css/ChatPage.css';

const ChatPage: React.FC = () => {
    const [chats, setChats] = useState<ChatEntity[] | null>(null);
    const [selectedChat, setSelectedChat] = useState<ChatEntity | null>(null);
    const { id, token } = useAuth();

    useEffect(() => {
        const fetchChats = async (): Promise<void> => {
            if (id != null) {
                try {
                    let fetchedChats = await getAllChats(token);
                    setChats(fetchedChats);
                } catch (error) {
                    console.error('Failed to fetch chats', error);
                }
            }
        };
        // fetchChats every 5 sec
        setInterval(() => {
            fetchChats();
        }, 5000);
        fetchChats();
    }, [id, token]);

    const handleSendMessage = async (message: string) => {
        if (selectedChat) {
            try {
                await sendMessageToChat(selectedChat.chatId, message, token);
            } catch (error) {
                console.error('Failed to send message', error);
            }
        }
    };

    return (
        <div className="chatPage">
            <div className="chatList">
                <ChatList chats={chats} setSelectedChat={setSelectedChat} />
            </div>
            <div className="messageList">
                <MessagesList chat={selectedChat} />
                <MessageInput sendMessage={handleSendMessage} />
            </div>
        </div>
    );
};

export default ChatPage;