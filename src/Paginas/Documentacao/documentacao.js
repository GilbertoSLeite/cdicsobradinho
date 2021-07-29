import { CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
//import Comecando from './Comecando/Comecando';
import HomeDoc from './HomeDoc/HomeDoc';

const useStyles = makeStyles(() => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
        padding: '0',
        backgroundColor: '#0a5d5e',
    },
}));

export default function Documentacao() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div
                className={classes.root}
            >
                <HomeDoc />
            </div>
        </React.Fragment>
    )
}//