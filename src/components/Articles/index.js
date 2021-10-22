import React from 'react';

import { Container } from '@mui/material';
import Article from './Article';

const Articles = () => (
    <Container maxWidth="lg" disableGutters={true} sx={{padding: '0 3em'}}>
        <Article />
        <Article />
        <Article />
    </Container>
);

export default Articles;