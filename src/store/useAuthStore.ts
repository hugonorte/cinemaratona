import { create } from 'zustand';
import { loginUser } from '@/api/loginAPI';
import { jwtDecode } from 'jwt-decode';

interface User {
  id: string;
}

interface DecodedToken {
  sub: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  login: (email: string, password: string) => Promise<User>;
  restoreUser: () => void;
  isHydrating: boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
  login: async (email: string, password: string) => {
    try {
      const { access_token, refresh_token, user } = await loginUser(email, password);
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);
      set({ user, accessToken: access_token, refreshToken: refresh_token });

      return user;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error; 
    }
  },
  restoreUser: async () => {
    set({ isHydrating: true });
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      set({ isHydrating: false });
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(accessToken);
      set({
        user: { id: decoded.sub },
        accessToken,
        refreshToken: localStorage.getItem('refreshToken'),
      });
    } catch (err) {
      console.error('Token inválido:', err);
    } finally {
      set({ isHydrating: false });
    }
  },
  isHydrating: true,
}));