import React from 'react';

import Button from '@mui/material/Button';
import { useNotify } from 'react-mui-notify';

interface Props {
  title: string;
  type: NotifyButtonColor;
  config: NotificationConfig;
  state: NotificationState;
}

const NotifyButton = ({ title, type, state }: Props) => {
  const { setNotification } = useNotify();

  const handleClick = () => {
    setNotification(state.message, type);
  };

  return (
    <Button onClick={handleClick} variant="contained" color={type}>
      {title}
    </Button>
  );
};

export default NotifyButton;
