import style from './style.module.scss';

interface FriendCardProps {
    name: string;
    picture: string;
    onClick: () => void;
}

export default function FriendCard({picture, name, onClick}: FriendCardProps) {
  return (
    <div className={style.container} onClick={onClick}>
        <img src={picture} />
        <span>
            {name}
        </span>
    </div>
  )
}
