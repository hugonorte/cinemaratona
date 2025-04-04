import { useState } from "react";
import BaseLayout from "../../components/layout";
import ButtonPrimary from "../../components/button/primary";
import style from "./style.module.scss";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // Controla os passos

  const handleSendEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("URL_DA_API/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Código enviado para seu email.");
        setStep(2); // Avança para o próximo passo
      } else {
        alert("Erro ao enviar email.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const handleVerifyCode = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("URL_DA_API/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      if (response.ok) {
        setStep(3);
      } else {
        alert("Código inválido.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const handleResetPassword = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("URL_DA_API/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code, newPassword }),
      });

      if (response.ok) {
        alert("Senha redefinida com sucesso!");
        window.location.href = "/login";
      } else {
        alert("Erro ao redefinir senha.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <BaseLayout>
      <div className={style.container}>
        {step === 1 && (
          <form onSubmit={handleSendEmail}>
            <h1>Recuperar Senha</h1>
            <hr></hr>
            <p>Informe o seu email cadastrado para a recuperação da sua senha</p>
            <div className={style.inputField}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
            </div>
            <ButtonPrimary type="submit" label="Enviar Código" />
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyCode}>
            <h1>Digite o Código</h1>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Código recebido no email"
              required
            />
            <ButtonPrimary type="submit" label="Verificar Código" />
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword}>
            <h1>Nova Senha</h1>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Digite sua nova senha"
              required
            />
            <ButtonPrimary type="submit" label="Redefinir Senha" />
          </form>
        )}
      </div>
    </BaseLayout>
  );
};

export default ForgotPassword;
