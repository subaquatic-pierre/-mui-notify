import React from 'react';

import Button from '@mui/material/Button';

interface Props {
  title: string;
  color: NotifyButtonColor;
  settings: NotificationSettings;
}

const NotifyButton = ({ title, color }: Props) => {
  return (
    <Button variant="contained" color={color}>
      {title}
    </Button>
  );
};

export default NotifyButton;
