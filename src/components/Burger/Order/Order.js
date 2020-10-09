import React from 'react'
import classes from "./Order.module.css"

const Order = () => {
    return (
        <div className={classes.Order}>
           <p>Ingredients: Salad (1)</p>
           <p>Price: <strong>100 INR</strong></p> 
        </div>
    )
}

export default Order
