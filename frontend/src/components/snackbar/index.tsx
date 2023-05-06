import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { ToastFullContext } from "@/contexts/ToastContext";

export interface ISimpleSnackbarProps {
  open: boolean;
  marginTop?: number;
  message: string;
  type: "success" | "error" | "warning";
  controlShowModal?: (value: React.SetStateAction<boolean>) => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    props,
    ref,    
    // eslint-disable-next-line react/jsx-props-no-spreading
  ) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />,
);

export function SimpleSnackbar(props: ISimpleSnackbarProps) {
  const [open, setOpen] = React.useState(props.open);
  const { HideToast } = ToastFullContext();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    HideToast();
    setOpen(false);
    if (props.controlShowModal) {
      props.controlShowModal(false);
    }    
  };

  return (
    <Snackbar
      style={{
        maxWidth: "400px",
        marginTop: props.marginTop,
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert onClose={handleClose} severity={props.type} sx={{ width: "100%" }}>
        {props.message}
      </Alert>
    </Snackbar>
  );
}
