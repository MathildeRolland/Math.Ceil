import React from 'react'
import { makeStyles } from '@mui/styles';

// == COMPONENTS
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

// == STYLES
const useStyles = makeStyles((theme) => ({
    quote: {
        margin: '1em',
        width: '50%',
        marginLeft: '47%',
        boxShadow: '4px 0 0 #111'
    },
    content: {
        padding: '.3em .7em',
        textAlign: 'right',
        fontStyle: 'italic',
    }
}));


// -- -- -- -- -- -- -- -- -- -- COMPONENT -- -- -- -- -- -- -- -- -- -- //
const Quote = () => {
    const styles = useStyles();

    return (
        <Box className={styles.quote}>
            <Typography className={styles.content} fontSize="1.5rem" fontWeight="300" sx={{color: 'text.secondary'}}>C'est la quote du jour, bonjour</Typography>
        </Box>
    )
}
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- // 

export default Quote;