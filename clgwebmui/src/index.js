import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider,createTheme} from '@mui/material/styles';
import App from './App'

const theme = createTheme({
  palette:{
    primary:{
      main:'#556cd6',
    },
    secondary:{
      main:'#19857b',
    }
  },
  typography:{
    h2:{
      fontSize: 36,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>,
)