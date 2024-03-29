import React, {Component} from 'react';
import Recipe from '../components/recipe/Recipe';
import Form from '../components/form/Form';

class MealPlans extends Component {
    constructor(props){
        super(props);
        this.styles = {
            pageTitle: {
                fontSize: '1.5rem',
                marginTop: '25px',
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
            },
            plan: {
                border: "none",
                backgroundColor: "none",
                fontFamily: "kopius, serif",
                fontWeight: "400",
                fontStyle: "italic",
                color: "#34303e",
                fontSize: "2rem"
            },
            buttonC: {
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto"
            }
        };
        this.state = {
            recipes: [],
            nutrition: [],
            requested: false,
            showForm: false
        }
    }

    handleGetMeals = (calories, diet, exclude, duration) => {
        this.setState({requested: true, loaded: false, showForm: true});
        let api = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=" + duration;

        if(calories.trim() !== "") {
            api = api + "&targetCalories=" + calories;
        }

        if(diet.trim() !== "") {
            api = api + "&diet=" + diet;
        }

        if(exclude.trim() !== "") {
            api = api + "&exclude=" + exclude;
        }

        this.props.getMeals(api, function(response){

            if(response.meals) {
                console.log(response)
                let api;
                for(let i = 0; i < response.meals.length; i++) {
                    api = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + response.meals[i].id + "/information";
                    this.props.getMeals(api, function(details) {
                        response.meals[i].healthScore = details.healthScore;
                        response.meals[i].sourceURL = details.sourceUrl;
                    })
                }
                setTimeout(function() {
                    this.setState({loaded: true, requested: false, recipes: response.meals});
                }.bind(this), 3000);
            } else if (response.items) {
                console.log(response)
                let api;
                for(let i = 0; i < response.items.length; i++) {
                    api = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + JSON.parse(response.items[i].value).id + "/information";
                    this.props.getMeals(api, function(details) {
                        response.items[i].vegetarian = details.vegetarian;
                        response.items[i].vegan = details.vegan;
                        response.items[i].glutenFree = details.glutenFree;
                        response.items[i].healthScore = details.healthScore;
                        response.items[i].servings = details.servings;
                        response.items[i].readyInMinutes = details.readyInMinutes;
                        response.items[i].sourceURL = details.sourceUrl;
                    })
                }
                setTimeout(function() {
                    this.setState({loaded: true, requested: false, recipes: response.items});
                }.bind(this), 3000);

            } else {

            }
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
            if (element.day) {
                let values = JSON.parse(element.value);
                element.image = "https://spoonacular.com/recipeImages/" + values.id + "-240x150." + values.imageType;
                element.title = values.title;
            } else {
                element.image = "https://spoonacular.com/recipeImages/" + element.id + "-240x150." + element.imageType;
            }
            return <Recipe key={i} val={element} diet={diet}/>
        });
        return (
            <div style={this.styles.container}>
                <Form className="mealPlans" mealPlans={true} formType="Generate" handleGetMeals={this.handleGetMeals} hidden={this.state.showForm}/>
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

export default MealPlans;