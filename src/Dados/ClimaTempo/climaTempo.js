import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CssBaseline } from '@material-ui/core';
import Sol from '../../Arquivos/imagens/icones/45px/1.png';
import Lua from '../../Arquivos/imagens/icones/45px/1n.png';
import SolPouNuv from '../../Arquivos/imagens/icones/45px/2.png';
import LuaPouNuv from '../../Arquivos/imagens/icones/45px/2n.png';
import SolMuiNuv from '../../Arquivos/imagens/icones/45px/2r.png';
import LuaMuiNuv from '../../Arquivos/imagens/icones/45px/2rn.png';
import Chuva from '../../Arquivos/imagens/icones/45px/3.png';
import ChuvaNoite from '../../Arquivos/imagens/icones/45px/3n.png';
import Nublado from '../../Arquivos/imagens/icones/45px/3tm.png';
import SolChuva from '../../Arquivos/imagens/icones/45px/4.png';
import LuaChuva from '../../Arquivos/imagens/icones/45px/4n.png';
import SolMuiChuva from '../../Arquivos/imagens/icones/45px/4r.png';
import LuaMuiChuva from '../../Arquivos/imagens/icones/45px/4rn.png';
import SolChuvaRaio from '../../Arquivos/imagens/icones/45px/4t.png';
import LuaChuvaRaio from '../../Arquivos/imagens/icones/45px/4tn.png';
import MuitaChuva from '../../Arquivos/imagens/icones/45px/5.png';
import MuitaChuvaNoite from '../../Arquivos/imagens/icones/45px/5n.png';
import ChuvaRaio from '../../Arquivos/imagens/icones/45px/6.png';
import ChuvaRaioNoite from '../../Arquivos/imagens/icones/45px/6n.png';
import VentoDia from '../../Arquivos/imagens/icones/45px/7.png';
import VentoNoite from '../../Arquivos/imagens/icones/45px/7n.png';
import GraniDia from '../../Arquivos/imagens/icones/45px/8.png';
import GraniNoite from '../../Arquivos/imagens/icones/45px/8n.png';
import SolPN from '../../Arquivos/imagens/icones/45px/9.png';
import LuaPN from '../../Arquivos/imagens/icones/45px/9n.png';

const apiClimaTempo = ('https://apiadvisor.climatempo.com.br/api/v1/weather/locale/7961/current?token=28fc0556706e2e56cbaa5655e5d5360e');

const pageMeteo = () => {
    const url = '/cidadao/meteorologia';
    window.open(url, '_blank');
};

const useStyle = makeStyles(() => ({
    tipografiaDados: {
        color: '#ffffff',
    },
    tempCenter: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

export default function ClimaTempo() {

    const classes = useStyle();

    const [climaTempo, setClimaTempo] = React.useState([]);  

    React.useEffect(() => {
        climaTempoDados();
        async function climaTempoDados() {
            try {
                const reponse = await fetch(apiClimaTempo);
                const json = await reponse.json();
                setClimaTempo(json.data);
            } catch (error) {
                console.log('Desenvolvedor ocorreu este erro: ' + error);
            };
        };
    }, []);

    var icone = '';

    switch (climaTempo.icon) {
        case '1n': icone = Lua;
            break;
        case '2': icone = SolPouNuv;
            break;
        case '2n': icone = LuaPouNuv;
            break;
        case '2r': icone = SolMuiNuv;
            break;
        case '2rn': icone = LuaMuiNuv;
            break;
        case '3': icone = Chuva;
            break;
        case '3n': icone = ChuvaNoite;
            break;
        case '3tm': icone = Nublado;
            break;
        case '4': icone = SolChuva;
            break;
        case '4n': icone = LuaChuva;
            break;
        case '4r': icone = SolMuiChuva;
            break;
        case '4rn': icone = LuaMuiChuva;
            break;
        case '4t': icone = SolChuvaRaio;
            break;
        case '4tn': icone = LuaChuvaRaio;
            break;
        case '5': icone = MuitaChuva;
            break;
        case '5n': icone = MuitaChuvaNoite;
            break;
        case '6': icone = ChuvaRaio;
            break;
        case '6n': icone = ChuvaRaioNoite;
            break;
        case '7': icone = VentoDia;
            break;
        case '7n': icone = VentoNoite;
            break;
        case '8': icone = GraniDia;
            break;
        case '8n': icone = GraniNoite;
            break;
        case '9': icone = SolPN;
            break;
        case '9n': icone = LuaPN;
            break;
        default: icone = Sol;
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Typography
                gutterBottom
                className={classes.tipografiaDados}
                align='center'
                display='block'
                variant='body1'>
                <img alt='Icone do Tempo' onClick={pageMeteo} src={icone} className={classes.tempCenter} />
                {climaTempo.temperature}º
                </Typography>
        </React.Fragment>
    );
};