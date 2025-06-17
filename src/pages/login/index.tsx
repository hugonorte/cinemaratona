import ButtonPrimary from '@/components/button/primary';
import Logo from '@/components/logo';
import style from './style.module.scss';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '@/store/useAuthStore';
import { Navigate } from "react-router";
import { useEffect, useState } from 'react';
import { useCreateUserStore } from '@/store/users/useCreateUser';

const loginUserSchema = z.object({
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
});
type LoginUserSchema = z.infer<typeof loginUserSchema>;

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginUserSchema>({
        resolver: zodResolver(loginUserSchema),
    });

    const user = useAuthStore((state) => state.user);
    const login = useAuthStore((state) => state.login);

    const [loading, setLoading] = useState(false);
    const [authReady, setAuthReady] = useState(false);

    const userCreatedSuccessfully = useCreateUserStore((state) => state.userCreatedSuccessfully);
    const resetUserCreated = useCreateUserStore((state) => state.resetUserCreated);

    useEffect(() => {
        setAuthReady(true);
    }, []);

    useEffect(() => {
    if (userCreatedSuccessfully) {
      console.log('Usuário criado com sucesso!');
      resetUserCreated(); // limpa a flag após exibir
    }
  }, [userCreatedSuccessfully, resetUserCreated]);

    const handleLoginUser = async (data: LoginUserSchema) => {
        try {
            setLoading(true);
            await login(data.email, data.password);
        } catch (error) {
            alert('Login falhou. Verifique suas credenciais.'+' '+error);
        } finally {
            setLoading(false);
        }
    };

    if (!authReady) return null; // ou um spinner

    if (user) return <Navigate to="/social" replace />;

    return (
        <div className={style.login_container}>
            <main>
                <div className={style.form_login_container}>
                    <Logo />
                    <form onSubmit={handleSubmit(handleLoginUser)}>
                        <input id="email" type="text" placeholder='Email' {...register("email")} />
                        {errors.email && <p>{errors.email.message}</p>}
                        <input id="password" type="password" placeholder='Senha' {...register("password")} />
                        {errors.password && <p>{errors.password.message}</p>}
                        <ButtonPrimary label={loading ? 'Entrando...' : 'Entrar'} type='submit' className='w-100'  />
                    </form>
                    <p><span>Não tem uma conta?</span> &nbsp; <a href="/register">Cadastre-se</a></p>
                    <p>Esqueceu a senha? &nbsp; <a href="/reset">Recuperar</a></p>
                </div>
            </main>
        </div>
    );
}
