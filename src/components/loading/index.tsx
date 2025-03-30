import logo_icon from "@assets/img/logo_icon.svg";
import style from "./style.module.scss";

export default function Loading() {
  return (
    <>
    <div className={style.container}>
        <img src={logo_icon} alt="Logo girando" className={style.rotating} />
        <div className={style.loadingText}>
          Carregando...
        </div>
    </div>
    </>
  )
}
