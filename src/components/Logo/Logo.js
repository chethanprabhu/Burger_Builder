import React from 'react'
import logo from "../../assets/images/burger-logo.png"
import classes from "./Logo.module.css"

const Logo = () => (
    <div className={classes.Logo}>
        <img src={logo} alt="mylogo"></img>
    </div>
)
    


export default Logo
