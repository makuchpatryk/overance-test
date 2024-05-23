import { useToast } from "primevue/usetoast";
import { TOAST_TIME } from "../defaults";

const useToastLocal = () => {
  const toast = useToast();

  const showToast = ({
    severity,
    summary,
    detail,
  }: {
    severity:
      | "success"
      | "info"
      | "warn"
      | "error"
      | "secondary"
      | "contrast"
      | undefined;
    summary: string;
    detail: string;
  }) => {
    toast.add({
      severity,
      summary,
      detail,
      life: TOAST_TIME,
    });
  };
  return {
    showToast,
  };
};

export default useToastLocal;
