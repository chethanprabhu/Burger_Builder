import React from 'react'
import classes from "./Modal.module.css"
import Backdrop from "../Backdrop/Backdrop"
const Modal = (props) => {
    return (
        <React.Fragment>
            <Backdrop backdropClicked={props.backdropClicked} show={props.ordered}/>
            <div className={classes.Modal}
                style={{
                    transform: props.ordered ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.ordered ? '1': '0'
                }}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Modal
