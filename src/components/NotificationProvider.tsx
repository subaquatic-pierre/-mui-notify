import React from 'react';

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

  const setNotification: SetNotification = ({ message, type }) => {
    setNotificationState({
      message,
      type,
      isOpen: true,
    });
  };

  const clearNotification: ClearNotification = () => {
    setNotificationState((oldState) => ({
      ...oldState,
      isOpen: false,
    }));
  };

  return (
    <NotificationState.Provider value={notificationState}>
      <NotificationMethods.Provider
        value={{ setNotification, clearNotification }}
      >
        <AlertMessage />
        {children}
      </NotificationMethods.Provider>
    </NotificationState.Provider>
  );
};

export default NotificationProvider;
