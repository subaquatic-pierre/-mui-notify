import React from 'react';

import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <AppBar component="footer" sx={{ marginTop: 'auto' }} position="relative">
      <Container>
        <Toolbar disableGutters>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
