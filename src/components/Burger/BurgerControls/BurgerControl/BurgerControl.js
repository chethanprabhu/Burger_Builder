import React from 'react'
import classes from "./BurgerControl.module.css"

const BurgerControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.lessClicked}>-</button>
            <button className={classes.More} onClick={props.moreClicked}>+</button>
        </div>
    )
}

export default BurgerControl
