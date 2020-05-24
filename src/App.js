import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import ProductList from "./Components/ProductList/ProductList";
import { Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import CartDialog from "./Components/CartDialog/CartDialog";
import PreOrderDialog from "./Components/Preorder/Preorder";
import Details from "./Components/Details/Details";
import Order from "./Components/Order/Order";
import Footer from "./Components/Footer/Footer";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

class App extends Component {
  render() {
    return (
      <div className="app" style={{ backgroundImage: `url(${require("./images/background.jpg")})`,backgroundPosition: 'right top', backgroundSize: 'auto  100%', backgroundRepeat: 'no-repeat', backgroundAttachment: "fixed" }}>
        <Header />
        <div className="app-body">
          <Menu />
          <div className="content">
            <CartDialog />
            <PreOrderDialog />
            <Switch>
              <Route path="/" exact component={ProductList} />
              <Route path="/details/:id" component={Details} />
              <Route path="/order" component={Order} />
              <Route
                component={() => (
                  <div style={{ padding: 20 }}>Page not found</div>
                )}
              />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
