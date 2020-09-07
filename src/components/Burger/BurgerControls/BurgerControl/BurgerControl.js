import React from 'react'
import classes from "./BurgerControl.module.css"

const BurgerControl = (props) => {

    let checkForDisabled = (state, type) => {
        return state.ingredients[type] === 0;
    }

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button disabled={checkForDisabled(props.state, props.type)} className={classes.Less} onClick={props.lessClicked}>-</button>
            <button className={classes.More} onClick={props.moreClicked}>+</button>
        </div>
    )
}

export default BurgerControl
