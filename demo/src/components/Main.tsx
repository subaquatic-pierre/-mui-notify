import React from 'react';

import Container from '@mui/material/Container';

import ButtonGrid from 'components/ButtonGrid';
import Instructions from 'components/Instructions';
import Settings from 'components/Settings';
import Grid from '@mui/material/Grid';

const defaultConfig: NotificationConfig = {
  duration: 5000,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

const defaultState: NotificationState = {
  message: 'This is a notification',
  type: 'info',
};

const Main = () => {
  const [notificationState, setNotificationState] =
    React.useState<NotificationState>(defaultState);

  const [notificationConfig, setNotificationConfig] =
    React.useState<NotificationConfig>(defaultConfig);

  return (
    <Container sx={{ my: 5 }} component="main">
      <Grid container display="flex" justifyContent="center">
        <Grid item xs={6}>
          <Instructions />
          <Settings
            notificationState={notificationState}
            setNotificationState={setNotificationState}
            notificationConfig={notificationConfig}
            setNotificationConfig={setNotificationConfig}
          />
        </Grid>
      </Grid>
      <ButtonGrid
        notificationConfig={notificationConfig}
        notificationState={notificationState}
      />
    </Container>
  );
};

export default Main;
