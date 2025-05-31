import { create } from 'zustand';
import { createUserAPI } from '@/api/createUserApi'; // ajuste o caminho se necessário

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

interface createUserProps {
    user: User | null;
    register: (name: string, email: string, password: string) => Promise<void>;
}

export const useCreateUserStore = create<createUserProps>((set) => ({
    user: null,
    register: async (name: string, email: string, password: string) => {
        try {
            const user = await createUserAPI(name, email, password);
            set({ user });
        } catch (error) {
            console.error('Error creating user:', error);
            throw error; // Re-throw the error to handle it in the component
        }
    }
}));
