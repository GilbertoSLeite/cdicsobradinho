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
                        <Typography className={classes.heading}>1º Introdução</Typography>
                        <Typography className={classes.secondaryHeading}>Informação sobre o PMC</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>Diante da Emergência de Saúde Pública do novo coronavírus (SARS CoV2) e com base nas informações e recomendações disponibilizadas pela Organização Mundial de Saúde (OMS) e Ministério da Saúde (MS), a Vigilância Sanitária de Amargosa (VISA) apresenta o Plano Municipal de Contingenciamento para reabertura gradual e segura do comércio (PMC). O cenário atual e as constantes atualizações realizadas pela OMS e MS, fazem deste plano, um documento sujeito a ajustes contínuos.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>O documento tem como objetivo instrumentalizar os estabelecimentos comerciais e de serviços para implementação de ações pertinentes e necessárias, capazes de reduzir complicações e danos acarretados pelo novo coronavírus. O PMC vai definir as responsabilidades de todos os envolvidos nas atividades consideradas não essenciais. Os estabelecimentos deverão respeitar protocolos sanitários de higiene, de convivência e de distanciamento social voltadas ao combate da Covid-19.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Os segmentos do comércio serão liberados de forma gradual, a partir da avaliação de risco de cada setor. A liberação para o funcionamento será fornecida de forma individual e após parecer técnico da VISA. Cada estabelecimento deverá apresentar a este órgão um plano de contingenciamento que será analisado e após sua aprovação passará por inspeção in loco.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>O cenário epidemiológico será reavaliado a cada 14 dias, e vai pautar a tomada de decisões a cerca da flexibilização ou intensificação dos protocolos sanitários. A suspensão parcial ou total do funcionamento das atividades ficará a cargo da Prefeitura Municipal de Amargosa (PMA), com base nas informações técnicas da Secretaria de Saúde (SESAU).</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>O protocolo de reabertura dos serviços não essenciais está condicionado a avaliações dos seguintes indicadores epidemiológicos:</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>1. Percentual de ocupação de leitos de UTI na Macro leste (menor 70 porcentos);</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>2. Índice de contaminação do município (menor que 1 durante 14 dias);</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>3. Percentual de crescimento de casos (média móvel menor que 8 porcentos, durante 14 dias);</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>4. Percentual de crescimento diário (menor que ou igual 6 porcentos);</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>5. Número absoluto de óbitos maior que ou igual a 2;</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>A liberação completa de todos os setores estará condicionada à evolução da epidemia e essa avaliação será realizada pela SESAU, a partir  da análise de indicadores.</Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel2'} onChange={handleExpadirTexto('painel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel2bh-content"
                        id="painel2bh-header"
                    >
                        <Typography className={classes.heading}>2º Educação Continuada e Comunicação</Typography>
                        <Typography className={classes.secondaryHeading}>Compromisso da empresa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>
                                Esta empresa se compromete a realizar treinamentos (antes do reinicio das atividades e periodicamente, a fim de reforçar as medidas de segurança) e disponibilizar material informativo que promova a orientação dos funcionários a respeito do COVID-19 (identificação dos sintomas, necessidade do uso de máscaras e forma correta de utilização, uso correto de luvas, necessidade da higienização das mãos e forma correta de fazê-la, noções básicas de higiene e protocolos de limpeza e desinfecção de ambientes e equipamentos e a adoção das boas práticas).
                        </Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>
                                <b>
                                    1. Metodologia aplicada para o treinamento: (ex: reunião, palestra, cursos online);
                            </b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>
                                <b>
                                    2. Data da realização do treinamento;
                                </b>
                            </Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>
                                <b>
                                    3. Lista de frequência do treinamento (anexar cópia da lista ao plano);
                                </b>
                            </Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>
                                Como forma de orientação a clientes e funcionários acerca das medidas permanentes para evitar a propagação do coronavírus, é obrigatória a fixação de cartazes/baners com informações sanitárias básicas sobre o COVID-19 (informações gerais acerca dos sintomas da doença, da obrigatoriedade do uso de máscaras, do distanciamento físico necessário, número de pessoas permitidas nos diversos ambientes, da marcação no piso, da higienização das mãos e das medidas recomendadas para a entrada da mercadoria no ambiente domiciliar e instruções sobre como utilizar e higienizar e/ou descartar corretamente as máscaras.), em pontos estratégicos e de fácil visualização, na entrada e em todos os setores do estabelecimento;
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
                        <Typography className={classes.heading}>3º Distanciamento Social no Trabalho</Typography>
                        <Typography className={classes.secondaryHeading}>Compromisso da empresa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>Esta empresa ajustará ou modificará o seu layout, através do uso de barreiras físicas, fechamento de espaços de convivência, mudanças no fluxo de refeitórios, salas de descanso, redução do número de mesas e cadeiras nesses ambientes e afastamento de equipamentos.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Sempre que possível, esta empresa privilegiará o uso do home office (principalmente para funcionários que estão no grupo de risco), vendas remotas, delivery, reuniões por teleconferência, escalonamento de funcionários e horários específicos para atender o público de risco. Em hipótese nenhuma vamos incentivar atividades promocionais que possam causar aglomerações.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Para permitir a rastreabilidade e dificultar a possibilidade de contágio entre funcionários, essa empresa criará zonas para separá-los em grupos de trabalhos isolados.</Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel4'} onChange={handleExpadirTexto('painel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel4bh-content"
                        id="painel4bh-header"
                    >
                        <Typography className={classes.heading}>4º Higienização das Intalações e Equipamentos</Typography>
                        <Typography className={classes.secondaryHeading}>Compromisso da empresa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>Fica indispensável ao estabelecimento a elaboração dos seguintes documentos:</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>1. POP’s - Procedimento Operacional Padronizado de higienização de todos os ambientes, equipamentos e utensílios, detalhando todo o procedimento realizado, fluxo da higienização, produtos e diluição, forma de aplicação e funcionário responsável pela execução;</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>2. Protocolo Sanitário com medidas a serem adotadas nas situações em que ocorrerem casos suspeitos ou confirmado de COVID-19.</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Esses documentos deverão ser anexados a este plano e após aprovação, deverão fazer parte do processo de treinamento periódico dos colaboradores.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>O estabelecimento deve reforçar a higienização de locais que estão mais expostos ao toque das mãos, maçanetas, telefones, computadores, mouses, teclados, maquinetas de cartão.  Bancadas serão higienizados pelo menos a cada duas horas ou sempre que necessário com álcool gel 70% (planilhas de comprovação serão fixadas em local específico e preenchidas a cada procedimento realizado).</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Grandes superfícies, pisos, paredes, tetos e sanitários devem ser higienizados pelo menos duas vezes ao dia ou sempre que necessário com água sanitária 1% ou outro produto adequado (planilhas de comprovação serão fixadas em local específico e preenchidas a cada procedimento realizado).</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>As planilhas deverão ser arquivadas para serem apresentadas aos fiscais de Vigilância Sanitária, no ato da inspeção.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>3. Encaminhar modelo das planilhas de higienização.</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>A empresa fica obrigada a realizar um plano de manutenção preventiva do sistema de ar condicionado (verificação geral do funcionamento, da conservação das peças e higienização do filtro de ar, bandeja, ventilador e umidificador), com comprovação periódica da higienização por profissional habilitado.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Obrigatoriamente, será mantida pelo menos uma janela externa aberta ou qualquer outra abertura, contribuindo para a renovação de ar (mesmo com funcionamento do ar condicionado).</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}><b>4. Anexar ao plano, comprovante de realização da higienização do sistema de ar condicionado</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Nos sanitários de clientes e funcionários, será disponibilizado kit completo de higiene das mãos, pia, sabonete líquido, toalhas de papel, álcool gel 70% cosmético e lixeira com pedal;</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Estabelecimentos que apresentam fluxo constante de pessoas deverão disponibilizar produtos e tecnologia para a higienização dos sapatos na entrada dos estabelecimentos (pedilúvios).</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Atenção especial será destinada aos EPI’s descartáveis, e aos reutilizáveis, com local adequado e identificado para descarte e higienização, respectivamente.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Este estabelecimento obrigatoriamente disponibilizará álcool gel 70% cosmético para funcionários e clientes. Dispensadores estarão disponíveis em locais estratégicos e na porta de entrada dos estabelecimentos.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Um funcionário será mantido na porta, a fim de promover a higienização com álcool 70% em gel das mãos do cliente, antes de sua entrada, e controlar do fluxo e organização de filas que possam se formar na área externa.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>No aparecimento de caso suspeito ou confirmado de coronavírus, a empresa se responsabiliza pela imediata limpeza e desinfecção de todos ambientes e equipamentos, sendo obrigatória a suspensão imediata de todas as atividades. A comunicação à Secretaria de Saúde deve ser compulsória e imediata.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Os produtos utilizados na higienização devem estar regularizados pelos órgãos competentes. A diluição, o tempo de contato e modo de uso/aplicação dos produtos saneantes devem obedecer às instruções recomendadas pelo fabricante. Os produtos devem ser identificados e guardados em local reservado para essa finalidade.</Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel5'} onChange={handleExpadirTexto('painel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel5bh-content"
                        id="painel5bh-header"
                    >
                        <Typography className={classes.heading}>5º Monitoramento da Saúde dos Funcionários</Typography>
                        <Typography className={classes.secondaryHeading}>Compromisso da empresa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>Os responsáveis pelo estabelecimento estarão atentos ao estado de saúde dos funcionários <b>diariamente, observando a manifestação de sintomas gripais, como tosse, espirros, congestão nasal, coriza, mialgias, cefaleias, dores de garganta, ausência de paladar e dificuldade para respirar, além de acompanhar a ocorrência de casos suspeitos ou confirmados de familiares.</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Todo funcionário terá sua temperatura aferida no momento em que chegar ao local de trabalho, antes do início das atividades, com termômetro digital infravermelho de testa, aqueles que apresentarem temperatura acima de <b>37,7ºC serão encaminhados a unidade de saúde com imediata comunicação à secretaria de Saúde.</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Todos os envolvidos no processo de trabalho precisam estar cientes dos protocolos a serem seguidos caso surjam sintomas da doença ou diagnóstico positivo para COVID-19 (tanto de funcionários como de familiares). <b>A comunicação à SESAU deve ser compulsória e imediata, assim como a instituição de todas as medidas sanitárias necessárias.</b></Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>A reabertura do estabelecimento após a confirmação de caso positivo, só poderá ocorrer após a avaliação da Vigilância Sanitária e Vigilância Epidemiológica. <b>O custo para realização de testes de diagnóstico da COVID – 19 será responsabilidade da empresa.</b></Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel6'} onChange={handleExpadirTexto('painel6')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel6bh-content"
                        id="painel6bh-header"
                    >
                        <Typography className={classes.heading}>6º Algumas Observações</Typography>
                        <Typography className={classes.secondaryHeading}>Compromisso da empresa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>A empresa compromete-se a fornecer todos os EPI’s necessários de acordo com a atividade desenvolvida, em número suficiente e em condições adequadas para o uso, assim como dispositivos coletores com tampa e sem acionamento manual para o descarte correto.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>O plano apresentado deverá conter em anexo todas as comprovações necessárias, como planilhas, modelo de cartazes e pôsteres, listas de funcionários, protocolos.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Todas as recomendações estão relacionadas ao momento atual da pandemia e podem ser alteradas a qualquer momento, caso surjam novas evidências ou em decorrência da situação epidemiológica local.</Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandirtexto === 'painel7'} onChange={handleExpadirTexto('painel7')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="painel7bh-content"
                        id="painel7bh-header"
                    >
                        <Typography className={classes.heading}>7º Termo de Compromisso</Typography>
                        <Typography className={classes.secondaryHeading}>Compromisso da empresa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography align='justify' variant='body1' paragraph={true}>A empresa se compromete a cumprir, na íntegra, as exigências e recomendações descritas nos Protocolos Setoriais Anexo 1 e 2 deste Plano de Contingenciamento.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>O estabelecimento se compromete a cumprir inteiramente as obrigações assumidas no presente plano, declarando verdadeiras todas as informações acima e ficando ciente acerca das penalidades previstas em Lei para a hipótese de dados não condizentes com a situação fática, bem como para o caso de descumprimento de quaisquer das medidas às quais esteja obrigado, que poderão implicar na imediata suspensão das atividades.</Typography>
                            <Typography align='justify' variant='body1' paragraph={true}>Fica autorizado, desde logo e a qualquer tempo, o ingresso dos fiscais municipais às dependências do estabelecimento para verificação quanto do cumprimento das obrigações assumidas no presente plano.</Typography>
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
                                {"PROTOCOLO SETORIAL 1 - Restaurante, bar, lanchonete e congêneres"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    <div>
                                        <Typography align='justify' variant='body1' paragraph={true}>1. A abertura está condicionada a entrega e aprovação do plano de contingenciamento, contendo todos os documentos solicitados e inspeção prévia pela Vigilância Sanitária.</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>2. O estabelecimento obrigatoriamente deverá possuir Alvará Sanitário válido. O estabelecimento que não possuir Alvará Sanitário deverá dar entrada ao processo de licenciamento sanitário através do Sistema Integrado de Informação Municipal – SIM, no <Link onClick={abrirSim}>endereço</Link>, realizar cadastro e iniciar o processo, enviando número do protocolo gerado.</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>3. O horário de funcionamento será até as 22 horas.</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>4.  A ocupação não poderá ultrapassar a capacidade de 40%</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>a. Não será permitida a junção de mesas;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>b. Cada mesa poderá conter no máximo 4 cadeiras;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>c. As mesas deverão estar dispostas com distanciamento mínimo de 2m de segurança, considerando um afastamento de 1m entre a mesa e as cadeiras;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>5. Espaços reservados para crianças (parques, cama elástica, etc.) deverão permanecer fechados.</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>6. Nas áreas de circulação será obrigatório o uso da máscara (caixa, sanitários, estacionamento);</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>7. O cliente só poderá se isentar do uso da máscara enquanto estiver em sua mesa;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>8. Cada cadeira deverá conter um saco plástico para o armazenamento da máscara, este deverá ser descartado após a saída do cliente e imediatamente reposto;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>9. É obrigatória a permanência de dispensadores de álcool gel 70% cosmético em todas as mesas, além das áreas de circulação.</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>10. Todos os funcionários devem usar EPI’s completos (máscara, protetor facial, touca);</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>11. O fardamento deve ser trocado no momento em que o funcionário chegar ao estabelecimento;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>12. Os restaurantes que utilizavam o sistema self-service só poderão funcionar se adaptarem sua estrutura, instalando barreira física (anteparo de material acrílico, vidro etc.) entre o cliente e o balcão de alimentos. Deverão ainda disponibilizar funcionários para servir os pratos.</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>13. Se a instalação da barreira física não for possível, deverão se enquadrar ao serviço tipo à La Carte (o prato é montado e levado à mesa), não sendo permitida a presença dos clientes diante do balcão de alimentos, o pedido deve ser feito na mesa e um funcionário específico deverá montar os pratos e entregar na mesa;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>14. Não será permitido o uso de nenhum tipo de cardápio nas mesas. Estes deverão estar dispostos em paredes, lousas ou digitalizados;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>15. Não será permitido nenhum tipo de adereço nas mesas (porta-guardanapo, paliteiro, jarros) estes devem ser entregues individualmente e devidamente ensacados;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>16. Pratos e talheres deverão ser preferencialmente descartáveis, quando não for possível, a higienização deverá estar descrita nos POP’s;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>17. Os copos, obrigatoriamente, deverão ser descartáveis;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>18. A higienização das mesas pelos garçons deverá ser obrigatoriamente, com papel toalha, proibido o uso de panos e flanelas;</Typography>
                                        <Typography align='justify' variant='body1' paragraph={true}>19. Todos os objetos levados à mesa devem, obrigatoriamente, ser borrifados com álcool líquido 70%, na presença do cliente;</Typography>
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
                                {"PROTOCOLO SETORIAL 2 – aCADEMIA"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    <div>

                                        1. A abertura está condicionada a entrega e aprovação do plano de contingenciamento, contendo todos os documentos solicitados e inspeção prévia pela Vigilância Sanitária.
                                        2. O estabelecimento obrigatoriamente deverá possuir Alvará Sanitário válido. O estabelecimento que não possuir Alvará Sanitário deverá dar entrada ao processo de licenciamento sanitário através do Sistema Integrado de Informação Municipal – SIM, no endereço http://sim.amargosa.ba.gov.br/login, realizar cadastro e iniciar o processo, enviando número do protocolo gerado.
                                        3. A ocupação não poderá ultrapassar a capacidade determinada em decreto municipal (1 pessoa/10 m²), considerando para este cálculo, apenas a área destinada ao treinamento.
                                        4. Fica proibido o uso de leitores biométricos e catracas para liberação da entrada.
                                        5. O uso de máscara será obrigatório para todos os alunos e funcionários em todo o período de permanência no estabelecimento;
                                        6. Só poderão permanecer no estabelecimento, aqueles alunos previamente agendados, os quais deverão seguir rigorosamente o horário de entrada e saída, afim de não atrapalhar o fluxo (quantidade de pessoas no estabelecimento e período de intervalo para realização da higienização a cada troca de turma.). Um funcionário da academia deverá fazer cumprir essas determinações;
                                        7. O estabelecimento, obrigatoriamente, deve organizar um plano de treino, de modo que cada aluno se mantenha em um único espaço previamente delimitado com marcação física, garantindo distância exigida;
                                        8. Todos os funcionários devem usar EPI’s completos (máscara, protetor facial, touca);
                                        9. Garantir que o uso de vestiários seja exclusivo para professores, sendo vedado aos alunos acesso para banho e vestiário;
                                        10. Não serão permitidas atividades em grupo;
                                        11. Não será permitida a realização de atividades aquáticas ou esportes de contato;
                                        12. Nenhum aparelho poderá ser compartilhado por alunos do mesmo horário, devendo haver um intervalo entre as turmas para a devida higienização do ambiente e de todos os aparelhos;
                                        13. O uso de tatames só será permitido quando forem confeccionados com material plástico impermeável.
                                        14. É obrigatória a permanência de dispensadores de álcool gel 70% nas áreas de circulação;
                                        15. Não será permitido o uso de bebedouros, os quais deverão ser isolados. Cada aluno deverá levar seu próprio squeeze já com água.
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