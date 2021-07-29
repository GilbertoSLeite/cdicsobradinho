import React from 'react';
import { Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import Tabletop from 'tabletop';
import { SportsCricketOutlined } from '@material-ui/icons';
import { Spring } from 'react-spring/renderprops';

const useStyles = makeStyles(() => ({
    tipografiaDados: {
        color: '#00a63d'
    },
    tipografia: {
        color: "#ffffff"
    },
    icon: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        color: '#00a63d',
    },
}));

const urlVacinacaoAmargosa = 'https://docs.google.com/spreadsheets/d/1CXV4Ut-a1JNya-TWfmMhqm8ziydSrpQmAShsp8aB6to/edit#gid=0'

export default function DadosImunizados() {

    const classes = useStyles();

    const [dadosImunizados, setDadosImunizados] = React.useState(null);
    const [status, setStatus] = React.useState(false);

    React.useEffect(() => {
        aguardaData();
        async function aguardaData() {
            try {
                Tabletop.init({
                    key: urlVacinacaoAmargosa,
                    callback: function (data, tabletop) {
                        setDadosImunizados(data);
                        setStatus(true);
                    },
                    simpleSheet: true,
                });
            } catch (error) {
                console.error('Meu caro Hacker ocorreu o seguinte error em Dados Imunizados: ' + error + ' analise com carinho para que não ocorra novamente.')
            };
        };
    }, []);

    if (status) {
        var totalImunizado = dadosImunizados.map(x => parseInt(x.total_geral));
        var totalImunizadoSegunda = dadosImunizados.map(x => parseInt(x.total_geral_segunda));
        var qtdUltimosImunizados = dadosImunizados[dadosImunizados.length - 1] === undefined ? 0 : dadosImunizados[dadosImunizados.length - 1]
        var valorDia = (parseInt(qtdUltimosImunizados.total));
        var valorDiaSegunda = (parseInt(qtdUltimosImunizados.total_segunda));
    } else {
        totalImunizado = 0;
        totalImunizadoSegunda = 0;
        qtdUltimosImunizados = ''
        valorDia = 0;
        valorDiaSegunda = 0;
    };

    return (
        <React.Fragment>
            <Grid
                id="GridLine1"
                spacing={3}
                alignItems="center"
                justify="center"
                container
            >
                <Grid
                    item
                    xs={12}
                    sm={4}
                >
                    <Typography
                        gutterBottom
                        className={classes.tipografia}
                        align='center'
                        display='initial'
                        variant='body2'>
                        Total de Imunizados - 1° Dose
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: totalImunizado[0]
                        }}
                    >
                        {props =>
                            <div>
                                <Typography
                                    gutterBottom
                                    className={classes.tipografiaDados}
                                    align='center'
                                    display='initial'
                                    variant="h4"
                                >
                                    {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                </Typography>
                            </div>
                        }
                    </Spring>
                </Grid>
                <Hidden xsDown={true}>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                    >
                        <SportsCricketOutlined
                            className={classes.icon}
                            fontSize='small' />
                    </Grid>
                </Hidden>
                <Grid
                    item
                    xs={12}
                    sm={4}
                >
                    <Typography
                        gutterBottom
                        className={classes.tipografia}
                        align='center'
                        display='initial'
                        variant='body2'>
                        {isNaN(valorDia) ? '' : (valorDia > 1 ? 'Últimos Imunizados - 1° Dose' : 'Último Imunizado - 1° Dose')}
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: valorDia
                        }}
                    >
                        {props =>
                            <div>
                                <Typography
                                    gutterBottom
                                    className={classes.tipografiaDados}
                                    align='center'
                                    display='initial'
                                    variant="h4"
                                >
                                    {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                </Typography>
                            </div>
                        }
                    </Spring>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={4}
                >
                    <Typography
                        gutterBottom
                        className={classes.tipografia}
                        align='center'
                        display='initial'
                        variant='body2'>
                        Total de Imunizados - 2° Dose
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: totalImunizadoSegunda[0]
                        }}
                    >
                        {props =>
                            <div>
                                <Typography
                                    gutterBottom
                                    className={classes.tipografiaDados}
                                    align='center'
                                    display='initial'
                                    variant="h4"
                                >
                                    {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                </Typography>
                            </div>
                        }
                    </Spring>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={4}
                >
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={4}
                >
                    <Typography
                        gutterBottom
                        className={classes.tipografia}
                        align='center'
                        display='initial'
                        variant='body2'>
                        {isNaN(valorDiaSegunda) ? '' : (valorDiaSegunda > 1 ? 'Últimos Imunizados - 2° Dose' : 'Último Imunizado - 2° Dose')}
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: valorDiaSegunda
                        }}
                    >
                        {props =>
                            <div>
                                <Typography
                                    gutterBottom
                                    className={classes.tipografiaDados}
                                    align='center'
                                    display='initial'
                                    variant="h4"
                                >
                                    {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                </Typography>
                            </div>
                        }
                    </Spring>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};