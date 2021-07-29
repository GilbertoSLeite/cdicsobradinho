import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import UnidadeTriagem from './UnidadeTriagem/unidadeTriagem';
import HospitalReferencia from './UnidadeReferencia/unidadeReferencia';
import UnidadeRetaguardaNaoCovid from './UnidadeRetaguardaNC/unidadeRetaguardaNC';
import UnidadeRetaguardaCovid from './UnidadeRetaguardaCo/unidadeRetaguardaCo';

const useStyles = makeStyles(() => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
        padding: '0',
        backgroundColor: '#0a5d5e',
    },
}))

export default function Hospitais() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div
                className={classes.root}
            >
                <UnidadeTriagem />
                <HospitalReferencia />
                <UnidadeRetaguardaNaoCovid />
                <UnidadeRetaguardaCovid />
            </div>
        </React.Fragment>
    )
}