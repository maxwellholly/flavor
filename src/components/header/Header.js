import React from 'react'
import Logo from '../logo/Logo'
import {NavLink} from "react-router-dom";

const Header = props => {
    return (
        <header style={styles.header}>
            <Logo/>
            <div className={classes.navigatorsC}>
                <NavLink to='/MealPlans' style={styles.navigators}>
                    <button>Meal Plans</button>
                </NavLink>
                <NavLink to='/RecipeSearch' style={styles.navigators}>
                    <button>Recipe Search</button>
                </NavLink>
            </div>
        </header>
    )
};

export default Header

const styles = {
    header: {
        position: 'relative',
        padding: '0',
        margin: '0',
        backgroundColor: 'white',
        width: '100%',
        height: '135px',
        alignContent: 'center',
        boxShadow: '3px 6px 8px -3px RGBA(52,48,62,.15)'
    },
    navigators: {
        marginTop: "200px"
    }
};