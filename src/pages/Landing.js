import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Recipe from '../components/recipe/Recipe'

class Landing extends Component {
    constructor(props){
        super(props);
        this.styles = {
            pageTitle: {
                fontSize: '1.5rem',
                marginBottom: '30px',
                marginTop: '30px',
                textAlign: 'center'
            },
            container: {
                width: '90%',
                height: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                position: 'relative'
            },
            recipes: {
                width: 'auto',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginRight: "auto",
                marginLeft: "auto",
                justifyContent: "center",
                gap: "10px"
            }
        };
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        let api = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=21";
        //Running getMeals to provide featured recipes for landing page
        this.props.getMeals(api, function(response){
            this.setState({loaded: true, recipes: response});
        }.bind(this));
    }

    render() {
        let recipeList;
        if (this.state.loaded === true) {
            console.log(this.state.recipes.recipes);
            recipeList  = this.state.recipes.recipes.map((element, i) => {
                let diet;
                if(element.vegetarian === true) {
                    diet = 'Vegetarian'
                } else if(element.vegan === true) {
                    diet = 'Vegan'
                } else if(element.glutenFree === true) {
                    diet = 'Gluten free'
                } else {
                    diet = ''
                }
                if(!element.imageType){
                    element.image = "https://hjmportfolio.s3.us-west-2.amazonaws.com/stockimg.jpg"
                } else {
                    element.image = "https://spoonacular.com/recipeImages/" + element.id + "-240x150." + element.imageType;
                    console.log(element.image)
                }
                return <Recipe key={i} val={element} diet={diet}/>
            });
        }
        return (
            <div style={this.styles.container}>
                <div>
                <NavLink className="mainNav" to='/MealPlans'>
                <button className="navB plans">Meal Plans</button>
            </NavLink>
            <NavLink  className="mainNav" to='/RecipeSearch'>
                <button className="navB search">Search</button>
            </NavLink>
                </div>
                <h2 style={this.styles.pageTitle}>Featured Recipes</h2>
                {this.state.loaded ?
                    <div style={this.styles.recipes}>
                        {recipeList}
                    </div>
                :
                    <div>
                        <div>
                            <img src="https://media.giphy.com/media/YoKaNSoTHog8Y3550r/giphy.gif"/>
                        </div>
                    </div>}
            </div>
        );
    }
}

export default Landing;