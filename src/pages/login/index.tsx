import { useState } from "react";
import BaseLayout from "../../components/layout";
import button from "../../components/button";
import style from './style.module.scss';
import ButtonPrimary from "../../components/button";
import styleDoComponente from "../../components/button/style.module.scss"

const login = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("teste", userName, password);

    };

    return (
       <BaseLayout>
       <div className={style.container}>
        <form onSubmit={handleSubmit}>
            <h1>Acesse</h1>
            <div className={style.inputField}>
            <input 
                type="email" 
                value={userName} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Email"
            />
            </div>
            <div className={style.inputField}>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Senha"
            />
            </div>

            <div className={style.recallForget}>
                <label>
                    <input type="checkbox" />
                    Lembrar de mim
                </label>
                <a href="#">Esqueci minha senha</a>
            </div>

            <ButtonPrimary className={styleDoComponente.button} type="submit" label="Entrar" />

            <div className={style.signup}>
                <a href="#">Criar uma conta</a>
            </div>
        </form>
        </div>
        </BaseLayout>
    );

};

export default login;
