import React from 'react';
import {
    Snackbar
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

export default function Snack(props) {

    const { open, close, textSnack, handleClose } = props;

    return (
        <div>
            <Snackbar
                open={open}
                anchorOrigin={
                    {
                        horizontal: 'center',
                        vertical: 'top'
                    }
                }
                autoHideDuration={3500}
                onClose={close}
            >
                <Alert
                    severity="success"
                    action={handleClose}
                >
                    {textSnack}
                </Alert>
            </Snackbar>
        </div>
    );
};

Snack.propTypes = {
    open: PropTypes.bool.isRequired,
    textSnack: PropTypes.string.isRequired,
    handleClose: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired
};