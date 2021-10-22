import React from 'react';

// == COMPONENTS
import Header from '../../components/Header';
import Articles from '../../components/Articles';
import { Typography } from '@mui/material';

const Home = () => {
    return (
        <>
            <Header />
            <Typography component="h2" variant="h4" sx={{ flexGrow: 1, color: 'text.secondary', textAlign: 'center', padding: '1em 0' }}>
                Derniers articles
            </Typography>
            <Articles />
        </>

    )
}

export default Home;