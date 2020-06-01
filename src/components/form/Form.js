import React, {Component} from 'react'

class Form extends Component {
    constructor(props){
        super(props);
        this.styles = {
            form: {
                marginBottom: "50px",
                fontFamily: "kopius, serif",
                fontWeight: "400",
                fontStyle: "italic",
                color: "#34303e",
                fontSize: "1rem",
                backgroundColor: "rgba(255,255,255,.4)",
                borderRadius: "20px",
                padding: "50px"
            },
            mainLabel: {
                fontSize: "1.25rem"
            },
            sections: {
                marginBottom: "20px"
            },
            button: {
                backgroundColor: "#F1E7A8",
                border: "4px white solid",
                color: "#34303e",
                height: "50px",
                width: "200px",
                borderRadius: "10px"
            }
        };
        this.state = {
            calories: '',
            diet: '',
            exclude: '',
            recipes: [],
            loaded: false
        }
    }
    render () {
        return (
            <form style={this.styles.form} onSubmit={function(event){
                event.preventDefault();
                this.props.handleGetMeals(this.state.calories, this.state.diet, this.state.exclude, this.props.name)}.bind(this)} name={this.props.name} hidden={this.props.hidden}>
                <div hidden={this.props.hide} style={this.styles.sections}>
                <label style={this.styles.mainLabel} htmlFor="calories">Target Daily Calories </label>
                <input className="inputNumText" type="number" min="1" id="calories" onChange={function(event){
                    this.setState({
                        calories: event.target.value
                    })
                }.bind(this)}/>
                </div>
                <div style={this.styles.sections}>
                <label style={this.styles.mainLabel} htmlFor="diet">Diet </label>
                <input type="radio" id="glutenFree" name="diet" value="gluten free" onChange={function(event){
                    if (event.target.checked) {
                        this.setState({
                        diet: event.target.value
                    })}
                }.bind(this)}/>
                    <label htmlFor="glutenFree">Gluten Free</label><br/>
                    <input type="radio" id="vegetarian" name="diet" value="vegetarian" onChange={function(event){
                        if (event.target.checked) {
                            this.setState({
                                diet: event.target.value
                            })}
                    }.bind(this)}/>
                        <label htmlFor="vegetarian">Vegetarian</label><br/>
                        <input type="radio" id="ketogenic" name="diet" value="ketogenic" onChange={function(event){
                            if (event.target.checked) {
                                this.setState({
                                    diet: event.target.value
                                })}
                        }.bind(this)}/>
                            <label htmlFor="ketogenic">Ketogenic</label>
                            <input type="radio" id="lacto" name="diet" value="lacto-vegetarian" onChange={function(event){
                                if (event.target.checked) {
                                    this.setState({
                                        diet: event.target.value
                                    })}
                            }.bind(this)}/>
                                <label htmlFor="lacto">Lacto-Vegetarian</label><br/>
                                <input type="radio" id="ovo" name="diet" value="ovo-vegetarian" onChange={function(event){
                                    if (event.target.checked) {
                                        this.setState({
                                            diet: event.target.value
                                        })}
                                }.bind(this)}/>
                                    <label htmlFor="ovo">Ovo-Vegetarian</label><br/>
                                    <input type="radio" id="vegan" name="diet" value="vegan" onChange={function(event){
                                        if (event.target.checked) {
                                            this.setState({
                                                diet: event.target.value
                                            })}
                                    }.bind(this)}/>
                                        <label htmlFor="vegan">Vegan</label>
                                        <input type="radio" id="pescetarian" name="diet" value="pescetarian" onChange={function(event){
                                            if (event.target.checked) {
                                                this.setState({
                                                    diet: event.target.value
                                                })}
                                        }.bind(this)}/>
                                            <label htmlFor="pescetarian">Pescetarian</label><br/>
                                            <input type="radio" id="paleo" name="diet" value="paleo" onChange={function(event){
                                                if (event.target.checked) {
                                                    this.setState({
                                                        diet: event.target.value
                                                    })}
                                            }.bind(this)}/>
                                                <label htmlFor="paleo">Paleo</label><br/>
                                                <input type="radio" id="primal" name="diet" value="primal" onChange={function(event){
                                                    if (event.target.checked) {
                                                        this.setState({
                                                            diet: event.target.value
                                                        })}
                                                }.bind(this)}/>
                                                    <label htmlFor="primal">Primal</label>
                                                    <input type="radio" id="whole" name="diet" value="whole30" onChange={function(event){
                                                        if (event.target.checked) {
                                                            this.setState({
                                                                diet: event.target.value
                                                            })}
                                                    }.bind(this)}/>
                                                        <label htmlFor="whole">Whole30</label><br/>
                </div>
                <div style={this.styles.sections}>
                <label style={this.styles.mainLabel} htmlFor="exclude">Leave Out </label>
                <input className="inputNumText" type="text" id="exclude" placeholder="Peanuts, Anchovies..." onChange={function(event){
                    this.setState({
                        exclude: event.target.value
                    })
                }.bind(this)}/>
                </div>

                <button style={this.styles.button} type="submit">{this.props.formType}</button>
            </form>
        )
    }

};

export default Form

const styles = {

};
