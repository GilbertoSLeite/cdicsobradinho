import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Hidden,
    Typography
} from '@material-ui/core';
import { Spring } from 'react-spring/renderprops';
import { SentimentVeryDissatisfied } from '@material-ui/icons';
import Tabletop from 'tabletop';

const useStyles = makeStyles(() => ({
    tipografiaDados: {
        color: '#00a63d'
    },
    tipografia: {
        color: "#ffffff"
    },
    emojiPeopleMorC: {
        color: '#fb0707',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    },
}));

const urlBoletimAmargosa = 'https://docs.google.com/spreadsheets/d/1uR3gZrd98Yx7asgZL9bmVhj4zBQyVLYWyheUeDsJBII/edit#gid=0'

export default function DadosObitos() {
    const classes = useStyles();

    const [bolDadosMortes, setBolDadosMortes] = React.useState(null);
    
    React.useEffect(() => {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: dataSheets,
                simpleSheet: true,
            });
    }, []);

    const dataSheets = (data, tabletop) => setBolDadosMortes(data);

    if (bolDadosMortes !== null) {
        var idData = bolDadosMortes.length
        var lastData = bolDadosMortes.map(x=>x).find((data) => (parseInt(data.id) === idData))
        var deathData = parseInt(lastData.mortes)
        var deathDay  = parseInt(lastData.mortes_dias) 
    } else {
        deathData = 0;
        deathDay = 0;
    };

    return (
        <React.Fragment>
            <Grid
                id="GridLine1"
                spacing={2}
                alignItems="center"
                justifyContent="center"
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
                        Total de Óbitos
                </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: deathData
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
                        <SentimentVeryDissatisfied
                            className={classes.emojiPeopleMorC}
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
                        {(deathDay > 1 ? 'Últimos Óbitos' : 'Último Óbito')}
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: deathDay
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