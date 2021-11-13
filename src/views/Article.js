import React from 'react';

// == COMPONENTS
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BreadCrumb from '../components/BreadCrumb';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        width: '100%'
    }
});


export default function Article() {
    const styles = useStyles();

    return (
        <Box style={styles.container}>
            <BreadCrumb />
        </Box>
    )
}
