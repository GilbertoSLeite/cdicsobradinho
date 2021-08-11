import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Hidden,
    Typography
} from '@material-ui/core';
import { Spring } from 'react-spring/renderprops';
import { SettingsBackupRestore } from '@material-ui/icons';
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

export default function Descartados() {
    const classes = useStyles();

    const [bolDadosDescartado, setBolDadosDescartado] = React.useState(null);
    
    React.useEffect(() => {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: dataSheets,
                simpleSheet: true,
            });
    }, []);

    const dataSheets = (data, tabletop) => setBolDadosDescartado(data);

    if(bolDadosDescartado !== null){
        var idData = bolDadosDescartado.length
        var lastData = bolDadosDescartado.map(x=>x).find((data) => (parseInt(data.id) === idData))
        var discardedData = parseInt(lastData.descartado)
        var rdiscardedDay  = parseInt(lastData.descartado_dia) 
    }else{
        discardedData = 0
        rdiscardedDay = 0
    }  

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
                        variant='body2'
                    >
                        Total de Descartados
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: discardedData
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
                        <SettingsBackupRestore
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
                        {(rdiscardedDay > 1 ? 'Últimos Descartados' : 'Último Descartado')}
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: rdiscardedDay
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
    )
};