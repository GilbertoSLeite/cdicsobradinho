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
    cardAboutSinovac: {
        width: '95%',
        height: '98%',
        position: 'relative',
        cursor: 'pointer',
        backgroundImage: `url(https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80)`,
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
        marginLeft: 20,
        marginRight: 20,
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

export default function AboutSinovac() {

    const classes = useStyles();

    const [propsAboutSinovac, setPropsAboutSinovac] = useSpring(() => ({
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

    const openSiteSinovac = () => {
        var url = 'http://www.sinovac.com/?optionid=452';
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
                                className={classes.cardAboutSinovac}
                                onMouseMove={({
                                    clientX: x,
                                    clientY: y
                                }) => setPropsAboutSinovac({
                                    xys: calc(x, y)
                                })}
                                onMouseLeave={() => setPropsAboutSinovac({
                                    xys: [0, 0, 1]
                                })}
                                style={{
                                    transform: propsAboutSinovac.xys.interpolate(trans)
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
                                        title='Sobre Sinovac'
                                        subheader='Dados sobre a empresa responsável pela Coronavac'
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
                                    SINOVAC
                                </Typography>
                                <Divider variant="middle" />
                                <Typography paragraph></Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    A história da Sinovac remonta a 1993, quando seu CEO, Sr. Weidong Yin, e a equipe da
                                    Tangshan Yian Biological Engineering Co. Ltd. se envolveram nas atividades iniciais de
                                    P&D que levaram ao desenvolvimento bem-sucedido da vacina contra hepatite A da empresa
                                    em 1999, que é a primeira vacina inativada contra hepatite A desenvolvida por cientistas
                                    chineses. Nas últimas duas décadas, a empresa desenvolveu e comercializou seis vacinas
                                    para uso humano e uma vacina para animais, e avançou com sua linha de P&D. A empresa
                                    alcançou muitos marcos de desenvolvimento significativos que exemplificam suas principais
                                    competências de P&D, incluindo o desenvolvimento da primeira vacina H1N1 do mundo em 2009.
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    Além disso, expandiu sua plataforma totalmente integrada com instalações de pesquisa de
                                    última geração, com certificação GMP fábricas e uma equipe de vendas com alcance em toda a
                                    China. A empresa está atualmente desenvolvendo uma nova vacina contra o enterovírus 71, que
                                    causa a doença severa das mãos, febre aftosa (HFMD) entre as crianças.
                                </Typography>
                                <Divider variant="middle" />
                                <Typography paragraph></Typography>
                                <Typography
                                    paragraph
                                    variant='body2'
                                    align='center'
                                >
                                    Fonte: <Link onClick={openSiteSinovac} to='http://www.sinovac.com/?optionid=452'>Site Oficial da Sinovac.</Link>
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