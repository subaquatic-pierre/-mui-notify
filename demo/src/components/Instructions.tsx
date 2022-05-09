import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Instructions = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography textAlign="center" variant="h4">
          Notification Settings
        </Typography>
      </Box>
      <Box>
        <Typography>
          Set the duration of the notification to be displayed. If the value is
          set to 0 the notification will not timeout.
        </Typography>
      </Box>
      <Box>
        <Typography>
          Set notification message, the default value for the message is
        </Typography>
      </Box>
      <Box>
        <Typography>
          Set the vertical or horizontal alignment of the notification
        </Typography>
      </Box>
    </Stack>
  );
};

export default Instructions;
