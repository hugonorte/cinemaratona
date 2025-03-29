import { useState } from "react";
import BaseLayout from "../../components/layout";
import ButtonPrimary from "../../components/button/primary";
import style from "./style.module.scss";
import styleDoComponente from "../../components/button/primary/style.module.scss";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Senhas não coincidem");
      return;
    }
    

    const userData = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch("URL_DA_API/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        console.log("Usuário cadastrado:", data);
      } else {
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
      alert("Erro ao conectar com o servidor");
    }
  };

  return (
    <BaseLayout>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>
          <div className={style.inputField}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
            />
          </div>
          <div className={style.inputField}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className={style.inputField}>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme sua Senha"
            />
          </div>

          {error && <div className={style.error}>{error}</div>}

          <ButtonPrimary className={styleDoComponente.button} type="submit" label="Cadastrar" />

          <div className={style.signup}>
            <a href="/login">Já tem uma conta? Faça login</a>
          </div>
        </form>
      </div>
    </BaseLayout>
  );
};

export default Signup;
