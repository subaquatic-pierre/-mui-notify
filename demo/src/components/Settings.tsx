import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface Props {
  settings: NotificationSettings;
  setSettings: React.Dispatch<React.SetStateAction<NotificationSettings>>;
}

const Settings = ({ settings, setSettings }: Props) => {
  const handleMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSettings((oldSettings: NotificationSettings) => ({
      ...oldSettings,
      message: event.target.value,
    }));
  };

  const handleDurationChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSettings((oldSettings: NotificationSettings) => ({
      ...oldSettings,
      duration: Number(event.target.value),
    }));
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ): void => {
    setSettings((oldSettings: NotificationSettings) => ({
      ...oldSettings,
      dismissible: checked,
    }));
  };

  return (
    <Paper sx={{ p: 2, my: 2 }} variant="outlined">
      <Stack spacing={2}>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                value={settings.dismissible}
                onChange={handleCheckboxChange}
              />
            }
            label="Dismissible"
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            id="duration"
            label="Duration in ms"
            variant="outlined"
            onChange={handleDurationChange}
            value={settings.duration}
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            id="message"
            label="Message"
            variant="outlined"
            onChange={handleMessageChange}
            value={settings.message}
          />
        </Box>
      </Stack>
    </Paper>
  );
};

export default Settings;
