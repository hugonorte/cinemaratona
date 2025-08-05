import { useAuthStore } from '../store/useAuthStore';

export const logout = () => {
  useAuthStore.setState({
    user: null,
    accessToken: null,
  });
};