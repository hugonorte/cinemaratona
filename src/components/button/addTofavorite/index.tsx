import { FaRegStar } from "react-icons/fa";
import style from "./style.module.scss";

interface FavoriteBtnProps {
  onClick?: () => void;
  isFavorite: boolean;
}

export default function FavoriteBtn({ onClick, isFavorite }: FavoriteBtnProps) {
  return (
    <>
        <div className={style.FavoriteBtn_container} onClick={onClick}>
            <button className={isFavorite  ? style.isFavorite : ""}>
                <span className={`${style.icon} ${isFavorite ? style.isFavorite : ""}`}>
                    <FaRegStar />
                </span>
                {isFavorite ? "Filme Favorito" : "Marcar como favorito"}
            </button>
        </div>
    </>
  )
}
