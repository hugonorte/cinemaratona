import style from "./style.module.scss";
import { IoSearch } from "react-icons/io5";

interface SmallSearchProps {
    onChange?: (value: string) => void;
    value?: string;
    label?: string;
    placeholder?: string;
    onClick?: () => void;
}

export default function SmallSearch({label, placeholder, onChange, value, onClick}: SmallSearchProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };
    return (
        <>
            <label>
                {label || ""}
                <div className={style.input}>
                    <input type="text" placeholder={placeholder} onChange={handleChange} value={value}/>
                    <button type="button" onClick={onClick}>
                        <IoSearch />
                    </button>
                </div>
            </label>
        </>
    )
}
