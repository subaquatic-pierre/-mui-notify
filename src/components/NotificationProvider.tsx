import React from 'react';

import {
  initialState,
  initialConfig,
  NotificationConfig,
  NotificationState,
  NotificationMethods,
} from 'context';
import AlertMessage from 'components/AlertMessage';

interface Props {
  children: React.ReactElement;
  config?: NotificationConfig;
}

const NotificationProvider: React.FC<Props> = ({
  children,
  config = initialConfig,
}: Props): JSX.Element => {
  const [notificationConfig, setNotificationConfig] =
    React.useState<NotificationConfig>(config);

  const [notificationState, setNotificationState] =
    React.useState<NotificationState>(initialState);

  const setNotification: SetNotification = ({
    message,
    type,
    config = undefined,
  }) => {
    if (config !== undefined) {
      // Update config here
      setNotificationConfig({});
      console.log(config);
    }

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
    <NotificationConfig.Provider value={notificationConfig}>
      <NotificationState.Provider value={notificationState}>
        <NotificationMethods.Provider
          value={{ setNotification, clearNotification }}
        >
          <AlertMessage />
          {children}
        </NotificationMethods.Provider>
      </NotificationState.Provider>
    </NotificationConfig.Provider>
  );
};

export default NotificationProvider;
