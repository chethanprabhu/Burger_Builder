import React, { Component } from  "react";
import Burger from "../../components/Burger/Burger"
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        ordered: false
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
        console.log("Not yet implemented");
    }

    render() {
        return (
            <React.Fragment>
                <Modal backdropClicked={this.backdropClickedHandler} ordered={this.state.ordered}>
                    <OrderSummary cancle={this.backdropClickedHandler} continue={this.orderContinueHandler} 
                        ing={this.state.ingredients} price={this.state.totalPrice}/>
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

export default BurgerBuilder;