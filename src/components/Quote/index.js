import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

// == STYLES
import './quote.scss';



const Quote = () => {
    return (
        <Box className="quote">
            <Typography className="quote__content" sx={{color: 'text.secondary', fontSize: '.9em', fontWeight: '300'}}>C'est la quote du jour, bonjour</Typography>
        </Box>
    )
}

export default Quote;