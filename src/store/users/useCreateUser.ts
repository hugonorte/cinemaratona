import { create } from 'zustand';
import { createUserAPI } from '@/api/createUserApi'; // ajuste o caminho se necessário

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

interface createUserProps {
    userCreatedSuccessfully: boolean;
    resetUserCreated: () => void;
    user: User | null;
    register: (name: string, email: string, password: string) => Promise<void>;
}

export const useCreateUserStore = create<createUserProps>((set) => ({
    userCreatedSuccessfully: false,
    resetUserCreated: () => set({ userCreatedSuccessfully: false }),
    user: null,
    register: async (name: string, email: string, password: string) => {
        try {
            const user = await createUserAPI(name, email, password);
            set({ user, userCreatedSuccessfully: true }); 
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }
}));
