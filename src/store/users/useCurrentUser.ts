import { create } from 'zustand';
import { getCurrentUserApi } from '@/api/currentUserApi'; // ajuste o caminho se necessário

interface User {
    id: string;
    name: string;
    email: string;
}

interface currentUserProps {
    currentUser: User | null;
    error: string | null;
    getCurrentUser: () => Promise<User | null>;
} 

export const useCurrentUserStore = create<currentUserProps>((set) => ({
    currentUser: null,
    error: null,
    getCurrentUser: async () => {
        try {
            const user = await getCurrentUserApi();
            set({ currentUser: user, error: null });
            return user;
        } catch (error) {
            let errorMessage = 'Unknown error';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            set({ currentUser: null, error: errorMessage });
            throw error;
        }
    },
}));
