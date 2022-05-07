import React from 'react';

import Grid from '@mui/material/Grid';

import NotifyButton from 'components/NotifyButton';

const notifyButtons: NotifyButton[] = [
  { title: 'Info', color: 'info' },
  { title: 'Success', color: 'success' },
  { title: 'Error', color: 'error' },
  { title: 'Warning', color: 'warning' },
];

interface Props {
  settings: NotificationSettings;
}

const ButtonGrid = ({ settings }: Props) => {
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
              settings={settings}
              color={button.color}
              title={button.title}
            ></NotifyButton>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ButtonGrid;
