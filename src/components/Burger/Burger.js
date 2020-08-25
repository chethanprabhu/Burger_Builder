import React from 'react'
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient"
import classes from "./Burger.module.css"

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map((ingredient) => {
        return [...Array(props.ingredients[ingredient])].map((_, index) => {
            return <BurgerIngredient key={ingredient + index} type={ingredient}></BurgerIngredient> 
        })
    }).flat();

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add some ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default Burger
