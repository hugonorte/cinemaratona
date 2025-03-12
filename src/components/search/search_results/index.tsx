import React from 'react'
import style from './style.module.scss'

interface SearchResultsProps {
    children: React.ReactNode;
}

function SearchResultsContainer({ children }: SearchResultsProps) {
  return (
    <div className={style.container}>
        { children }
    </div>
  )
}

export default SearchResultsContainer