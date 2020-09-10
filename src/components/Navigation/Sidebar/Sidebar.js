import React from 'react'
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import classses from "./Sidebar.module.css"
import Backdrop from "../../UI/Backdrop/Backdrop"

const Sidebar = (props) => {
    const attachedClasses = [classses.Sidebar, classses.Close];
    if(props.toggle) {
        attachedClasses.pop();
        attachedClasses.push(classses.Open)
    } else {
        attachedClasses.pop();
        attachedClasses.push(classses.Close)
    }

    return (
        <React.Fragment>
            <Backdrop show={props.toggle} backdropClicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </React.Fragment>
    )
}

export default Sidebar
