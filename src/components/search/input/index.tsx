import React from 'react'
import style from './style.module.scss'

interface SearchProps {
    type: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    onSubmit: (e: React.FormEvent) => void;
}

function Search({ type, value, onChange, placeholder, onSubmit }: SearchProps) {
    return (
        <form onSubmit={onSubmit} className={style.search}>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <button type="submit">
                Buscar
            </button>
        </form>
    )
}

export default Search