import React from 'react';
import { makeStyles } from '@mui/styles';

// == COMPONENTS 
import { Container } from '@mui/material';
import Article from './Article';

// == THEME
import customTheme from '../../styles/theme';

// STYLES
const useStyles = makeStyles((theme) => {
    return ({
        container: {
            padding: '0 3em',
            display: 'flex',
            flexDirection: 'column',
            [customTheme.breakpoints.up('tablet')]: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }
        }
    })
});



// -- -- -- -- -- -- -- -- -- -- COMPONENT -- -- -- -- -- -- -- -- -- -- //
const Articles = () => {
    const styles = useStyles();

    return (
        <Container
            className={styles.container}
            maxWidth="lg"
            disableGutters={true}
            sx={{padding: '0 3em', display: 'flex'}}
        >
            <Article />
            <Article />
            <Article />
        </Container>
    )
}
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //


export default Articles;