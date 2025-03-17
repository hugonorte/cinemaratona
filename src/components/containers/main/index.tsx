import style from './style.module.scss'

interface MainProps {
    children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <div className={style.container}>
        {children}
    </div>
  )
}
