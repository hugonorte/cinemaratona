import style from './style.module.scss'
import Logo from '../../components/logo'
import ButtonPrimary from '@/components/button/primary'
import { Link } from 'react-router'

export default function Register() {
  return (
    <>
        <div className={style.register_container}>
            <div className={style.form_register_container}>
                <Logo />
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder='Nome' />
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Senha' />
                    <input type="password" placeholder='Confirme a senha' />
                    <Link to='/social'>
                        <ButtonPrimary label='Cadastrar' type='button' className='w-100'/>
                    </Link>
                </form>
                <p><span>Já tem uma conta?</span> &nbsp; <a href="/login">Entrar</a></p>
            </div>
        </div>
    </>
  )
}
