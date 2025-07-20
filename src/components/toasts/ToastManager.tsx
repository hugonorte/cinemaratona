// src/components/ToastManager.tsx
import { useToastStore } from "@/store/toast/toastStore";
import SuccessToast from "@/components/toasts/success";
/* import ErrorToast from "@/components/toasts/error";
import WarningToast from "@/components/toasts/warning";
import InfoToast from "@/components/toasts/info"; */

export default function ToastManager() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div>
      {toasts.map((toast) => {
        const commonProps = {
          //key: toast.id,
          message: toast.message,
          onClose: () => removeToast(toast.id),
        };

        switch (toast.type) {
          case "success":
            return <SuccessToast key={toast.id} {...commonProps} />;
         /*  case "error":
            return <ErrorToast {...commonProps} />;
          case "warning":
            return <WarningToast {...commonProps} />;
          case "info":
            return <InfoToast {...commonProps} />; */
          default:
            return null;
        }
      })}
    </div>
  );
}
