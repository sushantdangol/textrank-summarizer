import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';

import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
});

function Go(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Link to="/summarize">
        <Button className={classes.button}>
          <Typography variant="h4" component="span">
            Get Started
          </Typography>
        </Button>
      </Link>
      <Typography variant="subtitle1" className={classes.link}>
        Start Summarizing your Text.
      </Typography>
    </Container>
  );
}

Go.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Go);

