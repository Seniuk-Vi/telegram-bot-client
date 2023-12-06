const API_BASE_URL = process.env.REACT_APP_BACKEND_API_URL || '/api'; // read the environment variable or use '/api' as a fallback

export interface UserRequest {
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface LoginResponse {
    id: number;
    email: string;
    token: string;
}

export interface UserResponse {
    id: number;
    email: string;
}

export async function signUp(request: UserRequest): Promise<UserResponse> {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Sign-up failed.');
    }
}

export async function login(request: UserRequest): Promise<LoginResponse> {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Authentication failed.');
    }
}
