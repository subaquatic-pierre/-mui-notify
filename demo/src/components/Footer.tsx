import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <AppBar component="footer" sx={{ marginTop: 'auto' }} position="relative">
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Toolbar disableGutters>
          <Typography textAlign="center" variant="caption" color="inherit">
            &copy; React Mui Notify Demo
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
