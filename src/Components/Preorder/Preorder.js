import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import { showPreDialog } from "../../Redux/Actions";
import TextField from "@material-ui/core/TextField";

const mapStateToProps = state => {
    return { open: state.showPreDialog };
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
                <label>
                    Unfortunately we can't currently take online payments. Please enter your email &amp; hir Pr-Order to notify us of what you'd like to order &amp; we'll be in touch!
                </label>
                <TextField
                    placeholder="Email"
                    onChange={e => {
                        //   this.props.dispatch(customerName(e.target.value));
                    }}
                />
                <button onClick={this.handleSubmit}>
                    Pre-Order
                </button>>
            </Dialog>
        );
    }
}
const PreOrder = withRouter(connect(mapStateToProps)(PreOrderForm));
export default PreOrder;