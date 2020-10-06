import React, { Component } from "react";
import CheckoutSummary from "../../components/Burger/CheckoutSummary/CheckoutSummary"
import {Route} from "react-router-dom";
import Contact from "../../components/Burger/Contact/Contact"

class Checkout extends Component {
    state = {
        ingredients: {}
    }

    componentDidMount = () => {
        const query = new URLSearchParams(this.props.location.search);
        let ingredients = {}
        for(let param of query.entries()) {
            ingredients[param[0]] = parseInt(param[1]);
        }
        this.setState({ingredients: ingredients});
    }

    cancleOrderHandler = () => {
        this.props.history.goBack();
    }

    continueOrderHandler = () => {
        this.props.history.push("checkout/contact")
    }

    render() {
        return(
            <>
                <CheckoutSummary cancleOrder={this.cancleOrderHandler} continueOrder={this.continueOrderHandler} ingredients={this.state.ingredients}/>
                <Route path={this.props.match.path + "contact"} component={Contact}/>
            </>
        )
    }
    
}

export default Checkout;