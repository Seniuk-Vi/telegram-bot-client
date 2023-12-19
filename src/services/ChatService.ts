import {fetchWithInterceptors} from "../utils/FetchInterceptors";

export interface ChatEntity {
    chatId: number;
    firstName: string;
    lastName: string;
    userName: string;
    registeredAt: Date;
}

export interface MessageEntity {
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

export const getAllChats = async (token: string | null): Promise<ChatEntity[] | any> => {
    return await fetchWithInterceptors(`/api/v1/console/chat`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};
export const getChatMessages = async (chatId: number, token: string | null): Promise<MessageEntity[]> => {
    return await fetchWithInterceptors(`/api/v1/console/chat/${chatId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const sendMessageToChat = async (chatId: number, message: string, token: string | null): Promise<void> => {
    return await fetchWithInterceptors(`/api/v1/console/chat/${chatId}`, {
        method: 'POST',
        body: message,
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
};
