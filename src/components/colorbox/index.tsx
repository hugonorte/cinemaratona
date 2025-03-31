import Title from '../title'
import style from './style.module.scss'

interface ColorBoxProps {
    name: string,
    color?: string
}

export default function ColorBox({ name }: ColorBoxProps) {
    return (
        <>
            <div className={style.container}>
                <div style={{height:70, width:70}} className={ style[name] }>
                    &nbsp;  
                </div>
                <Title tag='h5'>
                    {name}
                </Title>
            </div>
        </>
    )
}