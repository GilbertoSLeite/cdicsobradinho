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
                                        subheader='Dados sobre a Fundação Oswaldo Cruz.'
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
                                    HISTÓRIA DA FIOCRUZ
                                </Typography>
                                <Divider variant="middle" />
                                <Typography paragraph></Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    A história da Fundação Oswaldo Cruz começou em 25 de maio de 1900, com a criação do
                                    Instituto Soroterápico Federal, na bucólica Fazenda de Manguinhos, Zona Norte do
                                    Rio de Janeiro. Inaugurada originalmente para fabricar soros e vacinas contra a peste
                                    bubônica, a instituição experimentou, desde então, uma intensa trajetória, que se confunde
                                    com o próprio desenvolvimento da saúde pública no país.
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    Pelas mãos do jovem bacteriologista Oswaldo Cruz, o Instituto foi responsável pela
                                    reforma sanitária que erradicou a epidemia de peste bubônica e a febre amarela da
                                    cidade. E logo ultrapassou os limites do Rio de Janeiro, com expedições científicas que
                                    desbravaram as lonjuras do país. O Instituto também foi peça chave para a criação do
                                    Departamento Nacional de Saúde Pública, em 1920.
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    align='justify'
                                >
                                    Já centenária, a Fiocruz desenha uma história robusta nos primeiros anos do século 21.
                                    Ampliou suas instalações e, em 2003, teve seu estatuto enfim publicado. Foi uma década
                                    também de grandes avanços científicos, com feitos como o deciframento do genoma do BCG,
                                    bactéria usada na vacina contra a tuberculose. Uma trajetória de expansão, que ganhou novos
                                    passos nesta segunda década, com a criação de escritórios como o de Mato Grosso do Sul e o de
                                    Moçambique, na África. Um caminho que se alimenta de conquistas e de desafios sempre renovados.
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