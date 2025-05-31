import { useAuthStore } from '@/store/useAuthStore.ts';
import { Navigate, Outlet } from 'react-router';

export function ProtectedRoute() {
    const user = useAuthStore((state) => state.user);
    const isHydrating = useAuthStore((state) => state.isHydrating);

    if (isHydrating) return <p>Carregando...</p>; 
    
    if (!user) {
        return <Navigate to="/login" replace />;
    }

  return <Outlet />;
}