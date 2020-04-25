import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import flower from "../../images/flower.jpg";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          boxSizing: "border-box",
          padding: 5,
          borderTop: "1px solid lightgray",
          height: 50,
          backgroundColor: "#f1f1f1",
          justifyContent: "space-around",
          display: "flex"
        }}
      >
        <div>
          <div className="footerHead"
            style={{ color: "#504F5A", fontWeight: "bold" }}
          >
            Buy
          </div>
          <NavLink
            to={"/payment"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)"
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline"
            }}
          >
            <div className="footerItem">Terms of payment</div>
          </NavLink>
          <NavLink
            to={"/delivery"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)"
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline"
            }}
          >
            <div className="footerItem">Delivery</div>
          </NavLink>
        </div>
        <div>
          <div className="footerHead"
            style={{ color: "#504F5A", fontWeight: "bold"}}
          >
            About us
          </div>
          <NavLink
            to={"/info"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)"
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline"
            }}
          >
            <div className="footerItem">Company Info</div>
          </NavLink>
        </div>
        <div>
          <div className="footerHead"
            style={{ color: "#504F5A", fontWeight: "bold" }}
          >
            Other Sites
          </div>
          <a
            href="https://www.facebook.com/littlesunflxwer/"
            target="blank"
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)"
            }}
          >
            <div className="footerItem">Facebook</div>
          </a>
          <a
            href="https://www.etsy.com/uk/shop/littlesunflxwer"
            target="blank"
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)"
            }}
          >
            <div className="footerItem">Etsy</div>
          </a>
        </div>
        <div className="footerImg">
          <img
            src={flower}
            alt={"Flower"}
            style={{ marginLeft: 10, marginBottom: 10, height: "35px"}}
          />
        </div>
      </div>
    );
  }
}

export default Footer;
