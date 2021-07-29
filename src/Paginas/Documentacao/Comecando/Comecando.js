import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    tipografia: {
        color: "#152445",
        fontWeight: 'bold'
    },
    tipografiaText: {
        color: '#ffff'
    }
}));

export default function Comecando() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography
                align='center'
                variant='h5'
                className={classes.tipografia}
            >
                Começando
            </Typography>
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                Neste tutorial você irá aprender a utilizar e também conhecer as funcionalidades do Sistema de Combate a Doenças Infectocontagiosa.
            </Typography>
        </React.Fragment>
    );
};
