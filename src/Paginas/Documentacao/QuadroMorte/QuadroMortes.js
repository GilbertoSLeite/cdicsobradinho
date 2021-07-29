import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography
} from '@material-ui/core';
import Obitos from '../../../Arquivos/imagens/documentacao/Quadro_Obito.png';

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

export default function QuadroObitos() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography
                align='center'
                variant='body1'
                className={classes.tipografia}
            >
                Quadros de Óbitos
            </Typography>
            <img alt='Quadro de Óbitos da Covid' src={Obitos} className={classes.textMedia} />
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
                O Quadro de Óbitos, é representado através da numeração total de casos de óbitos já confirmado no município e a apresentação gráfica utilizada neste modelo é o modelo de gráfico em barra para exibição da evolução dos casos no município.
            </Typography>
            <Typography paragraph></Typography>
        </React.Fragment>
    );
};