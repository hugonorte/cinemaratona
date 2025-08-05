import { create } from 'zustand';
import { loginUser } from '@/api/loginAPI';
import { refreshTokenApi } from '@/api/refreshTokenApi';
import { getCurrentUserApi } from '@/api/currentUserApi';

interface User {
  id: string;
  name?: string;
  email?: string;
}


interface AuthState {
  user: User | null;
  accessToken: string | null;

  setAuth: (accessToken: string, user: User) => void;
  clearAuth: () => void;

  login: (email: string, password: string) => Promise<User>;
  refreshToken: () => Promise<void>;
  currentUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  setAuth: (accessToken, user) => {
    set({ accessToken, user });
  },
  clearAuth: () => {
    set({ accessToken: null, user: null });
  },
  login: async (email: string, password: string) => {
    try {
      const { access_token, user } = await loginUser(email, password);
      localStorage.setItem('accessToken', access_token);
      set({ user, accessToken: access_token });

      return user;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error; 
    }
  },
  refreshToken: async () => {
    const { access_token, user } = await refreshTokenApi();
    set({ accessToken: access_token, user });
  },
  currentUser: async () => {
    try{
      const meUser = await getCurrentUserApi();
      set({ user: meUser });
    } catch (error) {
      console.error('Error fetching current user:', error);
      set({ user: null });
    }
  }
}));
    