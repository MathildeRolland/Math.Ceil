import React from 'react';

// == COMPONENTS
import { Container, Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


// == STYLES
import './footer.scss';

const Footer = () => (
  <Container className="footer" fixed>
    <Box className="footer__container">
        <Typography color="secondary.main" fontSize=".9em">
            Mathilde ROLLAND © | Tous droits réservés.
        </Typography>
        <Box>
            <Link className="footer__link" href="https://www.linkedin.com/in/mathilde-rolland" >
                <LinkedInIcon className="footer_icon" sx={{ color: 'text.black', '&:hover': {color: 'primary.main'}, transition: 'color .5s' }} />
            </Link>
            <Link className="footer__link" href="https://github.com/MathildeRolland">
                <GitHubIcon className="footer__icon" sx={{ color: 'text.black', '&:hover': {color: 'primary.main'}, transition: 'color .5s' }} />
            </Link>
        </Box>
    </Box>
  </Container>
);

export default Footer;