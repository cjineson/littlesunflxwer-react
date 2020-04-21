import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Banner extends Component {
  render() {
    return (
      <p>Yo</p>
    );
  }
}

export default withRouter(connect()(Banner));
