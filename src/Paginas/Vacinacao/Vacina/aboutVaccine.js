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
        backgroundImage: `url(https://images.unsplash.com/photo-1578307898515-d86b8c714b44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80)`,
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

export default function AboutVaccine() {

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

    const openSiteFioCruz = () => {
        var url = 'https://www.bio.fiocruz.br/index.php/br/noticias/1263-vacinas-as-origens-a-importancia-e-os-novos-debates-sobre-seu-uso?showall=1&limitstart=#:~:text=Foi%20em%201798%20que%20o,menor%20impacto%20no%20corpo%20humano.';
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
                                        subheader='Dados sobre a empresa respons??vel pela Coronavac'
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
                                    HIST??RIA DA VACINA
                                </Typography>
                                <Divider variant="middle" />
                                <Typography paragraph></Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    Os primeiros vest??gios do uso de vacinas, com a introdu????o de vers??es atenuadas de
                                    v??rus no corpo das pessoas, est??o relacionados ao combate ?? var??ola no s??culo 10, na
                                    China. Por??m, a teoria era aplicada de forma bem diferente: os chineses trituravam
                                    cascas de feridas provocadas pela doen??a e assopravam o p??, com o v??rus morto, sobre o
                                    rosto das pessoas.
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    Foi em 1798 que o termo ???vacina??? surgiu pela primeira vez, gra??as a uma experi??ncia do
                                    m??dico e cientista ingl??s Edward Jenner. Ele ouviu relatos de que trabalhadores da zona
                                    rural n??o pegavam var??ola, pois j?? haviam tido a var??ola bovina, de menor impacto no corpo
                                    humano. Ele ent??o introduziu os dois v??rus em um garoto de oito anos e percebeu que o rumor
                                    tinha de fato uma base cient??fica. A palavra vacina deriva justamente de Variolae vaccinae,
                                    nome cient??fico dado ?? var??ola bovina.
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    Em 1881, quando o cientista franc??s Louis Pasteur come??ou a desenvolver a segunda
                                    gera????o de vacinas, voltadas a combater a c??lera avi??ria e o carb??nculo, ele sugeriu o
                                    termo para batizar sua rec??m-criada subst??ncia, em homenagem a Jenner.
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    A partir de ent??o, as vacinas come??aram a ser produzidas em massa e se tornaram um
                                    dos principais elementos para o combate a doen??as no mundo.
                                </Typography>
                                <Divider variant="middle" />
                                <Typography paragraph></Typography>
                                <Typography
                                    paragraph
                                    variant='body2'
                                    align='center'
                                >
                                    Fonte: <Link onClick={openSiteFioCruz} to='https://www.bio.fiocruz.br/index.php/br/noticias/1263-vacinas-as-origens-a-importancia-e-os-novos-debates-sobre-seu-uso?showall=1&limitstart=#:~:text=Foi%20em%201798%20que%20o,menor%20impacto%20no%20corpo%20humano.'>Fiocruz.</Link>
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body2'
                                    align='center'
                                >
                                    ?? LS Consultoria & Sistemas LTDA. Todos os direitos reservados.
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
                                        P??GINA PRINCIPAL
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