import React from 'react';

import AppBar from '@mui/material/AppBar';
import AdbIcon from '@mui/icons-material/Adb';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header = () => {
  return (
    <AppBar component="header" position="relative">
      <Container>
        <Toolbar disableGutters>
          <AdbIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            React Mui Notify Demo
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
