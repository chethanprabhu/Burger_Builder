import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import classes from "./Contact.module.css";
import axios from "../../../axios/axios-orders"
import Spinner from "../../UI/Spinnner/Spinner"

class Contact extends Component {

    state= {
        name: '',
        email: '',
        address: {
            street: '',
            pincode: ''
        },
        loading: false
    }

    OrderHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true})
        axios.post("/orderInfo.json", {
            ingredients: this.props.ingredients,
            totalPrice: "100",
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
            this.props.history.push("/");
        })
        .catch((err) => {
            console.log(err);
            this.setState({loading: false, ordered: false})
        })
    }

    render() {

        let form = (
            <>
                <h1>Please enter your details</h1>
                <input className={classes.Input} name="name" placeholder="Enter your name"></input>
                <input className={classes.Input} name="email" placeholder="Enter your e-mail address"></input>
                <input className={classes.Input} name="street" placeholder="Enter your street address"></input>
                <input className={classes.Input} name="pincode" placeholder="Enter your pincode"></input>
                <Button buttonType="Success" clicked={(e) => this.OrderHandler(e)}>ORDER</Button>
            </>
        )

        if(this.state.loading) {
            form = <Spinner/>
        }

        return (
            <div className={classes.Contact}>
                <form>
                    {form}
                </form>
            </div>
        )
    }
}

export default Contact;