import React from 'react';

// == COMPONENTS
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';

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
            padding: '2rem 0 5rem 0'
        }
    },
    paragraph: {
        padding: '1rem',
        [customTheme.breakpoints.up('tablet')]: {
            padding: '1.5rem 1rem'
        }
    }
});


export default function Article() {
    const styles = useStyles();

    return (
        <Container className={styles.container}>
            <Typography sx={{textAlign: 'center', fontSize: '3rem', color: customTheme.palette.text.light}} className={styles.title}>Titre de l'article</Typography>
            <Typography sx={{color: customTheme.palette.text.light}} className={styles.paragraph} variant='body2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna ac placerat. Quam vulputate dignissim suspendisse in. Augue lacus viverra vitae congue. Eu non diam phasellus vestibulum lorem sed risus ultricies. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Sagittis aliquam malesuada bibendum arcu vitae. Diam vulputate ut pharetra sit amet aliquam. Consequat nisl vel pretium lectus. Fermentum leo vel orci porta non pulvinar. Duis ultricies lacus sed turpis tincidunt id. Varius vel pharetra vel turpis nunc eget lorem dolor. Tellus id interdum velit laoreet id donec ultrices tincidunt. Tortor at risus viverra adipiscing.
            </Typography>

            <Typography sx={{color: customTheme.palette.text.light}} className={styles.paragraph} variant='body2'>
                Nunc aliquet bibendum enim facilisis. Duis tristique sollicitudin nibh sit. Eu augue ut lectus arcu bibendum. In mollis nunc sed id. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Laoreet suspendisse interdum consectetur libero. In hendrerit gravida rutrum quisque non tellus. Amet tellus cras adipiscing enim eu turpis. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Nunc aliquet bibendum enim facilisis. A iaculis at erat pellentesque adipiscing. Dui faucibus in ornare quam viverra orci sagittis. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero.
            </Typography>

            <Typography sx={{color: customTheme.palette.text.light}} className={styles.paragraph} variant='body2'>
                Sed velit dignissim sodales ut eu sem integer. Iaculis at erat pellentesque adipiscing commodo elit. Est ullamcorper eget nulla facilisi etiam dignissim. Ultrices dui sapien eget mi. Cras adipiscing enim eu turpis egestas pretium. Gravida neque convallis a cras semper auctor neque vitae tempus. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Vel facilisis volutpat est velit egestas dui id ornare arcu. Tincidunt arcu non sodales neque sodales ut etiam. Diam donec adipiscing tristique risus nec feugiat. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Tortor at auctor urna nunc. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Sed id semper risus in hendrerit gravida rutrum. Iaculis urna id volutpat lacus laoreet non curabitur. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Sit amet massa vitae tortor. Adipiscing commodo elit at imperdiet dui. Sem fringilla ut morbi tincidunt.
            </Typography>

            <Typography sx={{color: customTheme.palette.text.light}} className={styles.paragraph} variant='body2'>
                Sit amet venenatis urna cursus eget nunc scelerisque. Diam quam nulla porttitor massa id neque. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Enim nulla aliquet porttitor lacus. Egestas sed sed risus pretium. Pretium nibh ipsum consequat nisl vel pretium. Ut tellus elementum sagittis vitae et leo duis ut. Arcu vitae elementum curabitur vitae nunc. Ut tortor pretium viverra suspendisse potenti. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Mauris pharetra et ultrices neque ornare aenean euismod. Est velit egestas dui id ornare. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Purus sit amet volutpat consequat mauris nunc congue nisi vitae.
            </Typography>

            <Typography sx={{color: customTheme.palette.text.light}} className={styles.paragraph} variant='body2'>
                Felis eget nunc lobortis mattis aliquam faucibus. Consectetur libero id faucibus nisl tincidunt eget. Ipsum dolor sit amet consectetur adipiscing. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Vel pharetra vel turpis nunc eget. Massa placerat duis ultricies lacus sed turpis. Habitant morbi tristique senectus et netus et malesuada fames. Et leo duis ut diam quam nulla porttitor massa. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Ut sem viverra aliquet eget sit amet. Donec enim diam vulputate ut pharetra. Nibh praesent tristique magna sit amet purus. In ornare quam viverra orci sagittis eu volutpat. Ut pharetra sit amet aliquam id diam maecenas ultricies. Non pulvinar neque laoreet suspendisse. Etiam sit amet nisl purus. Risus ultricies tristique nulla aliquet enim. Velit euismod in pellentesque massa placerat duis.
            </Typography>

            <Typography sx={{color: customTheme.palette.text.light}} className={styles.paragraph} variant='body2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna ac placerat. Quam vulputate dignissim suspendisse in. Augue lacus viverra vitae congue. Eu non diam phasellus vestibulum lorem sed risus ultricies. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Sagittis aliquam malesuada bibendum arcu vitae. Diam vulputate ut pharetra sit amet aliquam. Consequat nisl vel pretium lectus. Fermentum leo vel orci porta non pulvinar. Duis ultricies lacus sed turpis tincidunt id. Varius vel pharetra vel turpis nunc eget lorem dolor. Tellus id interdum velit laoreet id donec ultrices tincidunt. Tortor at risus viverra adipiscing.
            </Typography>

            <Typography sx={{color: customTheme.palette.text.light}} className={styles.paragraph} variant='body2'>
                Nunc aliquet bibendum enim facilisis. Duis tristique sollicitudin nibh sit. Eu augue ut lectus arcu bibendum. In mollis nunc sed id. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Laoreet suspendisse interdum consectetur libero. In hendrerit gravida rutrum quisque non tellus. Amet tellus cras adipiscing enim eu turpis. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Nunc aliquet bibendum enim facilisis. A iaculis at erat pellentesque adipiscing. Dui faucibus in ornare quam viverra orci sagittis. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero.
            </Typography>

            <Typography sx={{color: customTheme.palette.text.light}} className={styles.paragraph} variant='body2'>
                Sed velit dignissim sodales ut eu sem integer. Iaculis at erat pellentesque adipiscing commodo elit. Est ullamcorper eget nulla facilisi etiam dignissim. Ultrices dui sapien eget mi. Cras adipiscing enim eu turpis egestas pretium. Gravida neque convallis a cras semper auctor neque vitae tempus. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Vel facilisis volutpat est velit egestas dui id ornare arcu. Tincidunt arcu non sodales neque sodales ut etiam. Diam donec adipiscing tristique risus nec feugiat. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Tortor at auctor urna nunc. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Sed id semper risus in hendrerit gravida rutrum. Iaculis urna id volutpat lacus laoreet non curabitur. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Sit amet massa vitae tortor. Adipiscing commodo elit at imperdiet dui. Sem fringilla ut morbi tincidunt.
            </Typography>

            <Typography sx={{color: customTheme.palette.text.light}} className={styles.paragraph} variant='body2'>
                Sit amet venenatis urna cursus eget nunc scelerisque. Diam quam nulla porttitor massa id neque. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Enim nulla aliquet porttitor lacus. Egestas sed sed risus pretium. Pretium nibh ipsum consequat nisl vel pretium. Ut tellus elementum sagittis vitae et leo duis ut. Arcu vitae elementum curabitur vitae nunc. Ut tortor pretium viverra suspendisse potenti. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Mauris pharetra et ultrices neque ornare aenean euismod. Est velit egestas dui id ornare. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Purus sit amet volutpat consequat mauris nunc congue nisi vitae.
            </Typography>
        </Container>
    )
}
