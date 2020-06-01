import React, {Component} from 'react';
import Recipe from '../components/recipe/Recipe'

class Landing extends Component {
    constructor(props){
        super(props);
        this.styles = {
            pageTitle: {
                fontSize: '1.5rem',
                marginBottom: '30px',
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
                width: '100%',
                height: '100%',
                display: 'flex',
                flexFlow: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
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
                    element.image = "https://i.imgur.com/FntDt4K.jpg"
                } else {
                    element.image = "https://spoonacular.com/recipeImages/" + element.id + "-240x150." + element.imageType;
                }
                return <Recipe key={i} val={element} diet={diet}/>
            });
        }
        return (
            <div style={this.styles.container}>
                <h2 style={this.styles.pageTitle}>Featured Recipes</h2>
                {this.state.loaded ?
                    <div style={this.styles.recipes}>
                        {recipeList}
                    </div>
                :
                    <div>
                        <h3>We're fetching delicious recipes for you!</h3>
                        <div>
                            <img src="https://media.giphy.com/media/YoKaNSoTHog8Y3550r/giphy.gif"/>
                        </div>
                    </div>}
            </div>
        );
    }
}

export default Landing;