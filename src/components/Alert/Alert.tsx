import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

interface IMUIAlert {
  showAlert: boolean;
  severity: "success" | "warning" | "error" | "info";
  message: string;
  handleAlertClose: () => void;
}

export const MUIAlert: React.FunctionComponent<IMUIAlert> = ({
  showAlert,
  severity,
  message,
  handleAlertClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={showAlert}
      autoHideDuration={6000}
      onClose={handleAlertClose}
    >
      <Alert
        onClose={handleAlertClose}
        severity={severity}
        elevation={6}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
