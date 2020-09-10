import React, { Component } from 'react'
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar"
import Sidebar from "../Navigation/Sidebar/Sidebar"

class Layout extends Component {

    state = {
        showSidebar: false
    }

    sideBarCloseHandler = () => {
        this.setState({
            showSidebar: false
        })
    }

    toggleClickedHandler = () => {
        this.setState({
            showSidebar: !this.state.showSidebar
        })
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar toggleClicked={this.toggleClickedHandler}/>
                <Sidebar toggle={this.state.showSidebar} closed={this.sideBarCloseHandler}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout
