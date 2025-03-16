import BaseLayout from '../../components/layout'
import style from './style.module.scss'

export default function Home() {
  return (
    <BaseLayout>
        <div className={style.container}>
            <section className={style.header}>
                Destaque
            </section>
            <section className={style.trends}>

            </section>
            <section className={style.social}>

            </section>
            <section className={style.top_rated}>

            </section>
        </div>
    </BaseLayout>
  )
}
