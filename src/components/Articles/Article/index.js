import React from 'react';

// == COMPONENTS
import { Box, Card, CardContent, Typography, Paper } from '@mui/material';

// == STYLES
import './Article.scss';



const card = (
    <React.Fragment>
      <CardContent>
        <Box className="article__header">
            <Typography component="h3" variant="h6" color="text.primary" gutterBottom>
                Title of the article
            </Typography>
            <Typography className="article__date" component="date" sx={{ mb: 1.5, fontSize: '.9em' }} color="text.secondary">
                07 Juillet 1988
            </Typography>
        </Box>
        <Typography variant="body2" className="article__overview" sx={{ fontWeight: 'fontWeightLight', marginTop: '1.5em' }}>
        Lorem ipsum dolor sit amet blabla trucmuche Lorem ipsum dolor sit amet blabla trucmuche Lorem ipsum dolor sit amet blabla trucmuche.<br/>Lorem ipsum dolor sit amet blabla trucmuche Lorem ipsum dolor sit amet blabla trucmuche Lorem ipsum dolor sit amet blabla trucmucheLorem ipsum dolor sit amet blabla trucmuche Lorem ipsum dolor sit amet blabla trucmucheLorem ipsum dolor sit amet blabla trucmuche.
        </Typography>
      </CardContent>
      <Paper className="article__category">
        Category
      </Paper>
    </React.Fragment>
);

const Article = () => (
    <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" className="article" sx={{ backgroundColor: 'background.medium', borderColor: 'primary.main' }}>{card}</Card>
    </Box>
);

export default Article;