const API_BASE_URL = process.env.REACT_APP_BACKEND_API_URL || '/api'; // read the environment variable or use '/api' as a fallback

export interface ChatEntity {
    chatId: number;
    firstName: string;
    lastName: string;
    userName: string;
    registeredAt: Date;
}

export interface MessageEntity {
    id: number;
    content: string;
    role: ChatRole;
    created: Date;
}

export enum ChatRole {
    admin = 'admin',
    assistant = 'assistant',
    system = 'system',
    user = 'user',
    function = 'function',
}

export const getAllChats = async (token: string | null): Promise<ChatEntity[]> => {
    const response = await fetch(`${API_BASE_URL}/api/v1/console/chat`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Failed to fetch chats');
    }
};
export const getChatMessages = async (chatId: number, token: string | null): Promise<MessageEntity[]> => {
    const response = await fetch(`${API_BASE_URL}/api/v1/console/chat/${chatId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Failed to fetch messages');
    }
};

export const sendMessageToChat = async (chatId: number, message: string, token: string | null): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/api/v1/console/chat/${chatId}`, {
        method: 'POST',
        body: message,
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    if (response.ok) {
        return;
    } else {
        throw new Error('Failed to send message to chat');
    }
};
