import React from 'react'
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar"
import Sidebar from "../Navigation/Sidebar/Sidebar"

const Layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar/>
            <Sidebar/>
            <main className={classes.content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout
