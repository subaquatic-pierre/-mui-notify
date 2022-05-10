import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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

  const handleVerticalAlignChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNotificationConfig((oldConfig: NotificationConfig) => ({
      ...oldConfig,
      anchorOrigin: {
        ...oldConfig.anchorOrigin,
        vertical: event.target.value,
      },
    }));
  };
  const handleHorizontalAlignChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNotificationConfig((oldConfig: NotificationConfig) => ({
      ...oldConfig,
      anchorOrigin: {
        ...oldConfig.anchorOrigin,
        horizontal: event.target.value,
      },
    }));
  };

  return (
    <Paper sx={{ p: 2, my: 2 }} variant="outlined">
      <Stack spacing={2}>
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
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Horizontal Align
            </FormLabel>
            <RadioGroup
              row
              name="horizontalAlign"
              value={notificationConfig.anchorOrigin.horizontal}
              onChange={handleHorizontalAlignChange}
            >
              <FormControlLabel value="left" control={<Radio />} label="Left" />
              <FormControlLabel
                value="center"
                control={<Radio />}
                label="Center"
              />
              <FormControlLabel
                value="right"
                control={<Radio />}
                label="Right"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Vertical Align
            </FormLabel>
            <RadioGroup
              row
              name="verticalAlign"
              value={notificationConfig.anchorOrigin.vertical}
              onChange={handleVerticalAlignChange}
            >
              <FormControlLabel value="top" control={<Radio />} label="Top" />
              <FormControlLabel
                value="bottom"
                control={<Radio />}
                label="Bottom"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
    </Paper>
  );
};

export default Settings;
