import style from './style.module.scss'
import ButtonPrimary from '../button/primary'
import Logo from '../logo'
import { Link } from 'react-router'

function Header() {
  return (
    <div className={style.header}>
        <Link to={`/`}>
            <Logo />
        </Link>
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
                    <Link to={`/social`}>
                        Social
                    </Link>
                </li>
                <li>
                    <Link to={`/discover`}>
                        Discover
                    </Link>
                </li>
            </ul>
            <div className={style.buttons}>
                <ButtonPrimary type="button" label="Login"/>
            </div>
        </nav>
    </div>
  )
}

export default Header