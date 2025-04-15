import React from 'react'
import style from './style.module.scss'

interface SearchResultsProps {
    children: React.ReactNode;
    className?: string;
}

function SearchResultsContainer({ children, className }: SearchResultsProps) {
  return (
    <div className={style.container +' ' + className}>
        { children }
    </div>
  )
}

export default SearchResultsContainer