import React from 'react';
import { makeStyles } from '@mui/styles';

// == THEME
import customTheme from '../../../styles/theme';

// == ROUTER
import { NavLink } from 'react-router-dom';

// == COMPONENTS
import { Box, Card, CardContent, Typography, Paper } from '@mui/material';

// == STYLES
const useStyles = makeStyles(() => ({
	container: {
		[customTheme.breakpoints.up('tablet')]: {
			width: '48%',
		},
		[customTheme.breakpoints.up('desktop')]: {
			width: '30%',
		},
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		borderWidth: '.5px',
		marginBottom: '2em',
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	date: {
		fontStyle: 'italix',
		fontWeight: 300,
	},
	overview: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		display: '-webkit-box',
		WebkitLineClamp: 3,
		WebkitBoxOrient: 'vertical',
	},
	category: {
		padding: '.3em 1em',
		margin: '0 .8em .7em 0',
		width: 'max-content',
		alignSelf: 'flex-end',
		fontSize: '1.2em',
	},
	link: {
		textDecoration: 'none',
	},
}));

// -- -- -- -- -- -- -- -- -- -- COMPONENT -- -- -- -- -- -- -- -- -- -- //
const Article = ({ article }) => {
	const styles = useStyles();

	return (
		<Box className={styles.container} sx={{ minWidth: 275 }}>
			<NavLink to={`/articles/${article.id}`} className={styles.link}>
				<Card
					variant='outlined'
					className={styles.card}
					sx={{
						backgroundColor: 'background.medium',
						borderColor: 'primary.main',
					}}
				>
					<CardContent>
						<Box className={styles.header}>
							<Typography
								component='h3'
								variant='h3'
								color='text.primary'
								gutterBottom
							>
								{article.title}
							</Typography>
							<Typography
								className={styles.date}
								component='date'
								sx={{ mb: 1.5, fontSize: '1.4em' }}
								color='text.secondary'
							>
								{article.date}
							</Typography>
						</Box>
						<Typography
							variant='body2'
							className={styles.overview}
							sx={{ fontWeight: 'fontWeightLight', marginTop: '1.5em' }}
						>
							{article.content}
						</Typography>
					</CardContent>
					<Paper className={styles.category}>{article.category}</Paper>
				</Card>
			</NavLink>
		</Box>
	);
};
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

export default Article;
