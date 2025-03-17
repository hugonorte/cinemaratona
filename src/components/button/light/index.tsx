import style from "./style.module.scss";

interface ButtomProps{
    type: "button" | "submit" | "reset" | undefined;
    className?: string;
    children?: React.ReactNode;
    label?: string;
}

export default function ButtonLight({type, className, label, children}:ButtomProps) {
  return (
    <button className={`${style.button} ${className || ""}`} type={type}>
        {children || label}
    </button>
  )
}
