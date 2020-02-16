import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import BannerLayout from './BannerLayout';
import background from '../../static/images/summaries.png'

import { Link } from 'react-router-dom';


import Button from '../components/Button';


const backgroundImage = background;

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', 
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
    margin: theme.spacing(3)
  },
  h5: {
    marginBottom: theme.spacing(10),
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
    }
  },
  extra: {
    color: 'red'
  }
});

function Banner(props) {
  const { classes } = props;

  return (
    <BannerLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2">
        Text Summarization Tool
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        An online <span className={classes.extra}>Web Application</span>  that summarizes your text media.
      </Typography>
      <div>
        <Link to="/">
        <Button
          variant="contained"
          size="large"
          className={classes.button}
        >
          Learn More
      </Button>
      </Link>  
      <Link to="/summarize">
        <Button
          variant="contained"
          size="large"
          className={classes.button}
        >
          Summarize
      </Button>
      </Link> 
      </div>
      
    </BannerLayout>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);