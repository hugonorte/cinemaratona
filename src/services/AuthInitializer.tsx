import { useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';

type AuthInitializerProps = {
  children: React.ReactNode;
};
export const AuthInitializer = ({ children }: AuthInitializerProps) => {
  const rehydrateUser = useAuthStore((s) => s.restoreUser);

  useEffect(() => {
    rehydrateUser();
  }, [rehydrateUser]);

  return <>{children}</>;
};