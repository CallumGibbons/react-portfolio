// src/components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Root = styled('div')({
  flexGrow: 1,
  height: '10vh',
  position: 'fixed',
  width: '100%',
  zIndex: 1,
});

const TransparentAppBar = styled(AppBar)({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(1px)', 
  boxShadow: 'none', 
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#000', 
    },
    secondary: {
      main: '#0f0',
    },
  },
  typography: {
    h6: {
      color: '#0f0', 
    },
    button: {
      color: '#0f0', 
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <TransparentAppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              My Portfolio
            </Typography>
            <Button color="secondary">Home</Button>
            <Button color="secondary">About</Button>
            <Button color="secondary">Projects</Button>
            <Button color="secondary">Contact</Button>
          </Toolbar>
        </TransparentAppBar>
      </Root>
    </ThemeProvider>
  );
};

export default Header;
