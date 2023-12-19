const API_BASE_URL = process.env.REACT_APP_BACKEND_API_URL || '/api'; // read the environment variable or use '/api' as a fallback

export async function fetchWithInterceptors(url: string, options: RequestInit): Promise<any> {
    const response = await fetch(`${API_BASE_URL}${url}`, options);

    // This is where you can handle the response globally
    if (response.status === 401) {
        // Redirect to login page
        window.location.href = '/auth';
    } else if (!response.ok) {
        throw new Error('Request failed.');
    }
    return await response.json();
}