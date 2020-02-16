import React from 'react';
import Typography from '../../components/Typography';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        display: 'flex',
        backgroundColor: '#eee',
        overflow: 'hidden',
        [theme.breakpoints.up('sm')]: {
            height: '50vh',
            minHeight: 767,
            maxHeight: 800,
          },
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        marginBottom: theme.spacing(12),
        fontSize: 45,
        color: 'black',
        textAlign: 'center'
    },
    info: {
        fontSize: 10,
        color: 'black',
        textAlign: 'justify',
        padding: theme.spacing(0, 5),
    },
    content: {
        marginTop: theme.spacing(3)
    }
});

function Types(props) {
    const { classes } =  props;

    return(
        <section className={ classes.root }>
            <Container className={ classes.container }> 
                <Typography variant="h2" marked="center" className={classes.title} component="h2">
                    Types of Text Summarization
                </Typography>
                <div>   
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={6}>
                            <div className={classes.info}>
                                <Typography variant="h4" align="center">
                                    Extractive Summarization
                                </Typography>
                                <Typography variant="h6" align="justify" className={ classes.content }> 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                            </div>
                        </Grid>
             
                        <Grid item xs={12} md={6}>
                            <div className={classes.info}>
                                <Typography variant="h4" align="center">
                                    Abstractive Summarization
                                </Typography>
                                <Typography variant="h6" align="justify" className={ classes.content }>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    );
}

Types.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Types);