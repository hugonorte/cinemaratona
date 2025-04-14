import { Link } from 'react-router'
import style from './style.module.scss'
import ButtonPrimary from '../button/primary'

export default function nav() {
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
                    <ButtonPrimary type="button" label="Login" />
                </div>
            </nav>
        </div>
    )
}
