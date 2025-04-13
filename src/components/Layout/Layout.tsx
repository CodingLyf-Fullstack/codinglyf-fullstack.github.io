import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import ScrollProgress from './ScrollProgress';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <ScrollProgress />
      <Header />
      <Box component="main" sx={{ pt: { xs: 8, md: 9 } }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;