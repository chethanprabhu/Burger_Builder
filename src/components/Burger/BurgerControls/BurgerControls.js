import React from 'react'
import BuildControl from "./BurgerControl/BurgerControl"
import classes from './BurgerControls.module.css';

const controls = [
    {label: "Salad", type:"salad"},
    {label: "Bacon", type:"bacon"},
    {label: "Cheese", type:"cheese"},
    {label: "Meat", type:"meat"}
]

const BurgerControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            <p>Total Price: <strong>₹{props.state.totalPrice}</strong></p>
            {controls.map(control => {
                return <BuildControl 
                    key={control.label} 
                    label={control.label}
                    moreClicked={() => props.more(control.type)}
                    lessClicked={() => props.less(control.type)}
                    state={props.state}
                    type={control.type}
                    ></BuildControl>
            })}
            <button disabled={props.state.totalPrice === 50} className={classes.OrderButton}
                onClick={props.orderClicked}>ORDER NOW</button>
        </div>
    ) 
}

export default BurgerControls
