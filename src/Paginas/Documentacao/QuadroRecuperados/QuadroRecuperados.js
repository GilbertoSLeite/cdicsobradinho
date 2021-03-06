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
                O Quadro de Recuperados informa os dados referente aos que foram infectados pela doen??a infectocontagiosa exibida em tela e, que foram recuperados(<i>possivelmente curado</i>) da doen??a.
            </Typography>
            <img alt='Quadro de Recuperados da Covid Icone Informa????o' src={RecuperadosInfo} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                No Quadro de Recuperados tem um ??cone, que tamb??m ?? um bot??o que ao ser clicado(<i>selecionado</i>) abrirar um <i>snackbar</i> ou <i>bal??o de informa????o</i> com a explica????o sobre o que est?? sendo exibido no quadro escolhido. Todos os quadros que indicar este ??cone ter?? essa op????o de informa????o.
            </Typography>
            <img alt='Tipo Doen??a' src={SnackbarInfo} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                Refere-se a quantidade total de recuperados. Em alguns quadros far?? refer??ncia a ??ltima informa????o cadastrada.
            </Typography>
            <img alt='Tipo Doen??a' src={RecuperadosTotalReg} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                Refere-se a quantidade de recuperado tendo como par??metro a ??ltima data de cadastro e a data atual.
            </Typography>
            <img alt='Tipo Doen??a' src={RecuperadosRegistro} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                Os <i>emotions</i> que vem do ingl??s <i>emo????es</i> faz refer??ncia as principais informa????oes que s??o confirmados de infec????o, ??bitos confirmados pela infec????o e os recuperados da infec????o. Cada um tem uma cor para chamar aten????o do usu??rio e tentar informar de forma mais amistosa.
            </Typography>
            <img alt='Tipo Doen??a' src={RecuperadosEmotion} className={classes.textMedia} />
            <Typography
                paragraph
                align='justify'
                variant='body1'
                className={classes.tipografiaText}
            >
                O Gr??fico que tem a estrutua em <i>semi c??rculo</i> que tem uma anima????o inicial, ou seja, ao abrir a tela ou quando recarrega a p??gina<i>(Quando aperta F5 do teclado ou puxa a tela do do celular para baixo)</i>. O Gr??fico, assim como os <i>emotions</i> s??o dividido em tr??s e com a mesma defini????o de cor para cada tipo de informa????o, que ??:
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
                    fontSize='small' /> ??bitos - Vermelho;
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
            <img alt='Tipo Doen??a' src={RecuperadosGrafico} className={classes.textMedia} />
            <Typography paragraph></Typography>
        </React.Fragment>
    );
};