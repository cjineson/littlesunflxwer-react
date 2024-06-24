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
import FilledInput from "@material-ui/core/FilledInput";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';


const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
});

class ConnectedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>

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
                  size="medium"
                  style={{ }}
                  onClick={() => {
                    this.props.history.push("/details/" + this.props.item.id);
                  }}>
                  {" "}
                  Details...
                </Button>
              </div>
              <div style={{ float: "right"}}>
                <input
                    style= {{ border: "none", textAlign: "right", fontSize: "1em"}}
                    type="number"
                    placeholder="1"
                    value={this.state.quantity}
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
      </MuiThemeProvider>
    );
  }
}

export default withRouter(connect()(ConnectedItem));
