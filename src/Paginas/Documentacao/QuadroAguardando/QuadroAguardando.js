import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography
} from '@material-ui/core';
import Aguardando from '../../../Arquivos/imagens/documentacao/Quadro_Aguardando.png';

const useStyles = makeStyles(() => ({
    textMedia: {
        display: 'block',
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

export default function QuadroAguardando() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography
                align='center'
                variant='body1'
                className={classes.tipografia}
            >
                Quadros de Aguardando Resultado
            </Typography>
            <img alt='Quadro de  da Covid' src={Aguardando} className={classes.textMedia} />
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
                O Quadro de Aguardando Resultado, informa o registro no momento de pacientes que se encontram aguardando o retorno do resultado laboratorial da Doença Infectocontagiosa pesquisada.
                Ao receber o retorno do laboratório a Secretária Municipal de Saúde do município irá retirar o registro do paciente de Aguardando Resultado e ele irá para Confirmado ou Descartado.
            </Typography>
            <Typography paragraph></Typography>
        </React.Fragment>
    );
};