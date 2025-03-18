import style from "./style.module.scss";

interface ButtomProps{
    type: "button" | "submit" | "reset" | undefined;
    className?: string;
    children?: React.ReactNode;
    label?: string;
    onClick?: () => void;
}

export default function ButtonLight({type, className, label, children, onClick}:ButtomProps) {
  return (
    <button className={`${style.button} ${className || ""}`} type={type} onClick={onClick}>
        {children || label}
    </button>
  )
}
