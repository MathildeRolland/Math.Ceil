import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

// == COMPONENTS
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import MenuIconButton from '@mui/icons-material/Menu';
import Navbar from './Navbar';
import Menu from './Menu';

// == THEME
import customTheme from '../../styles/theme';
import { useTheme } from '@mui/material/styles';

// == STYLES
const useStyles = makeStyles(() => ({
	navbar: {
		justifyContent: 'space-between',
	},
	titles: {
		flexDirection: 'column',
	},
	burger: {
		[customTheme.breakpoints.up('tablet')]: {
			visibility: 'hidden',
		},
	},
}));

// -- -- -- -- -- -- -- -- -- -- COMPONENT -- -- -- -- -- -- -- -- -- -- //
const Header = ({ isMenuOpen, handleMenu }) => {
	const styles = useStyles();
	const theme = useTheme();

	// == STATE
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
						<Typography
							component='h1'
							sx={{ color: 'primary.main', fontSize: 'h1.fontSize' }}
						>
							Math.Ceil()
						</Typography>
						<Typography
							component='h2'
							variant='h3'
							sx={{ color: 'secondary.main' }}
						>
							Blog
						</Typography>
					</Box>
					<MenuIconButton
						onClick={onClick}
						className={styles.burger}
						sx={{ color: 'secondary.main' }}
					/>
					<Navbar />
				</Toolbar>
			</AppBar>

			<Menu isMenuOpen={isMenuOpen} anchorEl={anchorEl} onClose={onClose} />
		</Box>
	);
};
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

export default Header;
