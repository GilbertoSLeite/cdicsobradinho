import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography
} from '@material-ui/core';
import Confirmado from '../../../Arquivos/imagens/documentacao/Quadro_Confirmado.png';

const useStyles = makeStyles(() => ({
    textMedia: {
        display: 'block',
        maxWidth: '800px',
        maxHeight: '500px',
        width: 'auto',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    tipografia: {
        color: "#152445",
        fontWeight: 'bold'
    },
    tipografiaText: {
        color: '#ffff',
    }
}));

export default function QuadroConfirmado() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography
                align='center'
                variant='body1'
                className={classes.tipografia}
            >
                Quadros de Confirmados
            </Typography>
            <img alt='Quadro de Confirmado da Covid' src={Confirmado} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                A fim de não nos tornamos repetitivos neste documento, será apresentado somente o que há de diferente.
            </Typography>
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                O Quadro de Confirmados, é representado através da numeração total de casos já confirmados no município e a apresentação gráfica é no modelo de barra para exibição da evolução dos casos no município.
            </Typography>
            <Typography paragraph></Typography>
        </React.Fragment>
    );
};