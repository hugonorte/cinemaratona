import React, { type JSX } from 'react'
import style from './style.module.scss';

interface MeuComponenteProps {
    tag?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    color?: 'success' | 'error' | 'warning' | 'warning' | 'info' | 'warning' | 'black' | 'gray' | 'blue' | 'white' | 'default' | undefined;
    customColor?: string;
}

function Title({ tag = 'div', children, color, customColor }: MeuComponenteProps) {
    const Tag = tag as keyof JSX.IntrinsicElements;

    return (
        <Tag className={`${style.text} ${color ? style[color] : ''}`} style={{ color: customColor }}>
            {children}
        </Tag>
    )
}

export default Title