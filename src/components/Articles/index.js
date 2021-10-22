import React from 'react';

import { Container } from '@mui/material';
import Article from './Article';

const Articles = () => (
    <Container maxWidth="sm">
        <Article />
        <Article />
        <Article />
    </Container>
);

export default Articles;