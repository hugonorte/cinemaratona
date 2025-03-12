import style from './style.module.scss'
import ButtonPrimary from '../button'

function Header() {
  return (
    <div className={style.header}>
        <div className={style.logo}>
            Cinemaratona
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Social</li>
                <li>FAQ</li>
            </ul>
            <div className={style.buttons}>
                <ButtonPrimary type="button" label="Login"/>
            </div>
        </nav>
    </div>
  )
}

export default Header