import React from 'react'
import './Recipe.css'

const Recipe = props => {
    return (

        <article style={styles.card}>
            <div style={styles.imageContainer}>
                <a href={props.val.sourceUrl} target="_blank">
                <div className="overlay">
                    <h5 className="overlayText">View Recipe</h5>
                </div>
                <img src={props.val.image} alt={props.val.title} style={styles.image}/>
                </a>
            </div>
            <h4 style={styles.title}>{props.val.title}</h4>
            <div style={styles.recipeInfo}>
                <div style={styles.info}>
                    <h5 style={styles.label}>Health Score</h5>
                    <p>{props.val.healthScore}</p>
                </div>
                <div style={styles.info}>
                    <h5 style={styles.label}>Servings</h5>
                    <p>{props.val.servings}</p>
                </div>
                <div style={styles.info}>
                    <h5 style={styles.label}>Prep time</h5>
                    <p>{props.val.readyInMinutes}</p>
                </div>
            </div>
            <h6 style={styles.diet}>{props.diet}</h6>
        </article>
    )
};

export default Recipe

const styles = {
    card: {
        position: 'relative',
        width: '400px',
        height: '430px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px',
        boxShadow: '3px 6px 8px -3px RGBA(52,48,62,.15)',
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        boxSizing: 'border-box'
    },
    imageContainer: {
        position: 'relative',
        boxSizing: 'border-box',
        width: '90%',
        height: 'auto',
        margin: '5%'
    },
    label: {
        margin: '0',
        marginBlockStart: '.5em',
        marginBlockEnd: '.5em',
        opacity: '.6'
    },
    recipeInfo: {
        display: 'flex',
        height: 'auto',
        width: '80%',
        justifyContent: 'space-between',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '0',
        marginBottom: '5%',
        padding: '0',
        marginBlockStart: '.5em',
        marginBlockEnd: '.5em'
    },
    info: {
        textAlign: 'right',
        margin: '2%'
    },
    diet: {
        position: 'absolute',
        textAlign: 'left',
        margin: '5%',
        bottom: '0'
    },
    title: {
        fontSize: '1.25rem',
        margin: '5%',
        marginBottom: '2%'
    }
};