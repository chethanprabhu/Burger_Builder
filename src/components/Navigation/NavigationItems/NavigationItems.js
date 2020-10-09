import React from 'react'
import classes from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact active>Burger</NavigationItem>
        <NavigationItem link="/orders" active>Orders</NavigationItem>
    </ul>
);

export default NavigationItems
