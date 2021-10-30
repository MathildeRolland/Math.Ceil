import * as React from 'react';
import { makeStyles } from '@mui/styles';

// == COMPONENTS
import { AppBar, Box, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIconButton from '@mui/icons-material/Menu';
import Navbar from './Navbar';

// == THEME
import customTheme from '../../styles/theme';
import { useTheme } from '@mui/material/styles';

// == STYLES 
const useStyles = makeStyles(() => ({
  navbar: {
    justifyContent: 'space-between'
  },
  titles: {
    flexDirection: 'column'
  },
  burger: {
    [customTheme.breakpoints.up('tablet')]: {
      visibility: 'hidden'
    }
  },
  menu: {

  },
  menuItem: {
    
  }
}));


// -- -- -- -- -- -- -- -- -- -- COMPONENT -- -- -- -- -- -- -- -- -- -- //
const Header = () => {
  const styles = useStyles();
  const theme = useTheme();



  return (
    <Box className={styles.header}>

      <AppBar position="static">
        <Toolbar className={styles.navbar} sx={{[theme.breakpoints.up('desktop')]: {padding: '0 5rem'}}}>
          <Box className={styles.titles}>
            <Typography component="h1" sx={{ color: 'primary.main', fontSize: 'h1.fontSize' }}>
              Math.Ceil()
            </Typography>
            <Typography component="h2" sx={{ color: 'secondary.main' }}>
              Blog
            </Typography>
          </Box>
          <MenuIconButton className={styles.burger} sx={{ color: 'secondary.main' }}/>
          <Navbar />
        </Toolbar>
      </AppBar>


      <Menu className={styles.menu} open={false} >
        <MenuItem className={styles.menuItem} style={{padding: '0 5em'}}>Tous les articles</MenuItem>
        <MenuItem className={styles.menuItem} style={{padding: '0 5em'}}>Portfolio</MenuItem>
      </Menu>

    </Box>
  );
}
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

export default Header;
