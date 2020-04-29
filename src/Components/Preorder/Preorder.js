import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
// import { showPreDialog, customerEmail } from "../../Redux/Actions";
import { showPreDialog } from "../../Redux/Actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Mailto from 'react-protected-mailto';
import sadflower from "../../images/sad-sunflower.png";


const mapStateToProps = state => {
    return { open: state.showPreDialog, customerEmail: state.customerEmail };
};

class PreOrderForm extends React.Component {

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={() => {
                    this.props.dispatch(showPreDialog(false));
                }}
            >
                <div style={{
                    margin: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <div>
                        Sorry! We can't currently take online payments
                        </div>
                    <br />
                    <img
                src={sadflower}
                alt={"Sad Sunflower"}
                style={{ marginLeft: 10, width: "40%"}}
              />
                    <br />
                    <br />
                    <br />
                    <div>
                        Send us your pre-order details &amp; we'll be in touch!   
                    </div>
                    <br />
                    <br />
                    <Button
                        variant="outlined"
                        color="primary"
                        style={{textDecoration: "none"}}
                    > 
                        <Mailto
                            email='sunflxwerlittle@gmail.com'
                            headers={
                                { subject: 'Pre-Order',
                                  body: 'yo' }
                            }/>
                    </Button>
                </div>
            </Dialog>
        );
    }
}
const PreOrder = withRouter(connect(mapStateToProps)(PreOrderForm));
export default PreOrder;