import React from 'react'

const Layout = (props) => {
    return (
        <React.Fragment>
            <h1>Toolbar sidebar backdrop</h1>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout
