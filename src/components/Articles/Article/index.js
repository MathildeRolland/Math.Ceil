import React from 'react';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

import { Box, Card, CardContent, Typography, Paper } from '@mui/material';

import { sanitizeData } from '../../../utils/articles-utils';
import customTheme from '../../../styles/theme';

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
		justifyContent: 'space-between',
		borderWidth: '.5px',
		marginBottom: '2em',
		height: '15em',
		[customTheme.breakpoints.up('tablet')]: {
			height: '20rem',
		},
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 8,
		backgroundColor: customTheme.palette.background.dark,
	},
	date: {
		fontStyle: 'italic',
		fontWeight: 300,
	},
	overview: {
		padding: '1em',
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
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
					<CardContent
						sx={{
							padding: 0,
						}}
					>
						<Box className={styles.header}>
							<Typography
								component='h3'
								variant='h3'
								color='text.primary'
								gutterBottom
								sx={{ marginBottom: 0 }}
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
							sx={{ fontWeight: 'fontWeightLight', marginTop: '.5em' }}
							dangerouslySetInnerHTML={sanitizeData(article.summary)}
						/>
					</CardContent>
					<Paper className={styles.category}>Tech</Paper>
				</Card>
			</NavLink>
		</Box>
	);
};
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

export default Article;
