import React from 'react'
import classes from "./BurgerIngredient.module.css"

const BurgerIngredient = (props) => {
   let ingredient = null;

    switch(props.type) {
        case "bread-bottom":
            <div className={classes.BreadBottom}></div>
            break;
        case "bread-top":
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
            break;
        case "meat":
            <div className={classes.Meat}></div>
            break;
        case "cheese":
            <div className={classes.Cheese}></div>
            break;
        case "salad":
            <div className={classes.Salad}></div>
            break;
        case "bacon":
            <div className={classes.Bacon}></div>
            break;
        default: ingredient = null;
    }
}

export default BurgerIngredient
