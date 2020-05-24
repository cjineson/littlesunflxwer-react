import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { connect } from "react-redux";
import { addItemInCart } from "../../Redux/Actions";
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class ConnectedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  render() {
    return (       
        <Card
          style={{ width: 355, height: 280, margin: 10, display: "inline-block" }}
        >
          <CardActionArea
            onClick={() => {
              this.props.history.push("/details/" + this.props.item.id);
            }}
          >
            <CardMedia
              style={{ height: 140 }}
              image={this.props.item.imageUrls[0]}
            />
            <CardContent style={{ height: 50 }}>
              <div
                style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {this.props.item.name}
              </div>
              <div style={{ margin: 5 }}>Price: £ {this.props.item.price}</div>
              <div style={{ color: "#1a9349", fontWeight: "bold", margin: 5 }}>
                {this.props.item.popular && "Popular"}
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <div style={{ height: 45, width: "100%"}}>
                <div style={{ float: "left"}}>
                  <Button
                  size="small"
                  style={{ marginRight: 60 }}
                  onClick={() => {
                    this.props.history.push("/details/" + this.props.item.id);
                  }}>
                  {" "}
                  Details
                </Button>
              </div>
              <div style={{ float: "right"}}>
                <TextField
                    type="number"
                    value={this.state.quantity}
                    style={{ marginLeft: 20, marginBottom: 10, width: 30, fontSize: ".3em",}}
                    inputProps={{ min: 1, max: 10, step: 1 }}
                    onChange={e => {
                      this.setState({ quantity: parseInt(e.target.value) });
                    }}
                  />
                <Tooltip title="Add to cart">
                  <IconButton
                    size="small"
                    onClick={e => {
                      e.stopPropagation();
                      this.props.dispatch(
                        addItemInCart({ ...this.props.item, quantity: this.state.quantity })
                      );
                    }}
                    color="primary"
                    aria-label="Add to shopping cart"
                  >
                    <AddShoppingCartIcon size="small" />
                  </IconButton>
                </Tooltip>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
          </CardActions>
        </Card>
    );
  }
}

export default withRouter(connect()(ConnectedItem));
