import style from './style.module.scss'
import Logo from '@/components/logo'
import ButtonPrimary from '@/components/button/primary'
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateUserStore } from '@/store/users/useCreateUser';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const createUserSchema = z.object({
    name: z.string().min(2, { message: "Nome é obrigatório" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
    confirm_password: z.string().min(6, { message: "Confirmação de senha é obrigatória" }),
}).refine((data) => data.password === data.confirm_password, {
  message: "As senhas não coincidem",
  path: ["confirm_password"], // <--- associa o erro ao campo
});

type CreateUserSchema = z.infer<typeof createUserSchema>;

export default function Register() {

    const { register, handleSubmit, formState: { errors }  } = useForm<CreateUserSchema>({
        resolver: zodResolver(createUserSchema),
    });

    const registerUser = useCreateUserStore((state) => state.register);
    const userCreatedSuccessfully = useCreateUserStore((state) => state.userCreatedSuccessfully);
    const resetUserCreated = useCreateUserStore((state) => state.resetUserCreated);
    const navigate = useNavigate();

   useEffect(() => {
    if (userCreatedSuccessfully) {
      navigate('/login');
      resetUserCreated();
    }
  }, [userCreatedSuccessfully, navigate, resetUserCreated]);

    function HandleCreateUser(data: CreateUserSchema) {
         registerUser(data.name, data.email, data.password);
    }

    return (
    <>
        <div className={style.register_container}>
            <div className={style.form_register_container}>
                <Logo />
                <form onSubmit={handleSubmit(HandleCreateUser)}>
                    <input id="name" type="text" placeholder='Nome' {...register("name")} autoComplete="on"/>
                        {errors.name && <p>{errors.name.message}</p>}
                    <input type="text" placeholder='Email' {...register("email")} autoComplete="on"/>
                        {errors.email && <p>{errors.email.message}</p>}
                    <input type="password" placeholder='Senha' {...register("password")} />
                        {errors.password && <p>{errors.password.message}</p>}
                    <input type="password" placeholder='Confirme a senha' {...register("confirm_password")} />
                        {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
                        {errors?.root?.message && <p>{errors.root.message}</p>}
                    <ButtonPrimary label='Cadastrar' type='submit' className='w-100'/>
                </form>
                <p><span>Já tem uma conta?</span> &nbsp; <a href="/login">Entrar</a></p>
            </div>
        </div>
    </>
  )
}
