import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Landing from '../../pages/Landing'
import MealPlans from '../../pages/MealPlans'
import RecipeSearch from '../../pages/RecipeSearch'

class Routes extends Component {
    render() {
        return (
            <section className="main-content" >
                <Switch>
                    <Route exact path={'/Landing'} render={(props) => <Landing {...props} isAuthed={true} features={this.props.features} getMeals={this.props.getMeals}/>}/>
                    <Route exact path={'/'} render={(props) => <Landing {...props} isAuthed={true} features={this.props.features} getMeals={this.props.getMeals}/>}/>
                    <Route exact path={'/MealPlans'} render={(props) => <MealPlans {...props} isAuthed={true} features={this.props.features} getMeals={this.props.getMeals}/>}/>
                    <Route exact path={'/RecipeSearch'} render={(props) => <RecipeSearch {...props} isAuthed={true} features={this.props.features} getMeals={this.props.getMeals}/>}/>
                </Switch>
            </section>
        )
    }
}

export default Routes