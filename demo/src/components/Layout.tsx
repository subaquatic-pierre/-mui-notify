import React from 'react';

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  );
};

export default Layout;
