import React from 'react';
import { makeStyles } from '@mui/styles';

// == COMPONENTS 
import { Container } from '@mui/material';
import Article from './Article';

// == THEME
import customTheme from '../../styles/theme';

// == DATAS
import articles from '../../datas';

// STYLES
const useStyles = makeStyles(() => ({
    container: {
        padding: '0 3em',
        flexDirection: 'column',
        [customTheme.breakpoints.up('tablet')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        },
        [customTheme.breakpoints.up('desktop')]: {
            maxWidth: '1000px'
        }
    },
}));



// -- -- -- -- -- -- -- -- -- -- COMPONENT -- -- -- -- -- -- -- -- -- -- //
const Articles = () => {
    const styles = useStyles();

    return (
        <Container
            className={styles.container}
            disableGutters={true}
            sx={{display: 'flex'}}
        >
            {
                articles.map((article) => <Article key={article.id} article={article} />)
            }
        </Container>
    )
}
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //


export default Articles;