import Title from '../../components/title'
import style from './style.module.scss'
import Card from '../../components/card/generic'
import ColorBox from '../../components/colorbox'

export default function Design() {
  return (
    <div className={style.container}>
        <Title tag='h1'>
            Design
        </Title>

        <Card>
            <Title tag='h2'>
                Main Colors
            </Title>
            <div className={style.colors_row}>
                <ColorBox name='blue' />
                <ColorBox name='black' />
            </div>
        </Card>
        <Card>
            <Title tag='h2'>
                Darker Blues
            </Title>
            <div className={style.colors_row}>
                {Array.from({ length: 10 }, (_, i) => (
                    <ColorBox key={i+1} name={`blue_dark${i+1}`} />
                ))}
            </div>
        </Card>
        <Card>
            <Title tag='h2'>
                Lighten Blues
            </Title>
            <div className={style.colors_row}>
                {Array.from({ length: 10 }, (_, i) => (
                    <ColorBox key={i+1} name={`blue_light${i+1}`} />
                ))}
            </div>
        </Card>
        <Card>
            <Title tag='h2'>
                Grays
            </Title>
            <div className={style.colors_row}>
                {Array.from({ length: 10 }, (_, i) => (
                    <ColorBox key={i+1} name={`gray${i+1}`} />
                ))}
            </div>
        </Card>
        <Card>
            <Title tag='h2'>
                Blued Grays
            </Title>
            <div className={style.colors_row}>
                {Array.from({ length: 10 }, (_, i) => (
                    <ColorBox key={i+1} name={`bluedgray${i+1}`} />
                ))}
            </div>
        </Card>
    </div>
  )
}