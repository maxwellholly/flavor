import React, {Component} from 'react';
import './App.css';
import {HashRouter as Router, NavLink} from 'react-router-dom';
import Routes from "./components/routes/Routes";
import Nav from "./components/nav/Nav"

class App extends Component{
    constructor(props) {
        super(props);
        this.styles = {
        }
    }
    //Function to fetch data from API and return recipes as JSON
    getMeals(api, callback) {
        fetch(api, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "a7abd7a9cemshabd18f81b1c14e0p15c8dcjsndf63f02d30eb"
            }
        })

            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(responseAsJson => {
                callback(responseAsJson);
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="App">
                {/* Conditional that prevents loading before getMeals has returned the data from the API */}
                    <Router className="main-content">
                        <Nav/>
                        <div className="desNav">
                            <NavLink className="mainNav" to='/MealPlans'>
                                <button className="navB">MealPlans</button>
                            </NavLink>
                            <NavLink  className="mainNav" to='/RecipeSearch'>
                                <button className="navB">Recipe Search</button>
                            </NavLink>
                        </div>
                        <Routes
                            getMeals = {this.getMeals}
                        />
                    </Router>
            </div>
        );
    }
}

export default App;
