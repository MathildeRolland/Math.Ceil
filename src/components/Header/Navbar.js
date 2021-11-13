import React from 'react'

// == ROUTER
import { NavLink } from 'react-router-dom';

// == COMPONENTS
import { Box, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

// == THEME
import customTheme from '../../styles/theme';

// == STYLES
const useStyles = makeStyles(() => ({
    nav: {
        [customTheme.breakpoints.down('tablet')]: {
            display: 'none'
        }
    },
    link: {
        padding: '0 2rem 0 7rem',
        fontSize: '2rem',
    }
}))

export default function Navbar() {
    const styles = useStyles();

    return (
        <Box className={styles.nav}>
            <Link
                component={NavLink}
                to="/articles"
                className={styles.link}
                href="#"
                color='text.light'
                underline="hover"
            >
                Articles
            </Link>
            <Link
                component={NavLink}
                to='https://www.google.com/'

                className={styles.link}
                href="#"
                color='text.light'
                underline="hover"
            >
                Portfolio
            </Link>
        </Box>
    )
}
