import React from 'react';

import Container from '@mui/material/Container';

import ButtonGrid from 'components/ButtonGrid';

const Main = () => {
  return (
    <Container sx={{ my: 2 }} component="main">
      <ButtonGrid />
    </Container>
  );
};

export default Main;
