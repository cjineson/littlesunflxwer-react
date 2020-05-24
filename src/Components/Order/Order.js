import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// import FormHelperText from "@material-ui/core/FormHelperText";
import Checkout from '../Checkout/Checkout';


const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems
  };
};

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (state) => {
  let valid = true;
  if (state.fullname == null | state.email == null) valid=false;
  Object.values(state.errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

// This component shows the items user checked out from the cart.
class ConnectedOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullname: null,
      email: null,
      password: null,
      errors: {
        fullname: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    console.log(this.state)
    switch (name) {
      case 'fullname': 
        errors.fullname = 
          value.length < 5
            ? 'Name must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }
  
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })
  }

  render() {
    let totalPrice = this.props.checkedOutItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    return (
      <div style={{ padding: 10 }}>
        <div style={{ fontSize: "1.5em", marginTop: 10 }}>
          Order summary
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.checkedOutItems.map((item, index) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div
          style={{
            color: "#504F5A",
            marginLeft: 5,
            marginTop: 50,
            fontSize: 22
          }}
        >
          Total price: £ {totalPrice}
        </div>
<hr/>
        <div style={{ marginTop: 40 }}>
          <p style={{ fontSize: "1.5em"}}>Your Details</p>
          {/* <p>Items marked * are required</p> */}
          <form onSubmit={this.handleSubmit} noValidate>
            <FormControl required="true" error={this.state.errors.fullname.length>0}>
              <InputLabel htmlFor="fullname">Full Name</InputLabel>
              <Input id="fullname" name="fullname" onChange={e => this.handleChange(e)}/>
            </FormControl>
            <FormControl required="true" error={this.state.errors.email.length>0}>
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input id="email" name="email" onChange={e => this.handleChange(e)} aria-describedby="email-helper-text" />
              {/* <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl required="true">
              <InputLabel htmlFor="addr1">Address Line 1</InputLabel>
              <Input id="addr1" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="addr2">Address Line 2</InputLabel>
              <Input id="addr2" />
            </FormControl>
            <FormControl required="true">
              <InputLabel htmlFor="town">Town</InputLabel>
              <Input id="town" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="county">County</InputLabel>
              <Input id="county" />
            </FormControl>
            <FormControl required="true">
              <InputLabel htmlFor="postcode">Postcode</InputLabel>
              <Input id="postcode" />
            </FormControl>

            {/* {validateForm(this.state) &&
              <div align="center"> 
                <Checkout
              name={'Chris'}
              email={'chris@test.com'}
              zipCode={'123'}
              description={'Order'}
              amount={totalPrice}
              />
              </div>
            } */}


            <div align="center"> 
                <Checkout
              name={'Chris'}
              email={'chris@test.com'}
              zipCode={'123'}
              description={'Order'}
              amount={totalPrice}
              />
              </div>


          </form>
        </div>

        <div style={{marginTop: 30}}>

        </div>
{/* 
        <Button
          color="secondary"
          variant="outlined"
          disabled={totalPrice === 0}
          onClick={() => {
            this.props.dispatch(setCheckedOutItems([]));
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Cancel
        </Button> */}
      </div>
    );
  }
}
const Order = withRouter(connect(mapStateToProps)(ConnectedOrder));

export default Order;
