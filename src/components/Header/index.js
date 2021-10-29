import * as React from 'react';
import { makeStyles } from '@mui/styles';

// == COMPONENTS
import { AppBar, Box, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// == STYLES 
const useStyles = makeStyles((theme) => ({
  header: {

  },
  navbar: {
    justifyContent: 'space-between',
  },
  titles: {
    flexDirection: 'column'
  }
}));


// -- -- -- -- -- -- -- -- -- -- COMPONENT -- -- -- -- -- -- -- -- -- -- //
const Header = () => {
  const styles = useStyles();



  return (
    <Box className={styles.header}>

      <AppBar position="static">
        <Toolbar className={styles.navbar}>
          <Box className={styles.titles}>
            <Typography component="h1" sx={{ color: 'primary.main', fontSize: 'h1.fontSize' }}>
              Math.Ceil()
            </Typography>
            <Typography component="h2" sx={{ color: 'secondary.main' }}>
              Blog
            </Typography>
          </Box>
          <MenuIcon sx={{ color: 'secondary.main' }}/>
        </Toolbar>
      </AppBar>

      <Menu className="header__menu" open={false} >
        <MenuItem className="header__menu-item" style={{padding: '0 5em'}}>Tous les articles</MenuItem>
        <MenuItem className="header__menu-item" style={{padding: '0 5em'}}>Portfolio</MenuItem>
      </Menu>

    </Box>
  );
}
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

export default Header;
