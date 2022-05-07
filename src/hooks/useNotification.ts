import React from 'react';
import { NotificationContext } from 'context/NotificationContext';

export default function useNotify() {
  return React.useContext(NotificationContext);
}
