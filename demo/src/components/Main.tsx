import React from 'react';

import Container from '@mui/material/Container';

import ButtonGrid from 'components/ButtonGrid';
import Instructions from 'components/Instructions';
import Settings from 'components/Settings';
import Grid from '@mui/material/Grid';

const defaultSettings: NotificationSettings = {
  duration: 5000,
  dismissible: false,
  message: 'This is a notification',
};

const Main = () => {
  const [settings, setSettings] =
    React.useState<NotificationSettings>(defaultSettings);

  return (
    <Container sx={{ my: 5 }} component="main">
      <Grid container display="flex" justifyContent="center">
        <Grid item xs={6}>
          <Instructions />
          <Settings settings={settings} setSettings={setSettings} />
        </Grid>
      </Grid>
      <ButtonGrid settings={settings} />
    </Container>
  );
};

export default Main;
