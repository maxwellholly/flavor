import React, {Component} from 'react';
import Recipe from '../components/recipe/Recipe'
import Form from '../components/form/Form'

class RecipeSearch extends Component {
    constructor(props){
        super(props);
        this.styles = {
            pageTitle: {
                fontSize: '1.5rem',
                marginTop: '0',
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
            duration: "day",
            recipes: [],
            nutrition: [],
            showForm: false,
            requested: false
        }
    }

    handleGetMeals = (calories, diet, exclude, name) => {
        this.setState({requested: true, loaded: false, showForm: true});
        let api = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?";

        if(diet.trim() !== "") {
            api = api + "&diet=" + diet;
        }

        if(exclude.trim() !== "") {
            api = api + "&exclude=" + exclude;
        }

        this.props.getMeals(api, function(response){
            let api;
            for(let i = 0; i < response.results.length; i++) {
                api = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + response.results[i].id + "/information";
                this.props.getMeals(api, function(details) {
                    response.results[i].vegetarian = details.vegetarian;
                    response.results[i].vegan = details.vegan;
                    response.results[i].glutenFree = details.glutenFree;
                    response.results[i].healthScore = details.healthScore;
                    response.results[i].servings = details.servings;
                    response.results[i].readyInMinutes = details.readyInMinutes;
                    response.results[i].image = details.image;
                })
            }
            setTimeout(function() {
                this.setState({loaded: true, requested: false, recipes: response.results});
            }.bind(this), 3000);
        }.bind(this));
    };

    toggleForm = () => {
        this.setState({showForm: false})
    };

    render() {
        console.log(this.state.recipes);
        let recipeList  = this.state.recipes.map((element, i) => {
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
            return <Recipe key={i} val={element} diet={diet}/>
        });
        return (
            <div style={this.styles.container}>
                <Form className="searchMeals" mealPlans={false} formType="Search" handleGetMeals={this.handleGetMeals} name={this.state.duration} hide={true} hidden={this.state.showForm}/>
                <button className="formToggle" onClick={this.toggleForm} hidden={!this.state.showForm}>Show Form</button>
                {this.state.loaded ?
                    <div style={this.styles.recipes}>
                        {recipeList}
                    </div>
                    : this.state.requested ?
                        <div>
                            <div>
                                <img src="https://media.giphy.com/media/YoKaNSoTHog8Y3550r/giphy.gif"/>
                            </div>
                        </div>
                        : null}
            </div>

        );
    }
}

export default RecipeSearch;