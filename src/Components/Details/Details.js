import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CircularProgress from "@material-ui/core/CircularProgress";
import { addItemInCart } from "../../Redux/Actions";
import Api from "../../Api";
import Item from "../Item/Item";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";



class ConnectedDetails extends Component {
  constructor(props) {
    super(props);

    this.isCompMounted = false;

    this.state = {
      relatedItems: [],
      quantity: 1,
      item: null,
      itemLoading: false
    };
  }

  async fetchProductAndRelatedItems(productId) {
    this.setState({ itemLoading: true });

    let item = await Api.getItemUsingID(productId);

    let relatedItems = await Api.searchItems({
      category: item.category,
    });

    // Make sure this component is still mounted before we set state..
    if (this.isCompMounted) {
      this.setState({
        item,
        quantity: 1,
        relatedItems: relatedItems.data.filter(x => x.id !== item.id),
        itemLoading: false,
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    // If ID of product changed in URL, refetch details for that product
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchProductAndRelatedItems(this.props.match.params.id);
    }

  }


  componentDidMount() {
    this.isCompMounted = true;
    this.fetchProductAndRelatedItems(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.isCompMounted = false;
  }



  render() {
    if (this.state.itemLoading) {
      return <CircularProgress className="circular" />;
    }

    if (!this.state.item) {
      return null;
    }

    return (
      <div style={{ padding: 10 }}>
        <div
          style={{
            marginBottom: 20,
            marginTop: 10,
            fontSize: "1em"
          }}
        >
          {this.state.item.name}
        </div>
        
        <div>
          
          {this.state.item.imageUrls.map((value, index) => {
            return <img key={index} src={this.state.item.imageUrls[index]} alt="" width={250} height={250}
              style={{
                border: "1px solid lightgray",
                marginRight: "30px",
                marginBottom: "30px",
                borderRadius: "5px",
                objectFit: "cover"
              }} />
          })}

        {/* Product description */}
        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
            fontSize: "1em"
          }}
        >
          {/* Product Description */}
        </div>
        <div
          style={{
            maxHeight: 200,
            fontSize: 13,
            overflow: "auto",
            marginBottom: 25
          }}
        >
          {this.state.item.description ? this.state.item.description : "Not available"}
        </div>

          <div
            style={{
              flex: 1,
              marginLeft: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >

            <div style={{
              fontSize: "1.5em",
              marginTop: "10px"
            }}>
              £{this.state.item.price}
            </div>

            {/* {this.state.item.popular && (
              <div style={{ fontSize: 14, marginTop: 5, color: "#228B22" }}>
                (Popular product)
              </div>
            )} */}

            <TextField
              type="number"
              value={this.state.quantity}
              style={{ marginLeft: 20, marginBottom: 10, width: 30, fontSize: ".3em",}}
              label="Quantity"
              inputProps={{ min: 1, max: 10, step: 1 }}
              onChange={e => {
                this.setState({ quantity: parseInt(e.target.value) });
              }}
            />
            
            <Button
              style={{ 
                fontSize: ".8em",
                marginLeft: 30
              }}
              color="primary"
              variant="outlined"
              onClick={() => {
                this.props.dispatch(
                  addItemInCart({
                    ...this.state.item,
                    quantity: this.state.quantity
                  })
                );
              }}
            >
              Add to Cart <AddShoppingCartIcon style={{ marginLeft: 5 }} />
            </Button>
          </div>
        </div>

        {/* Relateditems */}
        <div
          style={{
            marginTop: 20,
            marginBottom: 10,
            fontSize: "1em"
          }}
        >
          Related Items
        </div>
        {
          this.state.relatedItems.slice(0, 3).map(x => {
            return <Item key={x.id} item={x} />;
          })
        }
      </div >
    );
  }
}

let Details = connect()(ConnectedDetails);
export default Details;
