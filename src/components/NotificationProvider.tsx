import React from 'react';

import { AlertColor } from '@mui/material';

import { initialState, NotificationState, NotificationMethods } from 'context';
import AlertMessage from 'components/AlertMessage';

interface Props {
  children: React.ReactElement;
}

const NotificationProvider: React.FC<Props> = ({
  children,
}: Props): JSX.Element => {
  const [notificationState, setNotificationState] =
    React.useState<NotificationState>(initialState);

  const parseState = (
    oldState: NotificationState,
    message: string,
    color: AlertColor,
  ) => {
    return {
      ...oldState,
      isOpen: true,
      message: message,
      color: color,
    };
  };

  const clearNotification = () => {
    setNotificationState((oldState) => ({
      ...oldState,
      isOpen: false,
    }));
  };

  const setError = (message: string) => {
    setNotificationState((oldState) => parseState(oldState, message, 'error'));
  };

  const setSuccess = (message: string) => {
    setNotificationState((oldState) =>
      parseState(oldState, message, 'success'),
    );
  };

  const setInfo = (message: string) => {
    setNotificationState((oldState) =>
      parseState(oldState, message, 'warning'),
    );
  };

  const setWarning = (message: string) => {
    setNotificationState((oldState) =>
      parseState(oldState, message, 'warning'),
    );
  };

  const notificationMethods: NotificationMethods = {
    setError,
    setSuccess,
    setInfo,
    setWarning,
    clearNotification,
  };

  return (
    <NotificationState.Provider value={notificationState}>
      <NotificationMethods.Provider value={notificationMethods}>
        <AlertMessage />
        {children}
      </NotificationMethods.Provider>
    </NotificationState.Provider>
  );
};

export default NotificationProvider;
