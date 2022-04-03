import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import MenuIconButton from '@mui/icons-material/Menu';
import Navbar from './Navbar';
import Menu from './Menu';

import customTheme from '../../styles/theme';
import { useTheme } from '@mui/material/styles';
import logo from '../../assets/images/logo.svg';

const useStyles = makeStyles(() => ({
	navbar: {
		justifyContent: 'space-between',
	},
	titles: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		[customTheme.breakpoints.up('tablet')]: {
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
	},
	burger: {
		[customTheme.breakpoints.up('tablet')]: {
			visibility: 'hidden',
		},
	},
	logo: {
		width: '100%',
		height: '100%',
	},
	logoLink: {
		width: '10%',
		height: 'auto',
		marginRight: '1em',
	},
}));

const Header = ({ isMenuOpen, handleMenu }) => {
	const styles = useStyles();
	const theme = useTheme();

	const [anchorEl, setAnchorEl] = useState(null);

	const onClick = (event) => {
		setAnchorEl(event.currentTarget);
		// handleMenu();
	};

	const onClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box className={styles.header}>
			<AppBar position='static'>
				<Toolbar
					className={styles.navbar}
					sx={{ [theme.breakpoints.up('desktop')]: { padding: '0 5rem' } }}
				>
					<Box className={styles.titles}>
						<NavLink to='/' className={styles.logoLink}>
							<img src={logo} alt='logo' className={styles.logo} />
						</NavLink>
						<Typography
							component='h2'
							variant='h3'
							sx={{
								color: 'text.light',
								fontSize: '1.6rem',
								fontStyle: 'italic',
								fontWeight: 'lighter',
								marginBottom: '.5rem',
							}}
						>
							Histoire de Tech' crire
						</Typography>
					</Box>
					<MenuIconButton
						onClick={onClick}
						className={styles.burger}
						sx={{ color: 'secondary.main', fontSize: '2.5em' }}
					/>
					<Navbar />
				</Toolbar>
			</AppBar>

			<Menu isMenuOpen={isMenuOpen} anchorEl={anchorEl} onClose={onClose} />
		</Box>
	);
};

export default Header;
