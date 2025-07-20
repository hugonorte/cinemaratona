import Logo from "@/components/logo";
import style from "./style.module.scss";
import { CiCircleCheck } from "react-icons/ci";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
}
export default function SuccessToast({ message, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  return (
    <div className={`${style.toast_container} ${visible ? style.show : style.hide}`}>
        <div className={style.toast_header}>
            <Logo/>
            <span onClick={handleClose}>
                X
            </span>
        </div>
        <div className={style.toast_body}>
          <h3><CiCircleCheck />Sucesso</h3>
          <span>{message || 'Success!'}</span>
        </div>
    </div>
  )
}
