import React from 'react';

interface Props {
  children: React.ReactElement;
}

const NotificationProvider = ({ children }: Props) => {
  return <>{children}</>;
};

export default NotificationProvider;
