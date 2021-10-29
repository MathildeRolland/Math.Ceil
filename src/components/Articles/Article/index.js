import React from 'react';
import { makeStyles } from '@mui/styles';

// == THEME
import customTheme from '../../../styles/theme';

// == COMPONENTS
import { Box, Card, CardContent, Typography, Paper } from '@mui/material';

// == STYLES
const useStyles = makeStyles(() => ({
  container: {
    [customTheme.breakpoints.up('tablet')]: {
      width: '48%'
    }
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: '.5px',
    marginBottom: '2em',
    boxShadow: '0 0 5px #E835E0'
  }, 
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  date: {
    fontStyle: 'italix',
    fontWeight: 300
  },
  overview: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical'
  },
  category: {
    padding: '.3em 1em',
    margin: '0 .8em .7em 0',
    width: 'max-content',
    alignSelf: 'flex-end',
    fontSize: '.8em'
  }
}))


// -- -- -- -- -- -- -- -- -- -- COMPONENT -- -- -- -- -- -- -- -- -- -- //
const Article = () => {
  const styles = useStyles();

  return (
      <Box className={styles.container} sx={{ minWidth: 275 }}>
          <Card variant="outlined" className={styles.card} sx={{ backgroundColor: 'background.medium', borderColor: 'primary.main' }}>
            <CardContent>
              <Box className={styles.header}>
                  <Typography component="h3" variant="h6" color="text.primary" gutterBottom>
                      Title of the article
                  </Typography>
                  <Typography className={styles.date} component="date" sx={{ mb: 1.5, fontSize: '.9em' }} color="text.secondary">
                      07 Juillet 1988
                  </Typography>
              </Box>
              <Typography variant="body2" className={styles.overview} sx={{ fontWeight: 'fontWeightLight', marginTop: '1.5em' }}>
              Lorem ipsum dolor sit amet blabla trucmuche Lorem ipsum dolor sit amet blabla trucmuche Lorem ipsum dolor sit amet blabla trucmuche.<br/>Lorem ipsum dolor sit amet blabla trucmuche Lorem ipsum dolor sit amet blabla trucmuche Lorem ipsum dolor sit amet blabla trucmucheLorem ipsum dolor sit amet blabla trucmuche Lorem ipsum dolor sit amet blabla trucmucheLorem ipsum dolor sit amet blabla trucmuche.
              </Typography>
            </CardContent>
            <Paper className={styles.category}>
              Category
            </Paper>
          </Card>
      </Box>
  );
}
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- // 


export default Article;