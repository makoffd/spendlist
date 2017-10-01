import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ConfirmationPopup extends React.Component {
    static displayName = 'ConfirmationPopup';
    static defaultProps = {
        onClose: () => {},
        onConfirm: () => {},
        title: 'Please confirm',
        open: false
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.onClose}
            />,
            <FlatButton
                label="Confirm"
                primary={true}
                onClick={this.props.onConfirm}
            />,
        ];

        return (
            <Dialog
                title={this.props.title}
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.props.onClose}
                >
                {this.props.children}
            </Dialog>
        );
    }
}
