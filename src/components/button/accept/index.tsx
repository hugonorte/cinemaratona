import style from './style.module.scss';

interface AcceptBtnProps {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export default function AcceptBtn({type = 'button', className}: AcceptBtnProps) {
  return (
    <div className={style.acceptBtn}>
        <button type={type} className={className} >
            Aceitar
        </button>
    </div>
  )
}
