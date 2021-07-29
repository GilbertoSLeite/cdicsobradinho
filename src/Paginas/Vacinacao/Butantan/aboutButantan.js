import React from 'react';
import {
    Avatar,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Hidden,
    Link,
    makeStyles,
    Typography
} from '@material-ui/core';
import {
    useSpring,
    animated
} from 'react-spring';
import ls from '../../../Arquivos/imagens/iconspng.png';

const useStyles = makeStyles(() => ({
    root: {
        margin: 0,
        backgroundColor: '#0a5d5e',
    },
    cardAboutButantan: {
        width: '95%',
        height: '98%',
        position: 'relative',
        cursor: 'pointer',
        backgroundImage: `url(https://butantan.gov.br/assets/page-image/280b714d75a8a5b4.png)`,
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.3s ease-in-out',
        WebkitTransition: '0.3s ease-in-out',
        WebkitTransform: '0.3s ease-in-out',
        MozTransition: '0.3s ease-in-out',
        MozTransform: '0.3s ease-in-out',
        transform: '0.3s ease-in-out',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    card: {
        marginLeft: 10,
        marginRight: 10,
    },
    button: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: '#0a5d5e'
    },
}));

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function AboutButantan() {

    const classes = useStyles();

    const [propsAboutButantan, setPropsAboutButantan] = useSpring(() => ({
        xys: [0, 0, 1],
        config: {
            mass: 5,
            tension: 350,
            friction: 40
        }
    }));
    const [state, toggle] = React.useState(true);
    const { x } = useSpring({
        from: {
            x: 0
        }, x: state ? 1 : 0,
        config: {
            duration: 2000
        }
    });

    const openPageVaccination = () => {
        toggle(!state)
        setTimeout(() => {
            var url = '/cidadao/dadosvacinacao';
            window.location.href = url;
        }, 2100);
    };

    const openSiteButantan = () => {
        var url = 'https://butantan.gov.br/institucional/historico';
        window.open(url, '_blank');
    }

    return (
        <React.Fragment>
            <div
                className={classes.root}
            >
                <Grid
                    container
                    spacing={2}
                >
                    <Hidden
                        xsDown={true}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <Typography paragraph></Typography>
                            <animated.div
                                className={classes.cardAboutButantan}
                                onMouseMove={({
                                    clientX: x,
                                    clientY: y
                                }) => setPropsAboutButantan({
                                    xys: calc(x, y)
                                })}
                                onMouseLeave={() => setPropsAboutButantan({
                                    xys: [0, 0, 1]
                                })}
                                style={{
                                    transform: propsAboutButantan.xys.interpolate(trans)
                                }}
                            />
                        </Grid>
                    </Hidden>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <Typography paragraph></Typography>
                        <Card
                            className={classes.card}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar
                                        variant='circle'
                                        title='Sobre o Butantan'
                                        subheader='Dados sobre o órgão público responsável pelo desenvolvimento do Coronavac no Brasil.'
                                        src={ls}
                                    />
                                }
                            />
                            <Divider variant='middle' />
                            <CardContent>
                                <Typography paragraph></Typography>
                                <Typography
                                    paragraph
                                    align='center'
                                    variant='h5'
                                    className={classes.title}
                                >
                                    HISTÓRIA DO BUTANTAN
                                </Typography>
                                <Divider variant="middle" />
                                <Typography paragraph></Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    Em 1899, um surto de peste bubônica, que se propagava a partir do porto de Santos (SP), levou a administração pública
                                    estadual a criar um laboratório de produção de soro antipestoso (que combate a peste), vinculado ao Instituto
                                    Bacteriológico (atual Instituto Adolpho Lutz). Esse laboratório foi instalado na Fazenda Butantan, na zona Oeste da
                                    cidade de São Paulo, e, em fevereiro de 1901, foi reconhecido como instituição autônoma sob a denominação de Instituto
                                    Serumtherápico. Seu primeiro diretor foi o médico Vital Brazil Mineiro da Campanha, estudioso dos problemas de saúde
                                    pública da época.
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    No cotidiano de Vital Brazil, sempre estiveram presentes a preocupação em divulgar
                                    amplamente a ciência, a atuação do instituto e a produção de soros e vacinas, o que lhe
                                    conferiu o reconhecimento da comunidade internacional.
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    Mais de um século depois de sua fundação, o Butantan é hoje um destacado centro de
                                    pesquisa biomédica, que integra pesquisas científicas e tecnológicas, produção de
                                    imunobiológicos e divulgação técnico-científica, buscando a permanente atualização e
                                    integração de seus recursos e, com isso, a inovação.
                                </Typography>
                                <Divider variant="middle" />
                                <Typography paragraph></Typography>
                                <Typography
                                    paragraph
                                    variant='body2'
                                    align='center'
                                >
                                    Fonte: <Link onClick={openSiteButantan} to='https://butantan.gov.br/institucional/historico'>Butantan.</Link>
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body2'
                                    align='center'
                                >
                                    © LS Consultoria & Sistemas LTDA. Todos os direitos reservados.
                                    </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                    >
                        <Card>
                            <CardActionArea>
                                <Button
                                    fullWidth
                                    onClick={openPageVaccination}
                                    className={classes.button}
                                >
                                    <animated.div
                                        style={{
                                            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                                            transform: x
                                                .interpolate({
                                                    range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1, 1.5],
                                                    output: [1, 0.95, 0.85, 0.75, 0.65, 1.1, 0.95, 0, 85, 1.1, 1.03, 1, 1.5]
                                                })
                                                .interpolate(x => `scale(${x})`),
                                            backgroundColor: '#0a5d5e',
                                        }}
                                    >
                                        PÁGINA PRINCIPAL
                                    </animated.div>
                                </Button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}