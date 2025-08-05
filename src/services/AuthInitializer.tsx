import { useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';

type AuthInitializerProps = {
  children: React.ReactNode;
};
export const AuthInitializer = ({ children }: AuthInitializerProps) => {
  const refreshToken = useAuthStore((s) => s.refreshToken);

  useEffect(() => {
    const tryRefresh = async () => {
      try {
        await refreshToken();
        console.info('Access token restaurado via refresh token.');
      } catch (error) {
        console.warn('Falha ao restaurar sessão:', error);
      }
    };

    tryRefresh();
  }, [refreshToken]);

  return <>{children}</>;
};