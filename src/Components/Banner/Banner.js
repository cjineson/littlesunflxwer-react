import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Banner extends Component {

  render() {        
    return (
      <div>
        <img alt="" style={{ width: "100%", height: "100px"}} src="images/banner.png"/>
        <div style={{ position: "absolute", top: "10px", left: "10px", color: "white", fontSize: "1.5em"}}>
          Super-cute crocheted accessories,<br/>hand-made with <span role="img" aria-label="hearts">💕</span> since 2020
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(Banner));