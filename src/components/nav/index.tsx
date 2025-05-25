import { Link, Navigate } from 'react-router'
import style from './style.module.scss'
import ButtonPrimary from '../button/primary'
import { useAuthStore } from '@/store/useAuthStore.ts';
import { logout } from '@/services/logout'

export default function Nav() {

    const user = useAuthStore((state) => state.user);
    const loggingOut = () => {
        logout();
        return <Navigate to="/" replace />;
    }

    return (
        <div className={style.nav_container}>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={`/filmes`}>
                            Filmes
                        </Link>
                    </li>
                    <li>
                        <Link to={`/discover`}>
                            Discover
                        </Link>
                    </li>
                    <li>
                        <Link to={`/social`}>
                            Social
                        </Link>
                    </li>
                    {
                        user ? (
                            <li>
                               <span onClick={ loggingOut }>
                                   Logout
                               </span> 
                            </li>
                        ) : (
                            <div className={style.buttons}>
                                <Link to='/login'>
                                    <ButtonPrimary type="button" label="Login" />
                                </Link>
                            </div>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}
