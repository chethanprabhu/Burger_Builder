import React, { Component } from  "react";
import Burger from "../../components/Burger/Burger"
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios/axios-orders"
import Spinner from "../../components/UI/Spinnner/Spinner"
import withErrorHandling from "../../hoc/withErrorHandling/withErrorHandling"

const INGREDIENT_PRICE = {
    salad: 20,
    cheese: 30,
    meat: 50,
    bacon: 40
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 50,
        ordered: false,
        loading: false
    } 

    toggleOrdered = () => {
        this.setState({ordered: true})
    }

    addHandler = (type) => {
        this.setState({
            ingredients: {
            ...this.state.ingredients,
            [type]: this.state.ingredients[type] + 1
        }, totalPrice: this.state.totalPrice + INGREDIENT_PRICE[type]})
        console.log(this.state)
    } 

    removeHandler = (type) => {
        this.setState({
            ingredients: {
            ...this.state.ingredients,
            [type]: this.state.ingredients[type] ? this.state.ingredients[type] - 1: 0
        }, totalPrice: this.state.totalPrice - INGREDIENT_PRICE[type]})
    }

    backdropClickedHandler = () => {
        this.setState({
            ordered: false
        })
    }

    orderContinueHandler = () => {
        this.setState({loading: true})
        axios.post("/orderInfo.json", {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            customer: {
                name: "Chethan prabhu",
                address: {
                    street: "landlinks",
                    pincode: 555912,
                    country: "India"
                },
                email: "chethanprabhu47@gmail.com"
            },
            deliveryType: "fastest"
        })
        .then((response) => {
            console.log(response);
            this.setState({loading: false, ordered: false})
        })
        .catch((err) => {
            console.log(err);
            this.setState({loading: false, ordered: false})
        })
    }

    

    render() {

        let orderSummary = <OrderSummary cancle={this.backdropClickedHandler} continue={this.orderContinueHandler} 
        ing={this.state.ingredients} price={this.state.totalPrice}/>

        if(this.state.loading) {
            orderSummary = <Spinner/>
        }

        return (
            <React.Fragment>
                <Modal backdropClicked={this.backdropClickedHandler} ordered={this.state.ordered}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls more={(type) => this.addHandler(type)} 
                                less={(type) => this.removeHandler(type)}
                                state={this.state}
                                orderClicked={this.toggleOrdered}/>
            </React.Fragment>
        )
    }
}

export default withErrorHandling(BurgerBuilder, axios);