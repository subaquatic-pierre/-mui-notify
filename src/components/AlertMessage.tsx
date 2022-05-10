import React from 'react';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { useNotificationState, useNotify, useNotificationConfig } from 'hooks';

const AlertMessage: React.FC = () => {
  const { clearNotification } = useNotify();
  const notificationState = useNotificationState();
  const notificationConfig = useNotificationConfig();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    clearNotification();
  };

  return (
    <>
      <Snackbar
        open={notificationState.isOpen}
        autoHideDuration={notificationConfig.duration}
        onClose={handleClose}
        anchorOrigin={notificationConfig.anchorOrigin}
      >
        <Alert
          onClose={handleClose}
          severity={notificationState.type}
          variant="filled"
        >
          {notificationState.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertMessage;
