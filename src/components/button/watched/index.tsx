import { CiCircleCheck } from "react-icons/ci";
import style from "./style.module.scss";

export default function WatchedBtn() {
  return (
    <>
        <div className={style.container}>
            <button>
                <span className={style.icon}>
                    <CiCircleCheck />
                </span>
                Marcar como assistido
            </button>
        </div>
    </>
  )
}
