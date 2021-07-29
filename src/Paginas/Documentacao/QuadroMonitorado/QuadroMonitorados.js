import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography
} from '@material-ui/core';
import Monitorados from '../../../Arquivos/imagens/documentacao/Quadro_Monitorado.png';

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

export default function QuadroMonitorados() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography
                align='center'
                variant='body1'
                className={classes.tipografia}
            >
                Quadros de Monitorados
            </Typography>
            <img alt='Quadro de  da Covid' src={Monitorados} className={classes.textMedia} />
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
                O Quadro de Monitorados, é representado através da numeração de casos que se encontra em monitoramento pela Secretária de Saúde do Munícipio.
                O monitoramente se dá quando o paciente vai até ao centro de atendimento especializado e se encontram sintomáticos(<i>Normalmente são pacientes com febre superior ou igual a 37.8° e/ou algum outro sintomas respiratório como Tosse, Falta de Ar, Fagida e outros sintomas.</i>) ou não(<i>Assintomáticos que esteve com algum paciente que foi confirmado laboratorialmente a infecção pelo novo Coronavírus.</i>) e que se encontram em isolamento domiciliar.
            </Typography>
            <Typography paragraph></Typography>
        </React.Fragment>
    );
};