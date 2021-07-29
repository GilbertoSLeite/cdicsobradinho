import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
        padding: '0',
        backgroundColor: '#0a5d5e',
    },
    tipografia: {
        color: '#4a8099'
    },
    textMedia: {
        width: '400px',
        height: '400px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

export default function BoletimBahia() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div
                className={classes.root}
            >
                <Typography
                    align='center'
                    variant='h6'
                    className={classes.tipografia}
                >
                    1FA - One Factor Authentication
            </Typography>
                <Typography
                    align='center'
                    variant='h6'
                    className={classes.tipografia}
                >
                    2FA - Two Factor Authentication
            </Typography>
            </div>
        </React.Fragment>
    );
}
