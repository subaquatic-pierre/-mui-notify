import React from 'react';

export const initialNotificationConfig: NotificationConfig = {};

export const initialState: NotificationState = {
  message: '',
  type: 'info',
  isOpen: false,
};

export const NotificationState =
  React.createContext<NotificationState>(initialState);

export const NotificationMethods = React.createContext<NotificationMethods>(
  {} as NotificationMethods,
);
