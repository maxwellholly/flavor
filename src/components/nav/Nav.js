import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import Logo from '../logo/Logo'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            top: '135px',
            flexShrink: 0
        },
        width: '100%',
        top: '135px',
        flexShrink: 0
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `100%`,
            height: '135px',
        },
        height: '135px',
        backgroundColor: '#F7D2D2'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        [theme.breakpoints.up('sm')]: {
            backgroundColor: 'rgba(0,0,0,0)',
            display: 'none'
        },
        display: 'block',
        width: '100%',
        height: '300px',
        paddingTop: '5%',
        marginTop: '135px',
        backgroundColor: 'white'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    navLink: {
        textDecoration: 'none',
        color: '#34303e'
    },
    nav: {
        width: '100%'
    },
    search: {
        width: '60%',

    },
    h6: {
        visibility: 'hidden',
        width: '0',
        [theme.breakpoints.up('sm')]: {
            visibility: 'visible',
            width: '25%'
        },
    },
    navigators: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '200px',
            padding: '0',
            width: '200%',
            border: "none",
            backgroundColor: "none",
            fontFamily: "kopius, serif",
            fontWeight: "400",
            fontStyle: "italic",
            color: "#34303e",
            fontSize: "2rem",
            textDecoration: "none"
        }
    },
    navigatorsC: {
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            marginTop: '200px'
        }
    }
}));

const Nav = props =>{
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                {['Meal Plans', 'Recipe Search'].map((text, index) => (
                    <NavLink to={'/'+text.split(" ").join("")} className={classes.navLink} key={index}>
                        <ListItem button key={index} className={classes.listItem}>
                            <ListItemText primary={text} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    );

    return (
        <section className={classes.nav}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>

                    </Toolbar>
                </AppBar>
                <NavLink to='/'>
                    <Logo/>
                </NavLink>
                <nav className={classes.drawer}>
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
            </div>
        </section>
    );
}

export default Nav;