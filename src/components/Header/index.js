import * as React from 'react';

// == COMPONENTS
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{
          justifyContent: 'space-between'
        }}>
          <Box sx={{
            justifyContent: 'column'
          }}>
            <Typography component="h1" sx={{ flexGrow: 1, color: 'primary.main' }}>
              Math.Ceil()
            </Typography>
            <Typography component="h2" sx={{ flexGrow: 1, color: 'secondary.main' }}>
              Blog
            </Typography>
          </Box>
          <MenuIcon sx={{color: 'secondary.main'}}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
