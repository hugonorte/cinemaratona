import React from 'react'
import style from './style.module.scss'

interface CardProps {
    children: React.ReactNode;
    extraClass?: string;
}

function Card({children, extraClass}: CardProps) {
  return (
    <div className={`${style.container} ${extraClass ? style[extraClass] : ''}`}> 
      {children}
    </div>
  )
}

export default Card