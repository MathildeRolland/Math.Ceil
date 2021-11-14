import React from 'react';

// == COMPONENTS
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';

// == ROUTER
import { useParams } from 'react-router-dom';

// == SELECTORS
import { findArticleById } from '../redux/selectors';

// == STYLES
import customTheme from '../styles/theme';

const useStyles = makeStyles({
	container: {
		[customTheme.breakpoints.up('tablet')]: {
			maxWidth: '650px',
		},
		[customTheme.breakpoints.up('desktop')]: {
			maxWidth: '1000px',
		},
		padding: '5rem 0',
	},
	title: {
		padding: '0 0 3rem 0',
		[customTheme.breakpoints.up('tablet')]: {
			padding: '2rem 0 5rem 0',
		},
	},
	paragraph: {
		padding: '1rem',
		[customTheme.breakpoints.up('tablet')]: {
			padding: '1.5rem 1rem',
		},
		color: customTheme.palette.text.light,
		fontSize: '1.7rem',
		[customTheme.breakpoints.up('desktop')]: {
			fontSize: '1.8rem',
		},
	},
});

export default function Article({ articles }) {
	const styles = useStyles();
	const { id } = useParams();

	// Retrieve the current article
	const currentArticle = findArticleById(articles, id);

	return (
		<Container className={styles.container}>
			<Typography
				sx={{
					textAlign: 'center',
					fontSize: '3rem',
					color: customTheme.palette.text.light,
				}}
				className={styles.title}
			>
				{currentArticle.title}
			</Typography>
			<div
				className={styles.paragraph}
				dangerouslySetInnerHTML={{ __html: currentArticle.content }}
			/>
		</Container>
	);
}
