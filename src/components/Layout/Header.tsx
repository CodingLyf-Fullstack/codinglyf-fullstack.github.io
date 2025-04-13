import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useScrollTrigger,
  Box,
  Button,
  Container,
  useTheme as useMuiTheme,
  Link,
} from '@mui/material';
import {
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  const handleDrawerToggle = () => {
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={trigger ? 4 : 0}
        sx={{ 
          backgroundColor: trigger 
            ? muiTheme.palette.background.default 
            : isDarkMode 
              ? 'rgba(18, 18, 18, 0.8)'
              : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          color: muiTheme.palette.text.primary,
          transition: 'all 0.3s'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Portfolio
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' } , flexGrow: 1 }}>
              {navItems.map((item) => (
                <Button key={item} color="inherit" href={`#${item.toLowerCase()}`}>
                  {item}
                </Button>
              ))}
            </Box>
            <Link sx={{ mr: 2 , mt: 1 }} href="https://github.com/CodingLyf-Fullstack" target="_blank" >
                <GitHubIcon/>
            </Link>
            <Link sx={{ mr: 2, mt: 1 }} href="https://www.linkedin.com/in/titus-mon-36347736/" target="_blank" >
                <LinkedInIcon/>
            </Link>
            <Link sx={{ mr: 2, mt: 1 }} href="https://www.instagram.com/coding__lyf/" target="_blank" >
                <InstagramIcon/>
            </Link>
           
            <IconButton onClick={toggleTheme} color="inherit">
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

           
          </Toolbar>
        </Container>
      </AppBar>

    </>
  );
};

export default Header;