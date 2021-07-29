import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography
} from '@material-ui/core';
import Descartados from '../../../Arquivos/imagens/documentacao/Quadro_Descartados.png';

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

export default function QuadroDescartados() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography
                align='center'
                variant='body1'
                className={classes.tipografia}
            >
                Quadros de Descartados
            </Typography>
            <img alt='Quadro de  da Covid' src={Descartados} className={classes.textMedia} />
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
                O Quadro de Descartados, é representado através da numeração de casos que foram descartados pela Secretária de Saúde do Munícipio.
                O paciente apresentou os sintomas da Doença Infectocontagiosa em questão, foi efetuado o teste no laboratorial no paciente e o resultado deu negativo para o Doença Infectocontagiosa. Os dados são exibidos em gráfico de barra lateral a fim de mostrar a evolução dos casos no municipio.
            </Typography>
            <Typography paragraph></Typography>
        </React.Fragment>
    );
};