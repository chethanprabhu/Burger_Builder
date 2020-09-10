import React from 'react'
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import classses from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        <div className={classses.Sidebar}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    )
}

export default Sidebar
