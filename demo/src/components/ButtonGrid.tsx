import React from 'react';

import Grid from '@mui/material/Grid';

import NotifyButton from 'components/NotifyButton';

const notifyButtons: NotifyButton[] = [
  { title: 'Info', type: 'info' },
  { title: 'Success', type: 'success' },
  { title: 'Error', type: 'error' },
  { title: 'Warning', type: 'warning' },
];

interface Props {
  notificationConfig: NotificationConfig;
  notificationState: NotificationState;
}

const ButtonGrid = ({ notificationConfig, notificationState }: Props) => {
  return (
    <Grid
      sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
      container
      spacing={2}
    >
      {notifyButtons.map((button, i) => {
        return (
          <Grid sx={{ display: 'flex', justifyContent: 'center' }} item key={i}>
            <NotifyButton
              config={notificationConfig}
              state={notificationState}
              type={button.type}
              title={button.title}
            ></NotifyButton>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ButtonGrid;
