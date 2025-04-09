import style from './style.module.scss';
import Pedro from '@/assets/img/friends/pedro.png';

export default function FriendCard() {
  return (
    <div className={style.container}>
        <img src={Pedro} />
        <span>
            Pedro de Lara
        </span>
    </div>
  )
}
