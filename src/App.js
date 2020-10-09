import React, { Component } from 'react';
import './App.css';
import Layout from "./components/layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder"
import Checkout from "./container/Checkout/Checkout"
import { Route } from "react-router-dom";
import Orders from "./container/Orders/Orders"

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/orders" exact component={Orders}/>
        <Route path="/checkout" component={Checkout}/>
      </Layout>
    )
  }
}

export default App;
