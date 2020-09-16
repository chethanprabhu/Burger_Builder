import React, { Component } from 'react'
import classes from "./Modal.module.css"
import Backdrop from "../Backdrop/Backdrop"
class Modal extends Component {

    shouldComponentUpdate(nextProps) {
        //because no need to update summary when it's hidden
        return (nextProps.ordered !== this.props.ordered) || (nextProps.children !== this.props.children)
    }

    //just for demo purpose only
    componentDidUpdate() {
        console.log("updated Modal");
    }

    render() {
        return (
            <React.Fragment>
                <Backdrop backdropClicked={this.props.backdropClicked} show={this.props.ordered}/>
                <div className={classes.Modal}
                    style={{
                        transform: this.props.ordered ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.ordered ? '1': '0'
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Modal
