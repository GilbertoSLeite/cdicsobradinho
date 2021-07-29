import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography
} from '@material-ui/core';
import TimeLine from '../../../Arquivos/imagens/documentacao/timeline.png';
import TimeLineGif from '../../../Arquivos/imagens/documentacao/timeline.gif';
import TimeLineQuadros from '../../../Arquivos/imagens/documentacao/timelineQuadros.png';
import TimelineQuadrosGif from '../../../Arquivos/imagens/documentacao/timelineQuadros.gif';
import TimeLineCel from '../../../Arquivos/imagens/documentacao/timelineCel.png';

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
                Timeline dos Casos - Gráfico
            </Typography>
            <img alt='Gráfico de Timeline da Covid' src={TimeLine} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                O Gráfico de Timeline é utilizado para reunir todos os dados registrados em um único local e dando a possibilidade do usuário fazer comparações desde em um espaço de tempo, como entre dados registrados. Vamos exibir nas imagens a seguir as funcionalidades reunida no gráfico de Timeline de Casos.
            </Typography>
            <img alt='Gráfico de Timeline da Covid' src={TimeLineGif} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                A função de <i>Slide</i> no Timeline do Gráfico, serve para o usuário efetuar comparação desde a quantidade de total de dados, como entre quantidades menores. Pode-se fazer comparações desde 0 a 100 dados cadastrados, como entre 0 a 10 dados cadastrais, serve para o usuário ou gestão poder avaliar o nível de crescimento ou estabilidade dos casos em uma faixa de tempo.
            </Typography>
            <img alt='Gráfico de Timeline da Covid' src={TimeLineQuadros} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                A função de <i>marcar</i> ou <i>desmarcar</i> os quadros e a sua exibição no gráfico geral serve para avaliar ou comparar dados entre 2 ou mais resultados. Também pode usar a funcionalidade do <i>Slide</i> junto com as escolhas dos quadros.
            </Typography>
            <img alt='Gráfico de Timeline da Covid' src={TimelineQuadrosGif} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                Como exibido na imagem acima, são diversas funcionalidades que pode ser usada no gráfico.
            </Typography>
            <img alt='Gráfico de Timeline da Covid' src={TimeLineCel} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                Todas as funcionalidades aqui exibidas, podem ser também executadas pelo <i>mobile</i>, ou seja, pelo celular, a diferença estará que o modelo de exibição dos gráfico será em <b><i>barras</i></b>.
            </Typography>
            <Typography paragraph></Typography>
        </React.Fragment>
    );
};