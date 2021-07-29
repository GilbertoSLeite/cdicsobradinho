import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Hidden,
    Typography
} from '@material-ui/core';
import { Spring } from 'react-spring/renderprops';
import { HourglassEmpty } from '@material-ui/icons';
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

export default function DadosAguardandoResultado() {
    const classes = useStyles();

    const [bolDadosAguardando, setBolDadosAguardando] = React.useState(null);
    
    React.useEffect(() => {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: function (data, tabletop) {
                    setBolDadosAguardando(data);
                },
                simpleSheet: true,
            });
    }, []);
    
    if(bolDadosAguardando !== null){
        var idData = bolDadosAguardando.length
        var lastData = bolDadosAguardando.map(x=>x).find((data) => (parseInt(data.id) === idData))
        var waitingResult = parseInt(lastData.aguardando)
        var waitingResultDay  = parseInt(lastData.aguardando_dia) 
    }else{
        waitingResult = 0
        waitingResultDay = 0
    }    

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
                        Total Aguardando Resultado
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: waitingResult
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
                        <HourglassEmpty
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
                        {waitingResultDay === 0 ? 'Nenhum Paciente Aguardando Resultado' : 'Novos Pacientes Aguardando Resultado'}
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: waitingResultDay
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
            </Grid>
        </React.Fragment>
    );
};