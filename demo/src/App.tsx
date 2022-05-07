import CssBaseline from '@mui/material/CssBaseline';
import {  ThemeProvider } from '@mui/material/styles';
import { NotificationProvider } from 'react-mui-notify';

import theme from 'theme'

import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NotificationProvider>
      <CssBaseline />
        <Header />
        <Main />
        <Footer />
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
