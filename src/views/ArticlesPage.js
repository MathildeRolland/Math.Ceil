import React from 'react';
import { makeStyles } from '@mui/styles';

// == COMPONENT
import { Container, Typography } from '@mui/material';
import Articles from '../containers/Articles';

// == STYLES
import customTheme from '../styles/theme';

const useStyles = makeStyles({
	container: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	title: {
		textAlign: 'center',
		padding: '1em 0',
		[customTheme.breakpoints.up('tablet')]: {
			padding: '2em 0',
		},
	},
});

const ArticlesPage = () => {
	const styles = useStyles();

	return (
		<Container
			className={styles.container}
			disableGutters={true}
			sx={{ display: 'flex' }}
		>
			<Typography
				className={styles.title}
				component='h2'
				variant='h2'
				sx={{ color: 'text.secondary' }}
			>
				Articles
			</Typography>
			<Articles />
		</Container>
	);
};

export default ArticlesPage;
