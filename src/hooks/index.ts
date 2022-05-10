import React from 'react';
import {
  NotificationState,
  NotificationMethods,
  NotificationConfig,
} from 'context';

export const useNotificationState = () => {
  return React.useContext(NotificationState);
};

export const useNotificationConfig = () => {
  return React.useContext(NotificationConfig);
};

export const useNotify = () => {
  return React.useContext(NotificationMethods);
};
