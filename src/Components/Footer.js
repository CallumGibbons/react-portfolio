import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const FooterContainer = styled('div')({
  padding: '20px',
  background: '#333333',
  color: '#ffffff',
  textAlign: 'center',
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body1">
        Callumgibbons@icloud.com
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
