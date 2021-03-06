import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Slide,
    Link
} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmojiFoodBeverage from '@material-ui/icons/EmojiFoodBeverage';
import Academia from '@material-ui/icons/FitnessCenter';
import PictureAsPdfOutlined from '@material-ui/icons/PictureAsPdfOutlined';
import InsertDriveFileOutlined from '@material-ui/icons/InsertDriveFileOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        fontWeight: 'bold',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icones: {
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PlanosMunicipais() {

    const classes = useStyles();

    const [expandirtexto, setExpadirTexto] = React.useState(false);
    const [modal, setModal] = React.useState(false);
    const [modalAca, setModalAca] = React.useState(false);

    const handleExpadirTexto = (painel) => (event, isexpandirtexto) => {
        setExpadirTexto(isexpandirtexto ? painel : false);
    };

    function abrirModal() {
        setModal(true);
    };

    function fecharModal() {
        setModal(false);
    };

    function opeModalAca() {
        setModalAca(true);
    };

    function fecharAcaModal() {
        setModalAca(false);
    };

    function openDOCX() {
        var url = 'https://amargosa.ba.gov.br/wp-content/uploads/sites/128/2020/09/FORMUL%C3%81RIO-PLANO-DE-CONTINGENCIAMENTO-REABERTURA-GRADUAL-E-SEGURA-1.docx';
        window.open(url, '_blank');
    }

    function abrirSim() {
        var url = 'http://sim.amargosa.ba.gov.br/login'
        window.open(url, '_blank');
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Accordion expanded={expandirtexto === 'painel1'} onChange={handleExpadirTexto('painel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel1bh-content"
                        id="painel1bh-header"
                    >
                        <Typography className={classes.heading}>1?? Introdu????o</Typography>
                        <Typography className={classes.secondaryHeading}>Informa????o sobre o PMC</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>Diante da Emerg??ncia de Sa??de P??blica do novo coronav??rus (SARS CoV2) e com base nas informa????es e recomenda????es disponibilizadas pela Organiza????o Mundial de Sa??de (OMS) e Minist??rio da Sa??de (MS), a Vigil??ncia Sanit??ria de Amargosa (VISA) apresenta o Plano Municipal de Contingenciamento para reabertura gradual e segura do com??rcio (PMC). O cen??rio atual e as constantes atualiza????es realizadas pela OMS e MS, fazem deste plano, um documento sujeito a ajustes cont??nuos.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>O documento tem como objetivo instrumentalizar os estabelecimentos comerciais e de servi??os para implementa????o de a????es pertinentes e necess??rias, capazes de reduzir complica????es e danos acarretados pelo novo coronav??rus. O PMC vai definir as responsabilidades de todos os envolvidos nas atividades consideradas n??o essenciais. Os estabelecimentos dever??o respeitar protocolos sanit??rios de higiene, de conviv??ncia e de distanciamento social voltadas ao combate da Covid-19.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Os segmentos do com??rcio ser??o liberados de forma gradual, a partir da avalia????o de risco de cada setor. A libera????o para o funcionamento ser?? fornecida de forma individual e ap??s parecer t??cnico da VISA. Cada estabelecimento dever?? apresentar a este ??rg??o um plano de contingenciamento que ser?? analisado e ap??s sua aprova????o passar?? por inspe????o in loco.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>O cen??rio epidemiol??gico ser?? reavaliado a cada 14 dias, e vai pautar a tomada de decis??es a cerca da flexibiliza????o ou intensifica????o dos protocolos sanit??rios. A suspens??o parcial ou total do funcionamento das atividades ficar?? a cargo da Prefeitura Municipal de Amargosa (PMA), com base nas informa????es t??cnicas da Secretaria de Sa??de (SESAU).</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>O protocolo de reabertura dos servi??os n??o essenciais est?? condicionado a avalia????es dos seguintes indicadores epidemiol??gicos:</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>1. Percentual de ocupa????o de leitos de UTI na Macro leste (menor 70 porcentos);</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>2. ??ndice de contamina????o do munic??pio (menor que 1 durante 14 dias);</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>3. Percentual de crescimento de casos (m??dia m??vel menor que 8 porcentos, durante 14 dias);</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>4. Percentual de crescimento di??rio (menor que ou igual 6 porcentos);</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>5. N??mero absoluto de ??bitos maior que ou igual a 2;</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>A libera????o completa de todos os setores estar?? condicionada ?? evolu????o da epidemia e essa avalia????o ser?? realizada pela SESAU, a partir  da an??lise de indicadores.</Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel2'} onChange={handleExpadirTexto('painel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel2bh-content"
                        id="painel2bh-header"
                    >
                        <Typography className={classes.heading}>2?? Educa????o Continuada e Comunica????o</Typography>
                        <Typography className={classes.secondaryHeading}>Compromisso da empresa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>
                                Esta empresa se compromete a realizar treinamentos (antes do reinicio das atividades e periodicamente, a fim de refor??ar as medidas de seguran??a) e disponibilizar material informativo que promova a orienta????o dos funcion??rios a respeito do COVID-19 (identifica????o dos sintomas, necessidade do uso de m??scaras e forma correta de utiliza????o, uso correto de luvas, necessidade da higieniza????o das m??os e forma correta de faz??-la, no????es b??sicas de higiene e protocolos de limpeza e desinfec????o de ambientes e equipamentos e a ado????o das boas pr??ticas).
                        </Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>
                                <b>
                                    1. Metodologia aplicada para o treinamento: (ex: reuni??o, palestra, cursos online);
                            </b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>
                                <b>
                                    2. Data da realiza????o do treinamento;
                                </b>
                            </Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>
                                <b>
                                    3. Lista de frequ??ncia do treinamento (anexar c??pia da lista ao plano);
                                </b>
                            </Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>
                                Como forma de orienta????o a clientes e funcion??rios acerca das medidas permanentes para evitar a propaga????o do coronav??rus, ?? obrigat??ria a fixa????o de cartazes/baners com informa????es sanit??rias b??sicas sobre o COVID-19 (informa????es gerais acerca dos sintomas da doen??a, da obrigatoriedade do uso de m??scaras, do distanciamento f??sico necess??rio, n??mero de pessoas permitidas nos diversos ambientes, da marca????o no piso, da higieniza????o das m??os e das medidas recomendadas para a entrada da mercadoria no ambiente domiciliar e instru????es sobre como utilizar e higienizar e/ou descartar corretamente as m??scaras.), em pontos estrat??gicos e de f??cil visualiza????o, na entrada e em todos os setores do estabelecimento;
                            </Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>
                                <b>
                                    4. Encaminhar modelo do material (cartazes/baners) utilizado (anexar ao plano).
                                </b>
                            </Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel3'} onChange={handleExpadirTexto('painel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel3bh-content"
                        id="painel3bh-header"
                    >
                        <Typography className={classes.heading}>3?? Distanciamento Social no Trabalho</Typography>
                        <Typography className={classes.secondaryHeading}>Compromisso da empresa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>Esta empresa ajustar?? ou modificar?? o seu layout, atrav??s do uso de barreiras f??sicas, fechamento de espa??os de conviv??ncia, mudan??as no fluxo de refeit??rios, salas de descanso, redu????o do n??mero de mesas e cadeiras nesses ambientes e afastamento de equipamentos.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Sempre que poss??vel, esta empresa privilegiar?? o uso do home office (principalmente para funcion??rios que est??o no grupo de risco), vendas remotas, delivery, reuni??es por teleconfer??ncia, escalonamento de funcion??rios e hor??rios espec??ficos para atender o p??blico de risco. Em hip??tese nenhuma vamos incentivar atividades promocionais que possam causar aglomera????es.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Para permitir a rastreabilidade e dificultar a possibilidade de cont??gio entre funcion??rios, essa empresa criar?? zonas para separ??-los em grupos de trabalhos isolados.</Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel4'} onChange={handleExpadirTexto('painel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel4bh-content"
                        id="painel4bh-header"
                    >
                        <Typography className={classes.heading}>4?? Higieniza????o das Intala????es e Equipamentos</Typography>
                        <Typography className={classes.secondaryHeading}>Compromisso da empresa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>Fica indispens??vel ao estabelecimento a elabora????o dos seguintes documentos:</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>1. POP???s - Procedimento Operacional Padronizado de higieniza????o de todos os ambientes, equipamentos e utens??lios, detalhando todo o procedimento realizado, fluxo da higieniza????o, produtos e dilui????o, forma de aplica????o e funcion??rio respons??vel pela execu????o;</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>2. Protocolo Sanit??rio com medidas a serem adotadas nas situa????es em que ocorrerem casos suspeitos ou confirmado de COVID-19.</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Esses documentos dever??o ser anexados a este plano e ap??s aprova????o, dever??o fazer parte do processo de treinamento peri??dico dos colaboradores.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>O estabelecimento deve refor??ar a higieniza????o de locais que est??o mais expostos ao toque das m??os, ma??anetas, telefones, computadores, mouses, teclados, maquinetas de cart??o.  Bancadas ser??o higienizados pelo menos a cada duas horas ou sempre que necess??rio com ??lcool gel 70% (planilhas de comprova????o ser??o fixadas em local espec??fico e preenchidas a cada procedimento realizado).</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Grandes superf??cies, pisos, paredes, tetos e sanit??rios devem ser higienizados pelo menos duas vezes ao dia ou sempre que necess??rio com ??gua sanit??ria 1% ou outro produto adequado (planilhas de comprova????o ser??o fixadas em local espec??fico e preenchidas a cada procedimento realizado).</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>As planilhas dever??o ser arquivadas para serem apresentadas aos fiscais de Vigil??ncia Sanit??ria, no ato da inspe????o.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>3. Encaminhar modelo das planilhas de higieniza????o.</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>A empresa fica obrigada a realizar um plano de manuten????o preventiva do sistema de ar condicionado (verifica????o geral do funcionamento, da conserva????o das pe??as e higieniza????o do filtro de ar, bandeja, ventilador e umidificador), com comprova????o peri??dica da higieniza????o por profissional habilitado.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Obrigatoriamente, ser?? mantida pelo menos uma janela externa aberta ou qualquer outra abertura, contribuindo para a renova????o de ar (mesmo com funcionamento do ar condicionado).</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>4. Anexar ao plano, comprovante de realiza????o da higieniza????o do sistema de ar condicionado</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Nos sanit??rios de clientes e funcion??rios, ser?? disponibilizado kit completo de higiene das m??os, pia, sabonete l??quido, toalhas de papel, ??lcool gel 70% cosm??tico e lixeira com pedal;</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Estabelecimentos que apresentam fluxo constante de pessoas dever??o disponibilizar produtos e tecnologia para a higieniza????o dos sapatos na entrada dos estabelecimentos (pedil??vios).</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Aten????o especial ser?? destinada aos EPI???s descart??veis, e aos reutiliz??veis, com local adequado e identificado para descarte e higieniza????o, respectivamente.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Este estabelecimento obrigatoriamente disponibilizar?? ??lcool gel 70% cosm??tico para funcion??rios e clientes. Dispensadores estar??o dispon??veis em locais estrat??gicos e na porta de entrada dos estabelecimentos.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Um funcion??rio ser?? mantido na porta, a fim de promover a higieniza????o com ??lcool 70% em gel das m??os do cliente, antes de sua entrada, e controlar do fluxo e organiza????o de filas que possam se formar na ??rea externa.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>No aparecimento de caso suspeito ou confirmado de coronav??rus, a empresa se responsabiliza pela imediata limpeza e desinfec????o de todos ambientes e equipamentos, sendo obrigat??ria a suspens??o imediata de todas as atividades. A comunica????o ?? Secretaria de Sa??de deve ser compuls??ria e imediata.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Os produtos utilizados na higieniza????o devem estar regularizados pelos ??rg??os competentes. A dilui????o, o tempo de contato e modo de uso/aplica????o dos produtos saneantes devem obedecer ??s instru????es recomendadas pelo fabricante. Os produtos devem ser identificados e guardados em local reservado para essa finalidade.</Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel5'} onChange={handleExpadirTexto('painel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel5bh-content"
                        id="painel5bh-header"
                    >
                        <Typography className={classes.heading}>5?? Monitoramento da Sa??de dos Funcion??rios</Typography>
                        <Typography className={classes.secondaryHeading}>Compromisso da empresa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>Os respons??veis pelo estabelecimento estar??o atentos ao estado de sa??de dos funcion??rios <b>diariamente, observando a manifesta????o de sintomas gripais, como tosse, espirros, congest??o nasal, coriza, mialgias, cefaleias, dores de garganta, aus??ncia de paladar e dificuldade para respirar, al??m de acompanhar a ocorr??ncia de casos suspeitos ou confirmados de familiares.</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Todo funcion??rio ter?? sua temperatura aferida no momento em que chegar ao local de trabalho, antes do in??cio das atividades, com term??metro digital infravermelho de testa, aqueles que apresentarem temperatura acima de <b>37,7??C ser??o encaminhados a unidade de sa??de com imediata comunica????o ?? secretaria de Sa??de.</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Todos os envolvidos no processo de trabalho precisam estar cientes dos protocolos a serem seguidos caso surjam sintomas da doen??a ou diagn??stico positivo para COVID-19 (tanto de funcion??rios como de familiares). <b>A comunica????o ?? SESAU deve ser compuls??ria e imediata, assim como a institui????o de todas as medidas sanit??rias necess??rias.</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>A reabertura do estabelecimento ap??s a confirma????o de caso positivo, s?? poder?? ocorrer ap??s a avalia????o da Vigil??ncia Sanit??ria e Vigil??ncia Epidemiol??gica. <b>O custo para realiza????o de testes de diagn??stico da COVID ??? 19 ser?? responsabilidade da empresa.</b></Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel6'} onChange={handleExpadirTexto('painel6')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel6bh-content"
                        id="painel6bh-header"
                    >
                        <Typography className={classes.heading}>6?? Algumas Observa????es</Typography>
                        <Typography className={classes.secondaryHeading}>Compromisso da empresa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>A empresa compromete-se a fornecer todos os EPI???s necess??rios de acordo com a atividade desenvolvida, em n??mero suficiente e em condi????es adequadas para o uso, assim como dispositivos coletores com tampa e sem acionamento manual para o descarte correto.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>O plano apresentado dever?? conter em anexo todas as comprova????es necess??rias, como planilhas, modelo de cartazes e p??steres, listas de funcion??rios, protocolos.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Todas as recomenda????es est??o relacionadas ao momento atual da pandemia e podem ser alteradas a qualquer momento, caso surjam novas evid??ncias ou em decorr??ncia da situa????o epidemiol??gica local.</Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel7'} onChange={handleExpadirTexto('painel7')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel7bh-content"
                        id="painel7bh-header"
                    >
                        <Typography className={classes.heading}>7?? Termo de Compromisso</Typography>
                        <Typography className={classes.secondaryHeading}>Compromisso da empresa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>A empresa se compromete a cumprir, na ??ntegra, as exig??ncias e recomenda????es descritas nos Protocolos Setoriais Anexo 1 e 2 deste Plano de Contingenciamento.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>O estabelecimento se compromete a cumprir inteiramente as obriga????es assumidas no presente plano, declarando verdadeiras todas as informa????es acima e ficando ciente acerca das penalidades previstas em Lei para a hip??tese de dados n??o condizentes com a situa????o f??tica, bem como para o caso de descumprimento de quaisquer das medidas ??s quais esteja obrigado, que poder??o implicar na imediata suspens??o das atividades.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Fica autorizado, desde logo e a qualquer tempo, o ingresso dos fiscais municipais ??s depend??ncias do estabelecimento para verifica????o quanto do cumprimento das obriga????es assumidas no presente plano.</Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel8'} onChange={handleExpadirTexto('painel8')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel8c-content"
                        id="panel8c-header"
                    >
                        <Typography className={classes.heading}>Anexo I e Anexo II</Typography>
                        <Typography className={classes.secondaryHeading}>Protocolo Setorial</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Fab size='large' variant='extended' lassName={classes.icones} onClick={abrirModal}>
                            <EmojiFoodBeverage />
                            Restaurantes
                        </Fab>
                        <Dialog
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                            TransitionComponent={Transition}
                            keepMounted
                            open={modal}
                            onClose={fecharModal}
                        >
                            <DialogTitle id="alert-dialog-slide-title">
                                {"PROTOCOLO SETORIAL 1 - Restaurante, bar, lanchonete e cong??neres"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    <div>
                                        <Typography align='justify' variant='body1' paragraph={true}>1. A abertura est?? condicionada a entrega e aprova????o do plano de contingenciamento, contendo todos os documentos solicitados e inspe????o pr??via pela Vigil??ncia Sanit??ria.</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>2. O estabelecimento obrigatoriamente dever?? possuir Alvar?? Sanit??rio v??lido. O estabelecimento que n??o possuir Alvar?? Sanit??rio dever?? dar entrada ao processo de licenciamento sanit??rio atrav??s do Sistema Integrado de Informa????o Municipal ??? SIM, no <Link onClick={abrirSim}>endere??o</Link>, realizar cadastro e iniciar o processo, enviando n??mero do protocolo gerado.</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>3. O hor??rio de funcionamento ser?? at?? as 22 horas.</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>4.  A ocupa????o n??o poder?? ultrapassar a capacidade de 40%</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>a. N??o ser?? permitida a jun????o de mesas;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>b. Cada mesa poder?? conter no m??ximo 4 cadeiras;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>c. As mesas dever??o estar dispostas com distanciamento m??nimo de 2m de seguran??a, considerando um afastamento de 1m entre a mesa e as cadeiras;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>5. Espa??os reservados para crian??as (parques, cama el??stica, etc.) dever??o permanecer fechados.</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>6. Nas ??reas de circula????o ser?? obrigat??rio o uso da m??scara (caixa, sanit??rios, estacionamento);</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>7. O cliente s?? poder?? se isentar do uso da m??scara enquanto estiver em sua mesa;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>8. Cada cadeira dever?? conter um saco pl??stico para o armazenamento da m??scara, este dever?? ser descartado ap??s a sa??da do cliente e imediatamente reposto;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>9. ?? obrigat??ria a perman??ncia de dispensadores de ??lcool gel 70% cosm??tico em todas as mesas, al??m das ??reas de circula????o.</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>10. Todos os funcion??rios devem usar EPI???s completos (m??scara, protetor facial, touca);</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>11. O fardamento deve ser trocado no momento em que o funcion??rio chegar ao estabelecimento;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>12. Os restaurantes que utilizavam o sistema self-service s?? poder??o funcionar se adaptarem sua estrutura, instalando barreira f??sica (anteparo de material acr??lico, vidro etc.) entre o cliente e o balc??o de alimentos. Dever??o ainda disponibilizar funcion??rios para servir os pratos.</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>13. Se a instala????o da barreira f??sica n??o for poss??vel, dever??o se enquadrar ao servi??o tipo ?? La Carte (o prato ?? montado e levado ?? mesa), n??o sendo permitida a presen??a dos clientes diante do balc??o de alimentos, o pedido deve ser feito na mesa e um funcion??rio espec??fico dever?? montar os pratos e entregar na mesa;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>14. N??o ser?? permitido o uso de nenhum tipo de card??pio nas mesas. Estes dever??o estar dispostos em paredes, lousas ou digitalizados;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>15. N??o ser?? permitido nenhum tipo de adere??o nas mesas (porta-guardanapo, paliteiro, jarros) estes devem ser entregues individualmente e devidamente ensacados;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>16. Pratos e talheres dever??o ser preferencialmente descart??veis, quando n??o for poss??vel, a higieniza????o dever?? estar descrita nos POP???s;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>17. Os copos, obrigatoriamente, dever??o ser descart??veis;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>18. A higieniza????o das mesas pelos gar??ons dever?? ser obrigatoriamente, com papel toalha, proibido o uso de panos e flanelas;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>19. Todos os objetos levados ?? mesa devem, obrigatoriamente, ser borrifados com ??lcool l??quido 70%, na presen??a do cliente;</Typography>
                                    </div>
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                        <Fab size='large' variant='extended' onClick={opeModalAca}>
                            <Academia />
                                Academia
                            </Fab>
                        <Dialog
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                            TransitionComponent={Transition}
                            keepMounted
                            open={modalAca}
                            onClose={fecharAcaModal}
                        >
                            <DialogTitle id="alert-dialog-slide-title">
                                {"PROTOCOLO SETORIAL 2 ??? aCADEMIA"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    <div>

                                        1. A abertura est?? condicionada a entrega e aprova????o do plano de contingenciamento, contendo todos os documentos solicitados e inspe????o pr??via pela Vigil??ncia Sanit??ria.
                                        2. O estabelecimento obrigatoriamente dever?? possuir Alvar?? Sanit??rio v??lido. O estabelecimento que n??o possuir Alvar?? Sanit??rio dever?? dar entrada ao processo de licenciamento sanit??rio atrav??s do Sistema Integrado de Informa????o Municipal ??? SIM, no endere??o http://sim.amargosa.ba.gov.br/login, realizar cadastro e iniciar o processo, enviando n??mero do protocolo gerado.
                                        3. A ocupa????o n??o poder?? ultrapassar a capacidade determinada em decreto municipal (1 pessoa/10 m??), considerando para este c??lculo, apenas a ??rea destinada ao treinamento.
                                        4. Fica proibido o uso de leitores biom??tricos e catracas para libera????o da entrada.
                                        5. O uso de m??scara ser?? obrigat??rio para todos os alunos e funcion??rios em todo o per??odo de perman??ncia no estabelecimento;
                                        6. S?? poder??o permanecer no estabelecimento, aqueles alunos previamente agendados, os quais dever??o seguir rigorosamente o hor??rio de entrada e sa??da, afim de n??o atrapalhar o fluxo (quantidade de pessoas no estabelecimento e per??odo de intervalo para realiza????o da higieniza????o a cada troca de turma.). Um funcion??rio da academia dever?? fazer cumprir essas determina????es;
                                        7. O estabelecimento, obrigatoriamente, deve organizar um plano de treino, de modo que cada aluno se mantenha em um ??nico espa??o previamente delimitado com marca????o f??sica, garantindo dist??ncia exigida;
                                        8. Todos os funcion??rios devem usar EPI???s completos (m??scara, protetor facial, touca);
                                        9. Garantir que o uso de vesti??rios seja exclusivo para professores, sendo vedado aos alunos acesso para banho e vesti??rio;
                                        10. N??o ser??o permitidas atividades em grupo;
                                        11. N??o ser?? permitida a realiza????o de atividades aqu??ticas ou esportes de contato;
                                        12. Nenhum aparelho poder?? ser compartilhado por alunos do mesmo hor??rio, devendo haver um intervalo entre as turmas para a devida higieniza????o do ambiente e de todos os aparelhos;
                                        13. O uso de tatames s?? ser?? permitido quando forem confeccionados com material pl??stico imperme??vel.
                                        14. ?? obrigat??ria a perman??ncia de dispensadores de ??lcool gel 70% nas ??reas de circula????o;
                                        15. N??o ser?? permitido o uso de bebedouros, os quais dever??o ser isolados. Cada aluno dever?? levar seu pr??prio squeeze j?? com ??gua.
                                    </div>
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel9'} onChange={handleExpadirTexto('painel9')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel9bh-content"
                        id="painel9bh-header"
                    >
                        <Typography className={classes.heading}>Download do Protocolo</Typography>
                        <Typography className={classes.secondaryHeading}>Arquivo PDF/DOCX</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Fab className={classes.icones} onClick={openDOCX}>
                            <InsertDriveFileOutlined />
                                DOCX
                            </Fab>
                        <Fab >
                            <PictureAsPdfOutlined />
                                PDF
                            </Fab>

                    </AccordionDetails>
                </Accordion>
            </div>
        </React.Fragment>
    )
}