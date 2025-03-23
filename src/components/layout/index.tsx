import React from 'react'
import style from './style.module.scss'
import Header from '../header'

interface BaseLayoutProps {
    children: React.ReactNode
}

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className={style.header_container}>
        <Header />
        <div className={style.container}>
          {children}
        </div>
    </div>
  )
}

export default BaseLayout