import { create } from 'zustand';
import { getCurrentUserApi } from '@/api/currentUserApi'; // ajuste o caminho se necessário

interface User {
    id: string;
    name: string;
    email: string;
}

interface currentUserProps {
    user: User | null;
    error: string | null;
    getCurrentUser: () => Promise<User | null>;
} 

export const useCreateUserStore = create<currentUserProps>((set) => ({
    user: null,
    error: null,
    getCurrentUser: async () => {
        try {
            const user = await getCurrentUserApi();
            set({ user, error: null });
            return user;
        } catch (error) {
            let errorMessage = 'Unknown error';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            set({ user: null, error: errorMessage });
            throw error;
        }
    },
}));
