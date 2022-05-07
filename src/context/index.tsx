import React from 'react';

export const initialState: NotificationState = {
  isOpen: false,
  message: '',
  color: 'success',
};

export const NotificationState =
  React.createContext<NotificationState>(initialState);

export const NotificationMethods = React.createContext<NotificationMethods>(
  {} as NotificationMethods,
);
