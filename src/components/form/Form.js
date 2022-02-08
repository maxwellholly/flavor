import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            form: {
                marginBottom: "50px",
                fontFamily: "kopius, serif",
                fontWeight: "400",
                fontStyle: "italic",
                color: "#34303e",
                fontSize: "1rem",
                padding: "50px",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "5px"
            },
            mainLabel: {
                fontSize: "1.25rem"
            },
            sections: {
                width: '100%',
                height: 'auto',
                display: 'block',
                marginTop: "20px",
                marginRight: "auto",
                marginLeft: "auto"
            },
            button: {
                backgroundColor: "black",
                color: "white",
                height: "40px",
                width: "200px",
                border: "none",
                borderRadius: "20px",
                marginTop: "20px"
            }
        };
        this.state = {
            calories: '',
            diet: '',
            exclude: '',
            recipes: [],
            loaded: false,
            showForm: true,
            duration: "day",
            mealPlans: this.props.mealPlans
        }
    }
    render() {
        return (
            <div>
                <div className="desNav">
                    <NavLink className="mainNav" to='/MealPlans'>
                        <button className="navB plans">Meal Plans</button>
                    </NavLink>
                    <NavLink className="mainNav" to='/RecipeSearch'>
                        <button className="navB search">Search</button>
                    </NavLink>
                </div>
                <form className={this.props.className} style={this.styles.form} onSubmit={function (event) {
                    event.preventDefault();
                    this.props.handleGetMeals(this.state.calories, this.state.diet, this.state.exclude, this.state.duration)
                }.bind(this)} duration={this.state.duration} hidden={this.props.hidden}>
                    {this.state.mealPlans ? <div><div style={this.styles.buttonC}>
                        <div className="dayD">
                            <button className="durationB active day" style={this.styles.plan} onClick={function (event) {
                                event.preventDefault();
                                if (document.getElementsByClassName("active")) {
                                    let actives = document.getElementsByClassName("durationB");
                                    for (let i = 0; i < actives.length; i++) {
                                        actives[i].classList.remove("active");
                                    }
                                }
                                event.target.classList.add("active");
                                this.setState({
                                    duration: "day",
                                    showForm: false
                                })
                            }.bind(this)}></button></div>
                        <div className="weekD">
                            <button className="durationB week" style={this.styles.plan} onClick={function (event) {
                                event.preventDefault();
                                if (document.getElementsByClassName("active")) {
                                    let actives = document.getElementsByClassName("durationB");
                                    for (let i = 0; i < actives.length; i++) {
                                        actives[i].classList.remove("active");
                                    }
                                }
                                event.target.classList.add("active");
                                this.setState({
                                    duration: "week",
                                    showForm: false
                                })
                            }.bind(this)}></button>
                        </div>
                    </div>
                        <div hidden={this.props.hide} style={this.styles.sections}>
                            <label htmlFor="calories">Target Daily Calories</label>
                            <input className="inputNumText" type="number" min="1" id="calories" onChange={function (event) {
                                this.setState({
                                    calories: event.target.value
                                })
                            }.bind(this)} />
                        </div>
                    </div>
                        : ""}
                    <div style={this.styles.sections} className="diets">
                        <div className="diet1">
                            <div>
                                <input type="radio" id="glutenFree" name="diet" value="gluten free" onChange={function (event) {
                                    if (event.target.checked) {
                                        this.setState({
                                            diet: event.target.value
                                        })
                                    }
                                }.bind(this)} />
                                <label htmlFor="glutenFree">Gluten Free</label>
                            </div>
                            <div>
                                <input type="radio" id="vegetarian" name="diet" value="vegetarian" onChange={function (event) {
                                    if (event.target.checked) {
                                        this.setState({
                                            diet: event.target.value
                                        })
                                    }
                                }.bind(this)} />
                                <label htmlFor="vegetarian">Vegetarian</label>
                            </div>
                            <div>
                                <input type="radio" id="ketogenic" name="diet" value="ketogenic" onChange={function (event) {
                                    if (event.target.checked) {
                                        this.setState({
                                            diet: event.target.value
                                        })
                                    }
                                }.bind(this)} />
                                <label htmlFor="ketogenic">Ketogenic</label>
                            </div>
                            <div>
                                <input type="radio" id="lacto" name="diet" value="lacto-vegetarian" onChange={function (event) {
                                    if (event.target.checked) {
                                        this.setState({
                                            diet: event.target.value
                                        })
                                    }
                                }.bind(this)} />
                                <label htmlFor="lacto">Lacto-Veg</label>
                            </div>
                            <div>
                                <input type="radio" id="ovo" name="diet" value="ovo-vegetarian" onChange={function (event) {
                                    if (event.target.checked) {
                                        this.setState({
                                            diet: event.target.value
                                        })
                                    }
                                }.bind(this)} />
                                <label htmlFor="ovo">Ovo-Veg</label>
                            </div>

                        </div>
                        <div className="diet2">
                            <div>
                                <input type="radio" id="vegan" name="diet" value="vegan" onChange={function (event) {
                                    if (event.target.checked) {
                                        this.setState({
                                            diet: event.target.value
                                        })
                                    }
                                }.bind(this)} />
                                <label htmlFor="vegan">Vegan</label>
                            </div>
                            <div>
                                <input type="radio" id="pescetarian" name="diet" value="pescetarian" onChange={function (event) {
                                    if (event.target.checked) {
                                        this.setState({
                                            diet: event.target.value
                                        })
                                    }
                                }.bind(this)} />
                                <label htmlFor="pescetarian">Pescetarian</label>
                            </div>

                            <div>
                                <input type="radio" id="paleo" name="diet" value="paleo" onChange={function (event) {
                                    if (event.target.checked) {
                                        this.setState({
                                            diet: event.target.value
                                        })
                                    }
                                }.bind(this)} />
                                <label htmlFor="paleo">Paleo</label>
                            </div>
                            <div>
                                <input type="radio" id="primal" name="diet" value="primal" onChange={function (event) {
                                    if (event.target.checked) {
                                        this.setState({
                                            diet: event.target.value
                                        })
                                    }
                                }.bind(this)} />
                                <label htmlFor="primal">Primal</label>
                            </div>
                            <div>
                                <input type="radio" id="whole" name="diet" value="whole30" onChange={function (event) {
                                    if (event.target.checked) {
                                        this.setState({
                                            diet: event.target.value
                                        })
                                    }
                                }.bind(this)} />
                                <label htmlFor="whole">Whole30</label>
                            </div>

                        </div>
                    </div>
                    <div style={this.styles.sections}>
                        <label htmlFor="calories">Leave These Out</label>
                        <input className="inputNumText" type="text" id="exclude" placeholder="Peanuts, Anchovies..." onChange={function (event) {
                            this.setState({
                                exclude: event.target.value
                            })
                        }.bind(this)} />
                    </div>

                    <button style={this.styles.button} type="submit">{this.props.formType}</button>
                </form>
            </div>
        )
    }

};

export default Form