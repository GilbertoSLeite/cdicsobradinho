import React from 'react';
import {
    Button,
    CardContent,
    CssBaseline,
    Grid,
    makeStyles,
    Typography
} from '@material-ui/core';
import {
    useSpring,
    animated
} from 'react-spring';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#0a5d5e',
    },
    cardAboutVaccine: {
        width: '45vw',
        height: '42vw',
        position: 'relative',
        cursor: 'pointer',
        backgroundImage: `url(https://images.unsplash.com/photo-1578307898515-d86b8c714b44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80)`,
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(255, 255, 255, 1)',
        transition: 'box-shadow 0.3s ease-in-out',
        WebkitTransition: '0.3s ease-in-out',
        WebkitTransform: '0.3s ease-in-out',
        MozTransition: '0.3s ease-in-out',
        MozTransform: '0.3s ease-in-out',
        transform: '0.3s ease-in-out',
        willChange: 'transform',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(255, 255, 255, 1)',
        },
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('xs')]: {
            marginLeft: 80,
            marginRight: 0,
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: 0,
            marginRight: 0,
        },
    },
    cardGeneralData: {
        width: '45vw',
        height: '42vw',
        position: 'relative',
        cursor: 'pointer',
        backgroundImage: `url(https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80)`,
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(255, 255, 255, 1)',
        transition: 'box-shadow 0.3s ease-in-out',
        WebkitTransition: '0.3s ease-in-out',
        WebkitTransform: '0.3s ease-in-out',
        MozTransition: '0.3s ease-in-out',
        MozTransform: '0.3s ease-in-out',
        transform: '0.3s ease-in-out',
        willChange: 'transform',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(255, 255, 255, 1)',
        },
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('xs')]: {
            marginLeft: 80,
            marginRight: 0,
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: 0,
            marginRight: 0,
        },
    },
    grid: {
        margin: 0,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        width: "100%",
        backgroundColor: '#0a5d5e',
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
        fontWeight: 'bold',
        userSelect: 'none',
        fontFamily: 'roboto',
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    }
}));

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function PageVaccination() {

    const classes = useStyles();

    const [state, toggle] = React.useState(true);
    const [propsAboutVaccine, setPropsAboutVaccine] = useSpring(() => ({
        xys: [0, 0, 1],
        config: {
            mass: 5,
            tension: 350,
            friction: 40
        }
    }));
    const [propsGeneralData, setPropsGeneralData] = useSpring(() => ({
        xys: [0, 0, 1],
        config: {
            mass: 5,
            tension: 350,
            friction: 40
        }
    }));

    const { x } = useSpring({
        from: {
            x: 0
        }, x: state ? 1 : 0,
        config: {
            duration: 2000
        }
    });

    const openAboutVaccine = () => {
        toggle(!state)
        setTimeout(() => {
            let url = '/cidadao/aboutvaccine';
            window.location.href = url;
        }, 2100);
    };

    const openGeneralData = () => {
        toggle(!state)
        setTimeout(() => {
            let url = '/cidadao/vacinacaodadosgerais';
            window.location.href = url;
        }, 2100);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Grid
                id="GridLine1"
                spacing={2}
                alignItems="center"
                justify="center"
                container
                className={classes.grid}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <Typography paragraph></Typography>
                    <animated.div
                        className={classes.cardGeneralData}
                        onMouseMove={({
                            clientX: x,
                            clientY: y
                        }) => setPropsGeneralData({
                            xys: calc(x, y)
                        })}
                        onMouseLeave={() => setPropsGeneralData({
                            xys: [0, 0, 1]
                        })}
                        style={{
                            transform: propsGeneralData.xys.interpolate(trans),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onClick={openGeneralData}
                    />
                    <CardContent>
                        <Typography paragraph></Typography>
                        <Button
                            fullWidth
                            variant='outlined'
                            onClick={openGeneralData}
                            className={classes.button}
                        >
                            <animated.div
                                style={{
                                    opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                                    transform: x.interpolate({
                                        range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1, 1.5],
                                        output: [1, 0.95, 0.85, 0.75, 0.65, 1.1, 0.95, 0, 85, 1.1, 1.03, 1, 1.5]
                                    })
                                        .interpolate(x => `scale(${x})`),
                                    backgroundColor: '#0a5d5e',
                                }}
                            >
                                DADOS GERAIS DA VACINAÇÃO
                                </animated.div>
                        </Button>
                    </CardContent>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <Typography paragraph></Typography>
                    <animated.div
                        className={classes.cardAboutVaccine}
                        onMouseMove={({
                            clientX: x,
                            clientY: y
                        }) => setPropsAboutVaccine({
                            xys: calc(x, y)
                        })}
                        onMouseLeave={() => setPropsAboutVaccine({
                            xys: [0, 0, 1]
                        })}
                        style={{
                            transform: propsAboutVaccine.xys.interpolate(trans),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onClick={openAboutVaccine}
                    />
                    <CardContent>
                        <Typography paragraph></Typography>
                        <Button
                            fullWidth
                            variant='outlined'
                            onClick={openAboutVaccine}
                            className={classes.button}
                        >
                            <animated.div
                                style={{
                                    opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                                    transform: x.interpolate({
                                        range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1, 1.5],
                                        output: [1, 0.95, 0.85, 0.75, 0.65, 1.1, 0.95, 0, 85, 1.1, 1.03, 1, 1.5]
                                    })
                                        .interpolate(x => `scale(${x})`),
                                    backgroundColor: '#0a5d5e',
                                }}
                            >
                                SOBRE A VACINA
                                </animated.div>
                        </Button>
                    </CardContent>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}