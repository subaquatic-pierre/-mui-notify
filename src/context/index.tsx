import React from 'react';

export const initialConfig: NotificationConfig = {};

export const initialState: NotificationState = {
  message: '',
  type: 'info',
  isOpen: false,
};

export const NotificationConfig =
  React.createContext<NotificationConfig>(initialConfig);

export const NotificationState =
  React.createContext<NotificationState>(initialState);

export const NotificationMethods = React.createContext<NotificationMethods>(
  {} as NotificationMethods,
);
