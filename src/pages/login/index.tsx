import ButtonPrimary from '@/components/button/primary'
import Logo from '../../components/logo'
import style from './style.module.scss'
import { Link } from 'react-router'

export default function Login() {
  return (
    <>
    <div className={style.login_container}>
        <main>
            <div className={style.form_login_container}>
                <Logo />
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Senha' />
                    <Link to='/social'>
                        <ButtonPrimary label='Entrar' type='button' className='w-100'/>
                    </Link>
                </form>
                <p><span>Não tem uma conta?</span> &nbsp; <a href="/register">Cadastre-se</a></p>
                <p>Esqueceu a senha? &nbsp; <a href="/reset">Recuperar</a></p>
            </div>
        </main>
    </div>
    </>
  )
}
