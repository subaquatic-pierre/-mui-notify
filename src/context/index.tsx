import React from 'react';

export const initialState: NotificationState = {
  isOpen: false,
  message: '',
  color: 'success',
};

export const NotificationContext = React.createContext<
  [NotificationState, NotificationMethods | null]
>([initialState, {} as NotificationMethods]);

export default NotificationContext;
