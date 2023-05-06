import React from "react";
import { ToastFullContext } from "@/contexts/ToastContext";
import { SimpleSnackbar } from "../snackbar";

export const ToastComponent = () => {
  const { GetToastInformations } = ToastFullContext();
  if (!GetToastInformations().toastName) return <div />;

  return (
    <SimpleSnackbar
      type={GetToastInformations().toastName as any}
      marginTop={80}
      message={GetToastInformations().message}
      open
    />
  );
};
