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
    cardAboutFioCruz: {
        width: '95%',
        height: '98%',
        position: 'relative',
        cursor: 'pointer',
        backgroundImage: `url(https://portal.fiocruz.br/sites/portal.fiocruz.br/files/imagensPortal/logo-120anos.png)`,
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

export default function AboutFioCruz() {

    const classes = useStyles();

    const [propsAboutFioCruz, setPropsAboutFioCruz] = useSpring(() => ({
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
        var url = 'https://portal.fiocruz.br/historia';
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
                                className={classes.cardAboutFioCruz}
                                onMouseMove={({
                                    clientX: x,
                                    clientY: y
                                }) => setPropsAboutFioCruz({
                                    xys: calc(x, y)
                                })}
                                onMouseLeave={() => setPropsAboutFioCruz({
                                    xys: [0, 0, 1]
                                })}
                                style={{
                                    transform: propsAboutFioCruz.xys.interpolate(trans)
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
                                        title='Sobre o FioCruz'
                                        subheader='Dados sobre a Funda????o Oswaldo Cruz.'
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
                                    HIST??RIA DA FIOCRUZ
                                </Typography>
                                <Divider variant="middle" />
                                <Typography paragraph></Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    A hist??ria da Funda????o Oswaldo Cruz come??ou em 25 de maio de 1900, com a cria????o do
                                    Instituto Soroter??pico Federal, na buc??lica Fazenda de Manguinhos, Zona Norte do
                                    Rio de Janeiro. Inaugurada originalmente para fabricar soros e vacinas contra a peste
                                    bub??nica, a institui????o experimentou, desde ent??o, uma intensa trajet??ria, que se confunde
                                    com o pr??prio desenvolvimento da sa??de p??blica no pa??s.
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    Pelas m??os do jovem bacteriologista Oswaldo Cruz, o Instituto foi respons??vel pela
                                    reforma sanit??ria que erradicou a epidemia de peste bub??nica e a febre amarela da
                                    cidade. E logo ultrapassou os limites do Rio de Janeiro, com expedi????es cient??ficas que
                                    desbravaram as lonjuras do pa??s. O Instituto tamb??m foi pe??a chave para a cria????o do
                                    Departamento Nacional de Sa??de P??blica, em 1920.
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    J?? centen??ria, a Fiocruz desenha uma hist??ria robusta nos primeiros anos do s??culo 21.
                                    Ampliou suas instala????es e, em 2003, teve seu estatuto enfim publicado. Foi uma d??cada
                                    tamb??m de grandes avan??os cient??ficos, com feitos como o deciframento do genoma do BCG,
                                    bact??ria usada na vacina contra a tuberculose. Uma trajet??ria de expans??o, que ganhou novos
                                    passos nesta segunda d??cada, com a cria????o de escrit??rios como o de Mato Grosso do Sul e o de
                                    Mo??ambique, na ??frica. Um caminho que se alimenta de conquistas e de desafios sempre renovados.
                                </Typography>
                                <Divider variant="middle" />
                                <Typography paragraph></Typography>
                                <Typography
                                    paragraph
                                    variant='body2'
                                    align='center'
                                >
                                    Fonte: <Link onClick={openSiteFioCruz} to='https://portal.fiocruz.br/historia'>FioCruz.</Link>
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