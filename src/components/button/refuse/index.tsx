import style from './style.module.scss';

interface RefuseBtnProps {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export default function RefuseBtn({type = 'button', className}: RefuseBtnProps) {
  return (
    <div className={style.refuseBtn}>
        <button type={type} className={className} >
            Recusar
        </button>
    </div>
  )
}
