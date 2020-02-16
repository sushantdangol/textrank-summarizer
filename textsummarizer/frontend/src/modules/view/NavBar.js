import React from 'react';
import AppBar from '../components/AppBar';
import PropTypes from 'prop-types';
// import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

const styles = theme => ({
    toolbar: {
        justifyContent: 'space-between',
    },
    placeholder: toolbarStyles(theme).root,
    left: {
        flex: 1,
    },
    logo: {
        fontSize: 26,
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'white'
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    goSum: {
        fontSize: 22,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
    },
    back: {
        backgroundColor: '#17223b'
    },
    button: {
        textDecoration: 'none'
    }
});

function NavBar(props) {
    const {classes} = props;

    return(
        <div>
            <AppBar position="fixed" className={classes.back} >
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left} />
                    <Link 
                        className={classes.logo}
                        to= "/"
                    >
                        {'Text Summarization Tool'}
                    </Link>
                    <div className={classes.right}>
                        <Link to='/summarize'>
                            <Button
                            variant="contained"
                            size="small"
                            className={classes.button}
                            component="a"
                             >
                                Visit Our Blog
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />

            </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);