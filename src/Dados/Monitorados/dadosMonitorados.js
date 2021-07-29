import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Hidden,
    Typography
} from '@material-ui/core';
import { Spring } from "react-spring/renderprops";
import { VisibilityOutlined } from '@material-ui/icons';
import Tabletop from 'tabletop';

const useStyles = makeStyles(() => ({
    tipografiaDados: {
        color: '#00a63d'
    },
    tipografia: {
        color: "#ffffff"
    },
    emojiEyes: {
        color: '#fbfa07',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    },
}));

const urlBoletimAmargosa = 'https://docs.google.com/spreadsheets/d/1uR3gZrd98Yx7asgZL9bmVhj4zBQyVLYWyheUeDsJBII/edit#gid=0'

export default function Monitorados() {
    const classes = useStyles();

    const [bolDadosMonitorados, setBolDadosMonitorados] = React.useState(null);
    
    React.useEffect(() => {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: function (data, tabletop) {
                    setBolDadosMonitorados(data);
                },
                simpleSheet: true,
            });
    }, []);

    if (bolDadosMonitorados !== null) {
        var idData = bolDadosMonitorados.length
        var lastData = bolDadosMonitorados.map(x=>x).find((data) => (parseInt(data.id) === idData))
        var monitoredData = parseInt(lastData.monitorados)
        var monitoredDay  = parseInt(lastData.monitorados_dia) 
    } else {
        monitoredData = 0;
        monitoredDay = 0;
    };

    return (
        <React.Fragment>
            <Grid
                id="GridLine1"
                spacing={2}
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
                        Total de Monitorados
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: monitoredData
                        }}
                    >
                        {props =>
                            <div>
                                <Typography
                                    gutterBottom
                                    className={classes.tipografiaDados}
                                    align='center'
                                    display='initial'
                                    variant="h4">
                                    {props.number.toLocaleString('pt-BR', { style: 'decimal' })}
                                </Typography>
                            </div>
                        }
                    </Spring>
                </Grid>
                <Hidden
                    xsDown={true}
                >
                    <Grid
                        item
                        xs={12}
                        sm={4}
                    >
                        <VisibilityOutlined
                            className={classes.emojiEyes}
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
                        {(monitoredDay > 1 ? 'Últimos Monitorados' : 'Último Monitorado')}
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: monitoredDay
                        }}
                    >
                        {props =>
                            <div>
                                <Typography
                                    gutterBottom
                                    className={classes.tipografiaDados}
                                    align='center'
                                    display='initial'
                                    variant="h4">
                                    {monitoredDay}
                                </Typography>
                            </div>
                        }
                    </Spring>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};