import React, {useEffect, useState} from 'react';
import {ChatEntity, getChatMessages, MessageEntity} from '../../services/ChatService';
import {useAuth} from '../../utils/IAuthContext';
import MessageComponent from './MessageComponent';

interface MessagesProps {
    chat: ChatEntity | null;
}

const MessagesList: React.FC<MessagesProps> = ({chat}) => {
    const [messages, setMessages] = useState<MessageEntity[] | null>(null);
    const {token} = useAuth();

    useEffect(() => {
        const fetchMessages = async (): Promise<void> => {
            if (chat != null) {
                try {
                    let fetchedMessages = await getChatMessages(chat.chatId, token);
                    setMessages(fetchedMessages);
                } catch (error) {
                    console.error('Failed to fetch messages', error);
                }
            }
        };
        // fetchMessages every 2 second
        const intervalId = setInterval(() => {
            fetchMessages();
        }, 2000);

        // Call fetchMessages immediately
        fetchMessages();

        // Cleanup function to clear the interval
        return () => {
            clearInterval(intervalId);
        };
    }, [chat, token]);

    return (
        <div className="messageList">
            {messages?.map(message => (
                <MessageComponent key={message.id} message={message}/>
            ))}
        </div>
    );
};

export default MessagesList;