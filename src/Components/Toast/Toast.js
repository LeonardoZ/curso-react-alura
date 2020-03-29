import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default function Toast({ open, handleClose, children, severity = "success" }) {
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} open={open} variant="filled" severity={severity}>
        {children}
      </Alert>
    </Snackbar>
  );
}
