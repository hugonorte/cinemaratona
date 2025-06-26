import { CiCircleCheck } from "react-icons/ci";
import style from "./style.module.scss";

interface WatchedBtnProps {
  onClick?: () => void;
  watched: boolean | null;
}

export default function WatchedBtn({ onClick, watched }: WatchedBtnProps) {
  return (
    <>
        <div className={style.WatchedBtn_container} onClick={onClick}>
            <button className={watched  ? style.watched : ""}>
                <span className={`${style.icon} ${watched ? style.watched : ""}`}>
                    <CiCircleCheck />
                </span>
                 {watched ? "Já assistido" : "Marcar como assistido"}
            </button>
        </div>
    </>
  )
}
