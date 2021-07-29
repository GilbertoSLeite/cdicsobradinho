import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Link
} from '@material-ui/core';

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
        color: '#ffff'
    },
    link: {
        color: '#ffff',
        fontWeight: 'bold',
    }
}));

const responsivo = () => {
    const url = 'https://www.sebrae.com.br/sites/PortalSebrae/artigos/o-que-e-um-site-responsivo,4a6ad1eb00ad2410VgnVCM100000b272010aRCRD';
    window.open(url, '_blank');
};

export default function QuadroDados() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography
                align='center'
                variant='body1'
                className={classes.tipografia}
            >
                Quadros de Dados
            </Typography>
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                O Sistema é divididos em quadros, são três quadros por tela, contudo, todos são <Link onClick={responsivo} className={classes.link}>responsivos</Link>, fazendo com que a partir de um específico tamanho de tela, se tenha somente um quadro por tela, dando melhor condição de visibilidade as informações em tela.
            </Typography>
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                Os quadros são divididos por padrão em:
            </Typography>
            <Typography
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                1 - Recuperados;
            </Typography>
            <Typography
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                2 - Confirmados;
            </Typography>
            <Typography
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                3 - Mortes;
            </Typography>
            <Typography
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                4 - Monitorados;
            </Typography>
            <Typography
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                5 - Descartados;
            </Typography>
            <Typography
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                6 - Aguardando Resultado.
            </Typography>
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                Abaixo iremos falar sobre cada quadro.
            </Typography>
        </React.Fragment>
    )
}