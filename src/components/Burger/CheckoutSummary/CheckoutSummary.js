import React from 'react'
import Burger from '../Burger'
import classes from "./CheckoutSummary.module.css"
import Button from "../../UI/Button/Button"

const CheckoutSummary = (props) => {
    return (
       <div className={classes.CheckoutSummary}>
            <h1>Enjoy your Burger</h1>
            <div style={{width:'100%', margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button buttonType="Danger" clicked={props.cancleOrder}>CANCLE</Button>
            <Button buttonType="Success" clicked={props.continueOrder}>CONTINUE </Button>
       </div>
    )
}

export default CheckoutSummary
