import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface Props {
  notificationState: NotificationState;
  setNotificationState: React.Dispatch<React.SetStateAction<NotificationState>>;

  notificationConfig: NotificationConfig;
  setNotificationConfig: React.Dispatch<
    React.SetStateAction<NotificationConfig>
  >;
}

const Settings = ({
  notificationState,
  setNotificationState,
  notificationConfig,
  setNotificationConfig,
}: Props) => {
  const handleMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setNotificationState((oldState: NotificationState) => ({
      ...oldState,
      message: event.target.value,
    }));
  };

  const handleDurationChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setNotificationConfig((oldConfig: NotificationConfig) => ({
      ...oldConfig,
      duration: Number(event.target.value),
    }));
  };

  return (
    <Paper sx={{ p: 2, my: 2 }} variant="outlined">
      <Stack spacing={2}>
        <Box>
          <TextField
            fullWidth
            id="duration"
            label="Duration in ms"
            variant="outlined"
            onChange={handleDurationChange}
            value={notificationConfig.duration}
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            id="message"
            label="Message"
            variant="outlined"
            onChange={handleMessageChange}
            value={notificationState.message}
          />
        </Box>
      </Stack>
    </Paper>
  );
};

export default Settings;
