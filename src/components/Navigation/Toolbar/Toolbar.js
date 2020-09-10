import React from 'react'
import classes from "./Toolbar.module.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import MenuLogo from "../../../assets/images/menu.png"

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div onClick={props.toggleClicked}><img className={classes.Toggle} src={MenuLogo} alt="toggle"></img></div>
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default Toolbar
