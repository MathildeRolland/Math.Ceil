import React from 'react';

// == COMPONENTS
import Header from '../../components/Header';
import Articles from '../../components/Articles';
import { Typography } from '@mui/material';

const Home = () => {
    return (
        <>
            <Header />
            <Typography component="h2" sx={{ flexGrow: 1, color: 'secondary.main' }}>
                Derniers articles
            </Typography>
            <Articles />
        </>

    )
}

export default Home;