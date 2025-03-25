import { useState } from "react";
import BaseLayout from "../../components/layout";
import ButtonPrimary from "../../components/button";
import style from "./style.module.scss";
import styleDoComponente from "../../components/button/style.module.scss";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = {
      email: userName,
      password: password,
    };

    try {
      const response = await fetch("URL da API", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), 
      });

      const data = await response.json(); 


      //Incompleto, verificar com o grupo.
      if (response.ok) {
        alert("Login realizado com sucesso!");
        console.log("Token recebido:", data.token);
      } else {
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao conectar com o servidor");
    }
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
            <a href="/signup">Criar uma conta</a>
          </div>
        </form>
      </div>
    </BaseLayout>
  );
};

export default Login;
