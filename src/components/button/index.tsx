import React from 'react'
import style from './style.module.scss'

interface ButtomProps{
    type: "button" | "submit" | "reset" | undefined;
    className?: string;
    label: string;
}

function ButtonPrimary({type, className, label}:ButtomProps){
  return (
    <button className={`${style.button} ${className || ""}`} type={type}>
        {label}
    </button>
  )
}

export default ButtonPrimary