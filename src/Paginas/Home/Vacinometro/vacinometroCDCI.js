import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Avatar,
    Backdrop,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    CssBaseline,
    Divider,
    Grid,
    Grow,
    IconButton,
    Link,
    makeStyles,
    Modal,
    Typography
} from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import {
    Close,
    ExpandMore,
    InfoOutlined,
} from '@material-ui/icons';
import ls from '../../../Arquivos/imagens/bandeira_sobradinho.jpeg';
import Tabletop from 'tabletop';
import { Spring } from 'react-spring/renderprops';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 'bold',
        [theme.breakpoints.up('xs')]: {
            fontSize: 9.2,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
    },
    card: {
        maxWidth: 1500,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    icon: {
        marginLeft: '5%',
        marginRight: 'auto',
    },
    counter: {
        [theme.breakpoints.up('xs')]: {
            fontSize: 9.2,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 18,
        },
        fontWeight: 'bold',
        display: 'block',
        color: '#29acbe',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        [theme.breakpoints.up('xs')]: {
            fontSize: 9.2,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 12,
        },
        fontWeight: 'bold',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        fontWeight: 100,
    },
    grid: {
        width: "100%",
        alignItems: 'center',
    },
    buttonInfo: {
        fontWeight: 'bold',
        color: "#03fe2a",
        alignItems: 'center',
    }
}));

const urlVacinometro = 'https://docs.google.com/spreadsheets/d/17b2nc4HQe6VEctMJ1MmgVq1nuTW2p7xUNa4YdBpQABo/edit#gid=0';

