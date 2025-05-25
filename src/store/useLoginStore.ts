import { create } from 'zustand';
import { loginUser } from '@/api/loginAPI';

interface User {
    email: string;
    password: string;
}

interface loginUserProps {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    login: (email: string, password: string) => Promise<void>;
}

export const useLoginStore = create<loginUserProps>((set) => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    login: async (email: string, password: string) => {
        try {
            const { access_token, refresh_token, user } = await loginUser(email, password);
            set({ user, accessToken: access_token, refreshToken: refresh_token });
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('refreshToken', refresh_token);

            return user;

        } catch (error) {
            console.error('Error creating user:', error);
            throw error; // Re-throw the error to handle it in the component
        }
    }
}));