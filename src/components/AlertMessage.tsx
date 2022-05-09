import React from 'react';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { useNotificationState, useNotify } from 'hooks';

const AlertMessage: React.FC = () => {
  const { clearNotification } = useNotify();
  const notificationState = useNotificationState();

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
        autoHideDuration={10000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        key={'top center'}
      >
        <Alert
          onClose={handleClose}
          severity={notificationState.type}
          sx={{ minWidth: '600px' }}
          variant="filled"
        >
          {notificationState.message && notificationState.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertMessage;
