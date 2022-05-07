import React from 'react';

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }) => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  );
};

export default Layout;
