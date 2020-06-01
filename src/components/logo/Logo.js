import React from 'react';
import flavorgarlic from './flavorgarlic.png';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const Logo = props => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.container}>
            <img className={classes.flavor} src={flavorgarlic} alt="logo"/>
        </div>
    )
};

export default Logo

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up('sm')]: {
            position: 'fixed',
            height: '135px',
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: '0',
            zIndex: '2000'
        },
        position: 'absolute',
        height: '135px',
        width: '80%',
        right: '0',
        marginTop: '60px',
        zIndex: '2000'
    },
    flavor: {
        [theme.breakpoints.up('sm')]: {
            position: 'relative',
            width: '525px',
            margin: '0',
            padding: '0',
            marginTop: '10px'
        },
        width: '300px',
        position: 'fixed',
        right: '0'
    }
}));