import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import mascara from '../../../Arquivos/imagens/comoUsarMascara.png';

const useStyles = makeStyles(() => ({
    card: {
        backgroundColor: '#152445',
        opacity: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        //display: 'block'
    },
    tipografia: {
        color: "#ffffff",
        fontFamily: 'Times New Roman',
    },
    media: {
        width: 500,
        height: 450,
    },
}));

export default function UsarMascara() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <img alt='Como usar a máscara' src={mascara} className={classes.media} />
        </React.Fragment>
    )
}