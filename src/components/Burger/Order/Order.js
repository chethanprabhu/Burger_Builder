import React from 'react'
import classes from "./Order.module.css"

const Order = (props) => {
    const ingredients = [];

    for(let ingredient in props.ingredient) {
        ingredients.push({
            name: ingredient,
            quantity: props.ingredient[ingredient]
        })
    }

    const ingredientOutput = ingredients.map(ingredient => {
        return <span className={classes.OrderSpan} key={ingredient.name}>{ingredient.name} ({ingredient.quantity})</span>
    })

    return (
        <div className={classes.Order}>
           <p>Ingredients: {ingredientOutput}</p>
           <p>Price: <strong>{props.price} INR</strong></p> 
        </div>
    )
}

export default Order
