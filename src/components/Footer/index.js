import React from 'react';
import { makeStyles } from '@mui/styles';

import { Container, Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import customTheme from '../../styles/theme';

const useStyles = makeStyles((theme) => ({
	footer: {
		margin: '1rem 0',
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		[customTheme.breakpoints.up('tablet')]: {
			justifyContent: 'center',
		},
	},
	icon: {
		margin: '0 .2em',
	},
}));

const Footer = () => {
	const styles = useStyles();

	return (
		<Container className={styles.footer} fixed>
			<Box className={styles.container}>
				<Typography
					fontSize='1.5rem'
					color='text.light'
					sx={{ fontWeight: 'lighter' }}
				>
					Mathilde ROLLAND © | Tous droits réservés. |
				</Typography>
				<Box>
					<Link
						className='footer__link'
						href='https://www.linkedin.com/in/mathilde-rolland'
					>
						<LinkedInIcon
							fontSize='large'
							className={styles.icon}
							sx={{
								color: 'text.black',
								'&:hover': { color: 'primary.main' },
								transition: 'color .5s',
							}}
						/>
					</Link>
					<Link
						className='footer__link'
						href='https://github.com/MathildeRolland'
					>
						<GitHubIcon
							fontSize='large'
							className={styles.icon}
							sx={{
								color: 'text.black',
								'&:hover': { color: 'primary.main' },
								transition: 'color .5s',
							}}
						/>
					</Link>
				</Box>
			</Box>
		</Container>
	);
};

export default Footer;
