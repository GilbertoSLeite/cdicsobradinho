import React, { useRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Grid,
    Link
} from '@material-ui/core';
import ls from '../../../Arquivos/imagens/iconspng.png';
import Comecando from '../Comecando/Comecando';
import PrincipalPage from '../PrincipalPage/PrincipalPage';
import QuadroRecuperados from '../QuadroRecuperados/QuadroRecuperados';
import QuadroConfirmado from '../QuadroConfirmado/QuadroConfirmado';
import QuadroDados from '../QuadroDados/QuadroDados';
import QuadroObitos from '../QuadroMorte/QuadroMortes';
import QuadroMonitorados from '../QuadroMonitorado/QuadroMonitorados';
import QuadroDescartados from '../QuadroDescartados/QuadroDescartados';
import QuadroAguardando from '../QuadroAguardando/QuadroAguardando';
import TimelineCasos from '../TimeLineCasos/TimeLineCasos';
import MediaMovel from '../MediaMovel/mediaMovel';

const useStyles = makeStyles(() => ({
    media: {
        width: '250px',
        height: '250px',
        display: 'block',
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
    indice: {
        color: '#ffff',
        textDecoration: 'underline'
    }
}));

export default function HomeDoc() {

    const classes = useStyles();
    const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
    const comecando = useRef(null);
    const home = useRef(null);
    const quadroRec = useRef(null);
    const quadroCon = useRef(null);
    const quadroDados = useRef(null);
    const quadroMorte = useRef(null);
    const quadroMonitorado = useRef(null);
    const quadroDescartado = useRef(null);
    const quadroAguardando = useRef(null);
    const quadroTimeLine = useRef(null);
    const mediaMovel = useRef(null);

    return (
        <React.Fragment>
            <div>
                <img alt='ls' src={ls} className={classes.media} />
            </div>
            <Grid
                id="GridDocumentacaoSistema"
                container
                spacing={3}
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid item xs={12} sm={8}>
                    <Typography
                        align='center'
                        variant='h4'
                        className={classes.tipografia}
                    >
                        LS Consultoria & Sistemas LTDA
                    </Typography>
                    <Typography
                        paragraph
                        align='justify'
                        variant='body1'
                        className={classes.tipografiaText}
                    >
                        O Sistema de Combate a Doen??as Infectocontagiosas ?? um projeto que tem como objetivo cadastrar os dados de combate, a????es efetuatas pela gest??o e informar a popula????o de forma transparente os n??meros no munic??pio referente as doen??as infectocontagiosa.
                   </Typography>
                    <Typography
                        paragraph
                        align='justify'
                        variant='body1'
                        className={classes.tipografiaText}
                    >
                        No Sistema ?? poss??vel cadastrar as leis e as a????es referente as doen??as infectocontagiosas no munic??pio. Tamb??m ?? poss??vel informar a popula????o os dados referente as condi????es do hospital no munic??pio.
                    </Typography>
                    <Typography
                        align='center'
                        variant='h4'
                        className={classes.tipografia}
                    >
                        ??ndice
                    </Typography>
                    <Link className={classes.indice} onClick={() => scrollToRef(comecando)}>1 - Come??ando</Link>
                    <div />
                    <Link className={classes.indice} onClick={() => scrollToRef(home)}>2 - Home</Link>
                    <div />
                    <Link className={classes.indice} onClick={() => scrollToRef(quadroDados)}>2.1 - Quadro de Dados</Link>
                    <div />
                    <Link className={classes.indice} onClick={() => scrollToRef(quadroRec)}>2.2 - Quadro de Recuperados</Link>
                    <div />
                    <Link className={classes.indice} onClick={() => scrollToRef(quadroCon)}>2.3 - Quadro de Confirmados</Link>
                    <div />
                    <Link className={classes.indice} onClick={() => scrollToRef(quadroMorte)}>2.4 - Quadro de ??bitos</Link>
                    <div />
                    <Link className={classes.indice} onClick={() => scrollToRef(quadroMonitorado)}>2.5 - Quadro de Monitorados</Link>
                    <div />
                    <Link className={classes.indice} onClick={() => scrollToRef(quadroDescartado)}>2.6 - Quadro de Descartados</Link>
                    <div />
                    <Link className={classes.indice} onClick={() => scrollToRef(quadroAguardando)}>2.7 - Quadro de Aguardando Resultado</Link>
                    <div />
                    <Link className={classes.indice} onClick={() => scrollToRef(quadroTimeLine)}>2.8 - Timeline dos Casos(Gr??fico)</Link>
                    <div />
                    <Link className={classes.indice} onClick={() => scrollToRef(mediaMovel)}>2.9 - Gr??fico de M??dia M??vel</Link>
                    <div ref={comecando}><Comecando /></div>
                    <div ref={home}><PrincipalPage /></div>
                    <div ref={quadroDados}><QuadroDados /></div>
                    <div ref={quadroRec}><QuadroRecuperados /></div>
                    <div ref={quadroCon}><QuadroConfirmado /></div>
                    <div ref={quadroMorte}><QuadroObitos /></div>
                    <div ref={quadroMonitorado}><QuadroMonitorados /></div>
                    <div ref={quadroDescartado}><QuadroDescartados /></div>
                    <div ref={quadroAguardando}><QuadroAguardando /></div>
                    <div ref={quadroTimeLine}><TimelineCasos /></div>
                    <div ref={mediaMovel}><MediaMovel /></div>
                </Grid>
            </Grid>
        </React.Fragment>
    );

}