import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography
} from '@material-ui/core';
import MediaMovelConf from '../../../Arquivos/imagens/documentacao/mediaMovelConf.png';
import MediaMovelObito from '../../../Arquivos/imagens/documentacao/mediaMovelObito.png';

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

export default function MediaMovel() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography
                align='center'
                variant='body1'
                className={classes.tipografia}
            >
                Média Móvel
            </Typography>
            <img alt='Gráfico de Timeline da Covid' src={MediaMovelConf} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                O Gráfico de Média, como já diz o nome, serve para exibir as informações de média móvel dos últimos 7 dias.
            </Typography>
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                A média móvel é um estimador calculado através de amostras sequencias de algum tipo de dados, no nosso caso, os números cadastrados referente ao casos confirmados e de óbitos. Para calcular a média móvel, basta somar o número de casos ou mortes do dia com o dos 6 dias anteriores.
                </Typography>
            <img alt='Gráfico de Timeline da Covid' src={MediaMovelObito} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                Através da análise da média móvel pode-se avaliar se os registros estão aumentando, diminuindo ou estáveis.
            </Typography>
            <Typography paragraph></Typography>
        </React.Fragment>
    );
};