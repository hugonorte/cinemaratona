import { RiShareForwardFill } from "react-icons/ri";
import style from "./style.module.scss";

export default function RecommendBtn() {
  return (
    <>
        <div className={style.container}>
            <button>
                <span className={style.icon}>
                  <RiShareForwardFill />
                </span>
                Indicar para um amigo
            </button>
        </div>
    </>
  )
}
