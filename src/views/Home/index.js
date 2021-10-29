import React from 'react';
import { makeStyles } from '@mui/styles';

// == COMPONENTS
import Articles from '../../components/Articles';
import Quote from '../../components/Quote';
import { Typography, Box } from '@mui/material';

// THEME
import customTheme from '../../styles/theme';

// == STYLES
const useStyles = makeStyles(() => ({
    home: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    title: {
        textAlign: 'center',
        padding: '1em 0',
        [customTheme.breakpoints.up('tablet')]: {
            padding: '2em 0',
        }
    }
}))


// -- -- -- -- -- -- -- -- -- COMPONENT -- -- -- -- -- -- -- -- -- -- //
const Home = () => {
    const styles = useStyles();

    return (
        <Box className={styles.home}>
            <Quote />
            <Typography className={styles.title} component="h2" variant="h4" sx={{color: 'text.secondary'}}>
                Derniers articles
            </Typography>
            <Articles />
        </Box>

    )
}
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

export default Home;