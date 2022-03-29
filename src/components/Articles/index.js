import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';

// == COMPONENTS
import { Container } from '@mui/material';
import Article from './Article';

// == THEME
import customTheme from '../../styles/theme';

// STYLES
const useStyles = makeStyles(() => ({
	container: {
		padding: '0 3em',
		flexDirection: 'column',
		[customTheme.breakpoints.up('tablet')]: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			flexWrap: 'wrap',
		},
		[customTheme.breakpoints.up('desktop')]: {
			maxWidth: '1000px',
		},
	},
}));

// -- -- -- -- -- -- -- -- -- -- COMPONENT -- -- -- -- -- -- -- -- -- -- //
const Articles = ({ articles }) => {
	const styles = useStyles();

	useEffect(() => {
		console.log('articles', articles);
	}, [articles]);

	return (
		<Container
			className={styles.container}
			disableGutters={true}
			sx={{ display: 'flex' }}
		>
			{articles &&
				articles.map((article) => (
					<Article key={article.id} article={article} />
				))}
		</Container>
	);
};
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

export default Articles;
