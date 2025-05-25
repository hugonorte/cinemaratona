import { useAuthStore } from '../store/useAuthStore';

export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');

  useAuthStore.setState({
    user: null,
    accessToken: null,
    refreshToken: null,
  });
};