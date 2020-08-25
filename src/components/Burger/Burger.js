import React from 'react'
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient"
import classes from "./Burger.module.css"

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map((ingredient) => {
        return [...Array(props.ingredients[ingredient])].map((_, index) => {
            return <BurgerIngredient key={ingredient + index} type={ingredient}></BurgerIngredient> 
        })
    })

    console.log(transformedIngredients);
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default Burger
