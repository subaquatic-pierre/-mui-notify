import React from 'react';

import Grid from '@mui/material/Grid';

import NotifyButton from 'components/NotifyButton';

const notifyButtons: NotifyButton[] = [
  { title: 'Info', color: 'info' },
  { title: 'Success', color: 'success' },
  { title: 'Error', color: 'error' },
  { title: 'Warning', color: 'warning' },
];

const ButtonGrid = () => {
  return (
    <Grid
      sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}
      container
      spacing={2}
    >
      {notifyButtons.map((button, i) => {
        return (
          <Grid
            sx={{ display: 'flex', justifyContent: 'center' }}
            item
            key={i}
            xs={6}
            md={4}
            lg={2}
          >
            <NotifyButton
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
