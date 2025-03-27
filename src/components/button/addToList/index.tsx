import { MdLibraryAdd } from "react-icons/md";
import style from "./style.module.scss";

export default function AddToListBtn() {
  return (
    <>
        <div className={style.container}>
            <button>
                <span className={style.icon}>
                    <MdLibraryAdd />
                </span>
                Adicionar à lista
            </button>
        </div>
    </>
  )
}
