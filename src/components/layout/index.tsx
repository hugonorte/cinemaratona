import React, { useEffect } from 'react'
import style from './style.module.scss'
import Header from '../header'
import Footer from '../footer'
import { useLocation } from 'react-router'

interface BaseLayoutProps {
    children: React.ReactNode
}

function BaseLayout({ children }: BaseLayoutProps) {
  const location  = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }
  , [location.pathname])

  return (
    <div className={style.header_container}>
        <Header />
        <div className={style.container}>
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default BaseLayout