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
          Choose wether the notification should be dismissible or not, by
          default dismissible is set to false.
        </Typography>
      </Box>
      <Box>
        <Typography>
          Set the duration of the notification to be displayed. If the value is
          set to 0 it will default to 5000 ms. If you wish to set the
          notification to remain forever you will need to enable dismissible and
          set duration to 0
        </Typography>
      </Box>
      <Box>
        <Typography>
          Set notification message, the default value for the message is: "This
          is a notification"
        </Typography>
      </Box>
    </Stack>
  );
};

export default Instructions;
