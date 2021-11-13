import React from 'react';

// == COMPONENTS
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        width: '100%'
    }
});


const BreadCrumb = () => {
    const styles = useStyles();

    return (
        <Typography style={styles.container}>
            <HomeIcon /> / Article
        </Typography>
    )

}


export default BreadCrumb;