import { MdLibraryAdd } from "react-icons/md";
import style from "./style.module.scss";

interface AddToListBtnProps {
  onClick?: () => void;
  listed: boolean;
}

export default function AddToListBtn({ onClick, listed }: AddToListBtnProps) {
  return (
    <>
        <div className={style.AddToList_container} onClick={onClick}>
            <button className={listed  ? style.listed : ""}>
                <span className={`${style.icon} ${listed ? style.listed : ""}`}>
                    <MdLibraryAdd />
                </span>
                {listed ? "Adicionado à lista" : "Adicionar à lista"}
            </button>
        </div>
    </>
  )
}
