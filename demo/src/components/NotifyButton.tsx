import React from 'react';

import Button from '@mui/material/Button';
import { useNotify } from 'react-mui-notify';

interface Props {
  title: string;
  color: NotifyButtonColor;
  settings: NotificationSettings;
}

const NotifyButton = ({ title, color }: Props) => {
  const { setNotification } = useNotify();

  const handleClick = () => {
    setNotification('Awesome message', 'info');
  };

  return (
    <Button onClick={handleClick} variant="contained" color={color}>
      {title}
    </Button>
  );
};

export default NotifyButton;
