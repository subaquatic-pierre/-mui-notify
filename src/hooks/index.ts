import React from 'react';
import { NotificationState, NotificationMethods } from 'context';

const useNotificationState = () => {
  return React.useContext(NotificationState);
};

const useNotify = () => {
  return React.useContext(NotificationMethods);
};

export { useNotificationState, useNotify };
