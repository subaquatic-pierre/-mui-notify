import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';

const Header = () => {
  return (
    <AppBar component="header" position="relative">
      <Container>
        <Toolbar disableGutters>
          <Icon sx={{ mr: 2 }}>adb</Icon>
          <Typography variant="h6" color="inherit" noWrap>
            React Mui Notify Demo
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
