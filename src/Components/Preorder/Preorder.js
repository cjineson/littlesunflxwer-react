import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
// import { showPreDialog, customerEmail } from "../../Redux/Actions";
import { showPreDialog } from "../../Redux/Actions";
import TextField from "@material-ui/core/TextField";
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";

const mapStateToProps = state => {
    return { open: state.showPreDialog, customerEmail: state.customerEmail };
};

class PreOrderForm extends React.Component {

    handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        console.log(this.props);
    };

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
                    <br />
                    <div>
                        Please enter your email &amp; we'll be in touch
                        </div>
                    <br />
                    <br />
                    <TextField
                        placeholder="Email"
                        onChange={e => {
                            // painful redux wrangling here, may be unnecessary
                            // this.props.dispatch(customerEmail(e.target.value));
                        }}
                    />
                    <br />
                    <br />
                    <br />
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                            this.props.dispatch(showPreDialog(false));
                            this.handleSubmit();
                        }}
                    >
                        Pre-Order
                        </Button>
                </div>
            </Dialog>
        );
    }
}
const PreOrder = withRouter(connect(mapStateToProps)(PreOrderForm));
export default PreOrder;