export default function Vacinometro(props) {

    const { checked } = props;

    const classes = useStyles();

    const [expandedVacina, setexpandedVacina] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [vacinometroDados, setVacinometroDados] = React.useState([]);

    const handleExpandClickVacina = () => {
        setexpandedVacina(!expandedVacina);
    };

    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
    });

    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        ValidarChecked(checked);
        function ValidarChecked(value) {
            if (value) {
                setOpen(true);
                Tabletop.init({
                    key: urlVacinometro,
                    callback: function (data, tabletop) {
                        setVacinometroDados(data);
                    },
                    simpleSheet: true,
                });
            } else {
                setOpen(false);
                setVacinometroDados([]);
            };
        };
    }, [checked]);    
    
    var dataVacinometro = vacinometroDados.map(x => x.data_registro);
    var dadosGlobal = vacinometroDados.map(x => parseInt(x.global));
    var dadosBrasilPrimeira = vacinometroDados.map(x => parseInt(x.brasil_primeira));
    var dadosBrasilSegunda = vacinometroDados.map(x => parseInt(x.brasil_segunda));
    var dadosBrasilDoseUnica = vacinometroDados.map(x => parseInt(x.brasil_dose_unica));
    var dadosBahiaPrimeira = vacinometroDados.map(x => parseInt(x.bahia_primeira));
    var dadosBahiaSegunda = vacinometroDados.map(x => parseInt(x.bahia_segunda));
    var dadosBahiaDoseUnica = vacinometroDados.map(x => parseInt(x.bahia_dose_unica));
    var dadosAmargosa = vacinometroDados.map(x => parseInt(x.sobradinho));
    var dadosAmargosaSegunda = vacinometroDados.map(x => parseInt(x.sobradinho_segunda));
    let dadosAmargosaDoseUnica = vacinometroDados.map(x => parseInt(x.sobradinho_dose_unica));
       
    return (
        <React.Fragment>
            <CssBaseline />
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={
                    {
                        timeout: 3500,
                    }
                }
            >
                <animated.div
                    style={style}
                >
                    <Grow
                        in={open}
                    >
                        <Card
                            className={classes.card}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar
                                        variant='circle'
                                        src={ls}
                                    />
                                }
                                title='Prefeitura Municipal de Sobradinho'
                                subheader={`Vacinômetro em: ${dataVacinometro}`}
                            />
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expandedVacina,
                                    })}
                                    aria-expanded={expandedVacina}
                                    onClick={handleExpandClickVacina}
                                >
                                    <ExpandMore />
                                </IconButton>
                                <IconButton
                                    onClick={handleClose}
                                >
                                    <Close />
                                </IconButton>
                            </CardActions>
                            <Collapse
                                in={expandedVacina}
                                timeout="auto"
                                unmountOnExit
                            >
                                <CardContent className={classes.content}>
                                    <Grid
                                        id="GridLine1"
                                        spacing={1}
                                        alignItems='stretch'
                                        justify="center"
                                        container
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}>
                                            <Typography
                                                align='center'
                                                variant='body2'
                                                className={classes.title}
                                            >
                                                Global
                                            </Typography>
                                            <Divider variant="middle" />
                                            <Spring
                                                from={{
                                                    number: 0
                                                }}
                                                to={{
                                                    number: dadosGlobal[0]
                                                }}
                                            >
                                                {props =>
                                                    <div>
                                                        <Typography
                                                            align='center'
                                                            variant='body2'
                                                            className={classes.counter}
                                                        >
                                                            {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                                        </Typography>
                                                    </div>
                                                }
                                            </Spring>
                                        </Grid>
                                    </Grid>
                                    <Divider variant="middle" />
                                    <Grid
                                        id="GridLine1"
                                        spacing={1}
                                        alignItems='stretch'
                                        justify="center"
                                        container
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                            sm={4}
                                        >
                                            <Typography
                                                align='center'
                                                variant='body2'
                                                className={classes.title}
                                            >
                                                Brasil - 1° Dose
                                            </Typography>
                                            <Divider variant="middle" />
                                            <Spring
                                                from={{
                                                    number: 0
                                                }}
                                                to={{
                                                    number: dadosBrasilPrimeira[0]
                                                }}
                                            >
                                                {props =>
                                                    <div>
                                                        <Typography
                                                            align='center'
                                                            variant='body2'
                                                            className={classes.counter}
                                                        >
                                                            {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                                        </Typography>
                                                    </div>
                                                }
                                            </Spring>
                                            <Divider variant="middle" />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={4}
                                        >
                                            <Typography
                                                align='center'
                                                variant='body2'
                                                className={classes.title}
                                            >
                                                Brasil - 2° Dose
                                                </Typography>
                                            <Divider variant="middle" />
                                            <Spring
                                                from={{
                                                    number: 0
                                                }}
                                                to={{
                                                    number: dadosBrasilSegunda[0]
                                                }}
                                            >
                                                {props =>
                                                    <div>
                                                        <Typography
                                                            align='center'
                                                            variant='body2'
                                                            className={classes.counter}
                                                        >
                                                            {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                                        </Typography>
                                                    </div>
                                                }
                                            </Spring>
                                            <Divider variant="middle" />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={4}
                                        >
                                            <Typography
                                                align='center'
                                                variant='body2'
                                                className={classes.title}
                                            >
                                                Brasil - Dose Única
                                                </Typography>
                                            <Divider variant="middle" />
                                            <Spring
                                                from={{
                                                    number: 0
                                                }}
                                                to={{
                                                    number: dadosBrasilDoseUnica[0]
                                                }}
                                            >
                                                {props =>
                                                    <div>
                                                        <Typography
                                                            align='center'
                                                            variant='body2'
                                                            className={classes.counter}
                                                        >
                                                            {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                                        </Typography>
                                                    </div>
                                                }
                                            </Spring>
                                            <Divider variant="middle" />
                                        </Grid>                                        
                                    </Grid>
                                    <Divider variant="middle" />
                                    <Grid
                                        id="GridLine1"
                                        spacing={1}
                                        alignItems='stretch'
                                        justify="center"
                                        container
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                            sm={4}
                                        >
                                            <Typography
                                                align='center'
                                                variant='body2'
                                                className={classes.title}
                                            >
                                                Bahia - 1° Dose
                                            </Typography>
                                            <Spring
                                                from={{
                                                    number: 0
                                                }}
                                                to={{
                                                    number: dadosBahiaPrimeira[0]
                                                }}
                                            >
                                                {props =>
                                                    <div>
                                                        <Typography
                                                            align='center'
                                                            variant='body2'
                                                            className={classes.counter}
                                                        >
                                                            {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                                        </Typography>
                                                    </div>
                                                }
                                            </Spring>
                                            <Divider variant="middle" />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={4}
                                        >
                                            <Typography
                                                align='center'
                                                variant='body2'
                                                className={classes.title}
                                            >
                                                Bahia - 2° Dose
                                            </Typography>
                                            <Spring
                                                from={{
                                                    number: 0
                                                }}
                                                to={{
                                                    number: dadosBahiaSegunda[0]   
                                                }}
                                            >
                                                {props =>
                                                    <div>
                                                        <Typography
                                                            align='center'
                                                            variant='body2'
                                                            className={classes.counter}
                                                        >
                                                            {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                                        </Typography>
                                                    </div>
                                                }
                                            </Spring>
                                            <Divider variant="middle" />
                                        </Grid> 
                                        <Grid
                                            item
                                            xs={12}
                                            sm={4}
                                        >
                                            <Typography
                                                align='center'
                                                variant='body2'
                                                className={classes.title}
                                            >
                                                Bahia - Dose Única
                                            </Typography>
                                            <Spring
                                                from={{
                                                    number: 0
                                                }}
                                                to={{
                                                    number: dadosBahiaDoseUnica[0]   
                                                }}
                                            >
                                                {props =>
                                                    <div>
                                                        <Typography
                                                            align='center'
                                                            variant='body2'
                                                            className={classes.counter}
                                                        >
                                                            {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                                        </Typography>
                                                    </div>
                                                }
                                            </Spring>
                                            <Divider variant="middle" />
                                        </Grid>                                            
                                    </Grid>
                                    <Divider variant="middle" />
                                    <Grid
                                        id="GridLine1"
                                        spacing={1}
                                        alignItems='stretch'
                                        justify="center"
                                        container
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                            sm={4}
                                        >
                                            <Typography
                                                align='center'
                                                variant='body2'
                                                className={classes.title}
                                            >
                                                Sobradinho - 1° Dose
                                            </Typography>
                                            <Spring
                                                from={{
                                                    number: 0
                                                }}
                                                to={{
                                                    number: dadosAmargosa[0]
                                                }}
                                            >
                                                {props =>
                                                    <div>
                                                        <Typography
                                                            align='center'
                                                            variant='body2'
                                                            className={classes.counter}
                                                        >
                                                            {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                                        </Typography>
                                                    </div>
                                                }
                                            </Spring>
                                            <Divider variant="middle" />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={4}
                                        >
                                            <Typography
                                                align='center'
                                                variant='body2'
                                                className={classes.title}
                                            >
                                                Sobradinho - 2° Dose
                                        </Typography>
                                            <Spring
                                                from={{
                                                    number: 0
                                                }}
                                                to={{
                                                    number: dadosAmargosaSegunda[0]
                                                }}
                                            >
                                                {props =>
                                                    <div>
                                                        <Typography
                                                            align='center'
                                                            variant='body2'
                                                            className={classes.counter}
                                                        >
                                                            {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                                        </Typography>
                                                    </div>
                                                }
                                            </Spring>
                                            <Divider variant="middle" />
                                        </Grid>     
                                        <Grid
                                            item
                                            xs={12}
                                            sm={4}
                                        >
                                            <Typography
                                                align='center'
                                                variant='body2'
                                                className={classes.title}
                                            >
                                                Sobradinho - Dose Única
                                        </Typography>
                                            <Spring
                                                from={{
                                                    number: 0
                                                }}
                                                to={{
                                                    number: dadosAmargosaDoseUnica[0]
                                                }}
                                            >
                                                {props =>
                                                    <div>
                                                        <Typography
                                                            align='center'
                                                            variant='body2'
                                                            className={classes.counter}
                                                        >
                                                            {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                                        </Typography>
                                                    </div>
                                                }
                                            </Spring>
                                            <Divider variant="middle" />
                                        </Grid>                                        
                                    </Grid>
                                    <Divider variant="middle" />
                                    <Typography
                                        className={classes.footer}
                                        align='center'
                                    >
                                        <Link
                                            onClick={() => window.open('https://lsconsultorias.srv.br/projetos', '_blank')}
                                            to='https://lsconsultorias.srv.br/projetos'
                                            className={classes.footer}
                                        >
                                            © LS Consultoria & Sistemas LTDA.
                                            </Link>
                                    </Typography>
                                    <Divider variant="middle" />
                                    <Typography
                                        className={classes.footer}
                                        align='center'
                                    >
                                        Fonte:
                                        <li>Secretária de Saúde de Sobradinho</li>
                                        <li>Secretária de Saúde do Estado da Bahia</li>
                                        <li>
                                            <Link
                                                onClick={() => window.open('https://www.bloomberg.com/graphics/covid-vaccine-tracker-global-distribution/', '_blank')}
                                                to='https://www.bloomberg.com/graphics/covid-vaccine-tracker-global-distribution/'
                                                className={classes.footer}
                                            >
                                                Bloomberg - Dados Mundial
                                            </Link>
                                        </li>
                                    </Typography>
                                </CardContent>
                            </Collapse>
                            <Divider variant="middle" />
                        </Card>
                    </Grow>
                </animated.div>
            </Modal>
        </React.Fragment>
    );
};

Vacinometro.propTypes = {
    checked: PropTypes.bool.isRequired,
}