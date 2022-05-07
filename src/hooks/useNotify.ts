import React from 'react';
import { NotificationContext } from 'context';

export default function useNotify() {
  return React.useContext(NotificationContext);
}
