import { create } from 'zustand';
import { refreshTokenApi } from '@/api/refreshTokenApi';

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

interface refreshTokenProps {
    token: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    user?: User; 
    error?: string | null;
    refresh: (token : string | null) => Promise<void>;
}

export const useRefreshToken = create<refreshTokenProps>((set) => ({
    token: null,
    refresh: async () => {
          try {
            const { access_token, refresh_token, user } = await refreshTokenApi(localStorage.getItem('refreshToken'));
            set({ user, accessToken: access_token, refreshToken: refresh_token, error: null });
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('refreshToken', refresh_token);
            return user;
        } catch (error) {
            set({ error: error instanceof Error ? error.message : String(error) });
            throw error;
        }
    }
}));