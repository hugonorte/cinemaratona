import { FaRegStar } from "react-icons/fa";
import style from "./style.module.scss";

export default function FavoriteBtn() {
  return (
    <>
        <div className={style.container}>
            <button>
                <span className={style.icon}>
                    <FaRegStar />
                </span>
                Marcar como favorito
            </button>
        </div>
    </>
  )
}
