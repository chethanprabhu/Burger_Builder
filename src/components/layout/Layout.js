import React from 'react'
import classes from "./Layout.module.css";

const Layout = (props) => {
    return (
        <React.Fragment>
            <h1>Toolbar sidebar backdrop</h1>
            <main className={classes.content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout
