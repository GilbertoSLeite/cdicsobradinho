import React from 'react';
import { createBrowserHistory } from "history";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import amargosa from '../../Arquivos/imagens/bandeira_ama.png';
import ConversaIncial from '../Chatbot/Conversas/inicioConversa';
import BoletimResumido from '../Chatbot/Conversas/boletimResumido';
import UsarMascara from '../Chatbot/Conversas/usarMascara';
import PlanosMunicipais from '../Chatbot/Conversas/planosMunicipais';
import AndroidRounded from '@material-ui/icons/AndroidRounded';
import SouIdoso from './Conversas/souIdoso';
import Aluno from './Conversas/aluno';
import PaiAluno from './Conversas/paiAluno';
import Barreira from './Conversas/barreiraMunicipal';
import Penalidades from './Conversas/penalidades';
import CombateFakeNews from './Conversas/combateFake';
import DiferenteDoencaInfecto from './Conversas/duvidasDengueZikaChikungunha';
import TransmissaoDoencaInfecto from './Conversas/transmissaoDengueKikaChikungunha';
import EvitarDoencaInfecto from './Conversas/evitarDengueKizaChikungunha';
import ComplicacaoDoencaInfecto from './Conversas/tipoComplicacaoDoenca';
import EliminarDoencaInfecto from './Conversas/eliminarDengueZikaChikungunha';
import VacinaBrasil from './Conversas/vacinaBrasil';
import VacinaAmargosa from './Conversas/vacinaAmargosa';

const hist = createBrowserHistory();

const histloca = hist.location.pathname;
var chatOpen = (histloca === '/cidadao/chatbotAmargosa' ? true : false);

const tema = {
    background: '#0a5d5e',
    fontFamily: "Roboto",
    headerBgColor: '#152445',
    headerFontColor: '#ffffff',
    headerFontSize: '18px',
    botBubbleColor: '#152445',
    botFontSize: '20px',
    botFontColor: '#ffffff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a bold'
};

const estiloIconeFlutuante = {
    color: 'white',
    background: '#0a5d5e',
    width: '40px',
    height: '40px',
    top: 120,
};

const footerEstyle = {
    color: 'black',
    background: 'white',
};

const contentEstilo = {
    color: 'black',
    fontWeight: 'bold'
}

export default function Chatbot() {

    const conversa = [
        {
            id: 'inicioconversa',
            component: < ConversaIncial />,
            trigger: 'opcoesInicio'
        },
        {
            id: 'opcoesInicio',
            options: [
                {
                    value: 'covid',
                    label: 'Informações Sobre a Covid-19',
                    trigger: 'covid'
                },
                {
                    value: 'denguezikachikungunha',
                    label: 'Informações Sobre Dengue, Zika e Chikungunha.',
                    trigger: 'dengueZikaChik'
                },
                {
                    value: 'vacinacao',
                    label: 'Informação Sobre a Vacinação.',
                    trigger: 'vacina'
                },
                {
                    value: 'contigente',
                    label: 'Plano de contigenciamento para Reabertura',
                    component: <PlanosMunicipais />,
                    trigger: 'fimInicio',
                },
            ],
        },
        {
            id: 'covid',
            options: [
                {
                    value: 'boletim',
                    label: 'Últimas informações sobre a COVID-19',
                    component: <BoletimResumido />,
                    trigger: 'fimInicio'
                },
                {
                    value: 'usarMascara',
                    label: 'Como usar a máscara?',
                    component: <UsarMascara />,
                    trigger: 'fimInicio',
                },
                {
                    value: 'idoso',
                    label: 'Sou Idoso!',
                    component: <SouIdoso />,
                    trigger: 'fimInicio',
                },
                {
                    value: 'escola',
                    label: 'Sou Aluno',
                    component: <Aluno />,
                    trigger: 'fimInicio',
                },
                {
                    value: 'paiAulo',
                    label: 'Sou Pai de Aluno',
                    component: <PaiAluno />,
                    trigger: 'fimInicio',
                },
                {
                    value: 'barreira',
                    label: 'Barreira Municipal',
                    component: <Barreira />,
                    trigger: 'fimInicio',
                },
                {
                    value: 'penalidade',
                    label: 'Penalidades',
                    component: <Penalidades />,
                    trigger: 'fimInicio',
                },
                {
                    value: 'fakenews',
                    label: 'Combate Fake News',
                    component: <CombateFakeNews />,
                    trigger: 'fimInicio',
                },
            ]
        },
        {
            id: 'dengueZikaChik',
            options: [
                {
                    value: 'duvidaDengueZikaChik',
                    label: 'Diferença entre Dengue, Zika e Chikungunha.',
                    component: <DiferenteDoencaInfecto />,
                    trigger: 'fimInicio',
                },
                {
                    value: 'transmissaoDengueKizaChikungunha',
                    label: 'Forma de Transmissão da Dengue, Zika e Chikungunha.',
                    component: <TransmissaoDoencaInfecto />,
                    trigger: 'fimInicio',
                },
                {
                    value: 'evitarDengueKizaChikungunha',
                    label: 'Evitar a Dengue, Zika e Chikungunha.',
                    component: <EvitarDoencaInfecto />,
                    trigger: 'fimInicio',
                },
                {
                    value: 'complicacaoDengueKizaChikungunha',
                    label: 'Complicações da Dengue, Zika e Chikungunha.',
                    component: <ComplicacaoDoencaInfecto />,
                    trigger: 'fimInicio',
                },
                {
                    value: 'eliminarDengueKizaChikungunha',
                    label: 'Eliminar a Dengue, Zika e Chikungunha.',
                    component: <EliminarDoencaInfecto />,
                    trigger: 'fimInicio',
                }
            ]
        },
        {
            id: 'vacina',
            options: [
                {
                    value: 'vacinaBrasil',
                    label: 'Informação de Vacinados no Brasil',
                    component: <VacinaBrasil />,
                    trigger: 'fimInicio',
                },
                {
                    value: 'vacinaAmargosa',
                    label: 'Vacinação em Amargosa',
                    component: <VacinaAmargosa />,
                    trigger: 'fimInicio',
                },
            ]
        },
        {
            id: 'fimInicio',
            options: [
                {
                    value: 'inicioFim',
                    label: 'Vamos retornar para o início!',
                    trigger: 'opcoesInicio'
                },
                {
                    value: 'fim',
                    label: 'Vamos encerrar por aqui, até a próxima!',
                    end: true,
                }
            ]
        }
    ];

    return (
        <ThemeProvider theme={tema}>
            <ChatBot
                floatingIcon={<AndroidRounded />}
                floatingStyle={estiloIconeFlutuante}
                enableMobileAutoFocus={true}
                floating={true}
                contentStyle={contentEstilo}
                footerStyle={footerEstyle}
                opened={chatOpen}
                headerTitle='Prefeitura Municipal de Amargosa'
                placeholder="Digite aqui o seu texto"
                botAvatar={amargosa}
                steps={conversa}
            />
        </ThemeProvider>
    );
};

