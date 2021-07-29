import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography
} from '@material-ui/core';
import {
    SentimentSatisfied,
    SentimentVeryDissatisfied,
    SentimentVerySatisfied
} from '@material-ui/icons';
import Recuperados from '../../../Arquivos/imagens/documentacao/Quadro_Recuperado.png';
import RecuperadosInfo from '../../../Arquivos/imagens/documentacao/Quadro_Recuperado_informarcao.png';
import RecuperadosTotalReg from '../../../Arquivos/imagens/documentacao/Quadro_Recuperado_total_registro.png';
import RecuperadosRegistro from '../../../Arquivos/imagens/documentacao/Quadro_Recuperado_ultimo_registro.png';
import RecuperadosEmotion from '../../../Arquivos/imagens/documentacao/Quadro_Recuperado_emotions.png';
import RecuperadosGrafico from '../../../Arquivos/imagens/documentacao/Quadro_Recuperado_grafico.png';
import SnackbarInfo from '../../../Arquivos/imagens/documentacao/snackbar_info.png';

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
    emojiPeopleCon: {
        color: '#fbfa07',
        fontWeight: 'bold',
    },
    emojiPeopleMor: {
        color: '#fb0707',
        fontWeight: 'bold',
    },
    emojiPeopleRec: {
        color: '#00a63d',
        fontWeight: 'bold',
    },
}));

export default function QuadroRecuperados() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography
                align='center'
                variant='body1'
                className={classes.tipografia}
            >
                Quadros de Recuperados
            </Typography>
            <img alt='Quadro de Recuperados da Covid' src={Recuperados} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                O Quadro de Recuperados informa os dados referente aos que foram infectados pela doença infectocontagiosa exibida em tela e, que foram recuperados(<i>possivelmente curado</i>) da doença.
            </Typography>
            <img alt='Quadro de Recuperados da Covid Icone Informação' src={RecuperadosInfo} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                No Quadro de Recuperados tem um ícone, que também é um botão que ao ser clicado(<i>selecionado</i>) abrirar um <i>snackbar</i> ou <i>balão de informação</i> com a explicação sobre o que está sendo exibido no quadro escolhido. Todos os quadros que indicar este ícone terá essa opção de informação.
            </Typography>
            <img alt='Tipo Doença' src={SnackbarInfo} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                Refere-se a quantidade total de recuperados. Em alguns quadros fará referência a última informação cadastrada.
            </Typography>
            <img alt='Tipo Doença' src={RecuperadosTotalReg} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                Refere-se a quantidade de recuperado tendo como parâmetro a última data de cadastro e a data atual.
            </Typography>
            <img alt='Tipo Doença' src={RecuperadosRegistro} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                Os <i>emotions</i> que vem do inglês <i>emoções</i> faz referência as principais informaçãoes que são confirmados de infecção, óbitos confirmados pela infecção e os recuperados da infecção. Cada um tem uma cor para chamar atenção do usuário e tentar informar de forma mais amistosa.
            </Typography>
            <img alt='Tipo Doença' src={RecuperadosEmotion} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                O Gráfico que tem a estrutua em <i>semi círculo</i> que tem uma animação inicial, ou seja, ao abrir a tela ou quando recarrega a página<i>(Quando aperta F5 do teclado ou puxa a tela do do celular para baixo)</i>. O Gráfico, assim como os <i>emotions</i> são dividido em três e com a mesma definição de cor para cada tipo de informação, que é:
            </Typography>
            <Typography
                align='justify'
                variant='body1'
                className={classes.emojiPeopleCon}
            >
                1 - <SentimentSatisfied className={classes.emojiPeopleCon} fontSize='small' /> Confirmado Infectado - Amarelo;
            </Typography>
            <Typography
                align='justify'
                variant='body1'
                className={classes.emojiPeopleMor}
            >
                2 - <SentimentVeryDissatisfied
                    className={classes.emojiPeopleMor}
                    fontSize='small' /> Óbitos - Vermelho;
            </Typography>
            <Typography
                align='justify'
                variant='body1'
                className={classes.emojiPeopleRec}
            >
                3 - <SentimentVerySatisfied
                    className={classes.emojiPeopleRec}
                    fontSize='small' /> Recuperados - Verde.
            </Typography>
            <img alt='Tipo Doença' src={RecuperadosGrafico} className={classes.textMedia} />
            <Typography paragraph></Typography>
        </React.Fragment>
    );
};