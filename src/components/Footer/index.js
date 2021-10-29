import React from 'react';
import { makeStyles } from '@mui/styles';

// == COMPONENTS
import { Container, Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


// == STYLES
const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: '3.5em'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    icon: {
        margin: '.3em .5em 0 .5em',
        fontSize: '1.5em'
    }
}))


// -- -- -- -- -- -- -- -- -- -- COMPONENT -- -- -- -- -- -- -- -- -- -- //
const Footer = () => {
    const styles = useStyles();

    return (
        <Container className={styles.footer} fixed>
            <Box className={styles.container}>
                <Typography fontSize="1.5rem" color="secondary.main">
                    Mathilde ROLLAND © | Tous droits réservés.
                </Typography>
                <Box>
                    <Link className="footer__link" href="https://www.linkedin.com/in/mathilde-rolland" >
                        <LinkedInIcon className={styles.icon} sx={{ color: 'text.black', '&:hover': {color: 'primary.main'}, transition: 'color .5s' }} />
                    </Link>
                    <Link className="footer__link" href="https://github.com/MathildeRolland">
                        <GitHubIcon className={styles.icon} sx={{ color: 'text.black', '&:hover': {color: 'primary.main'}, transition: 'color .5s' }} />
                    </Link>
                </Box>
            </Box>
        </Container>
    )
};
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

export default Footer;