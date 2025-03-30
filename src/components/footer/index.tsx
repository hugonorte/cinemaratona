import Logo from '../logo'
import style from './style.module.scss'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router';
import Title from '../title';

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.columns}>
        <div className={style.footer_column1}>
          <Logo />
        </div>
        <div className={style.footer_column2}>
          <Title tag="h3" customColor='#8dc9fa'>
            Links
          </Title>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Filmes</Link>
          <Link to='/social'>Social</Link>
          <Link to='/discover'>Discover</Link>
          <Title tag="h3" customColor='#8dc9fa'>
            Nossas Redes
          </Title>
          <div className={style.social_icons}>
            <FaFacebookSquare />
            <FaSquareXTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className={style.footer_column3}>
          <Title tag="h3" customColor='#8dc9fa'>
            Legal
          </Title>
          <Link to='/privacy'>Privacidade</Link>
          <Link to='/terms'>Termos de Uso</Link>
          <Link to='/faq'>FAQ</Link>
        </div>
      </div>
      <div className={style.copyright}>
        Cinemaratona © 2025 - Todos os direitos reservados
      </div>
    </footer>
  )
}
