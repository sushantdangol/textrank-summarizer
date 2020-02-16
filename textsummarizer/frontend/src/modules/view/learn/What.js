import React from 'react';
import Typography from '../../components/Typography';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        display: 'flex',
        backgroundColor: '#fff',
        overflow: 'hidden',
        [theme.breakpoints.up('sm')]: {
            height: '50vh',
            minHeight: 567,
            maxHeight: 500,
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
        fontSize: 20,
        color: 'black',
        textAlign: 'left'
    },
});

function What(props) {
    const { classes } =  props;

    return(
        <section className={ classes.root }>
            <Container className={ classes.container }> 
                <Typography variant="h2" marked="center" className={classes.title} component="h2">
                    What is Text Summarization?
                </Typography>
                <div>   
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={12}>
                            <div className={ classes.info }>
                                <Typography variant="h5" align="justify">
                                Summarization can be defined as a task of producing a concise and fluent summary while preserving key information and overall meaning. Summaries of long documents, news articles, or even conversations can help us consume content faster and more efficiently. Automatic Text Summarization is a growing field in NLP and has been getting a lot of attention in the last few years.
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    );
}

What.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(What);