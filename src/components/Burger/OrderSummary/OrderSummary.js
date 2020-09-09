import React from 'react'
import Button from "../../UI/Button/Button"

const OrderSummary = (props) => {

    let orderedItems = Object.keys(props.ing).map((ing) => {
        return <li key={ing}>{ing}: {props.ing[ing]}</li>
    })

    return (
       <React.Fragment>
           <p>Thanks for ordering a BURGER for us.</p>
           <p>Your BURGER contains the following ingredients</p>
           <ul>{orderedItems}</ul>
            <p>Your total price is ₹{props.price}</p>
           <p>Continue to check out?</p>
           <Button clicked={props.cancle} buttonType="Danger">CANCLE</Button>
           <Button clicked={props.continue} buttonType="Success">SUCCESS</Button>
       </React.Fragment>
    )
}

export default OrderSummary
