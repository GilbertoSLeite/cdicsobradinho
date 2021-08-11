import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Hidden,
    Typography
} from '@material-ui/core';
import {
    Spring
} from 'react-spring/renderprops';
import {
    SentimentSatisfied,
    SentimentVeryDissatisfied,
    SentimentVerySatisfied
} from '@material-ui/icons';
import Tabletop from 'tabletop';

const useStyles = makeStyles(() => ({
    tipografiaDados: {
        color: '#00a63d'
    },
    tipografia: {
        color: "#ffffff"
    },
    emojiPeopleCon: {
        color: '#fbfa07',
        marginLeft: '17%',
        marginRight: 'auto',
    },
    emojiPeopleMor: {
        color: '#fb0707',
        marginLeft: '20%',
        marginRight: 'auto',
    },
    emojiPeopleRec: {
        color: '#00a63d',
        marginLeft: '24%',
        marginRight: 'auto',
    },
}));

const urlBoletimAmargosa = 'https://docs.google.com/spreadsheets/d/1uR3gZrd98Yx7asgZL9bmVhj4zBQyVLYWyheUeDsJBII/edit#gid=0'

export default function DadosRecuperados() {
    const classes = useStyles();

    const [bolDadosRecuperados, setBolDadosRecuperados] = React.useState(null);    

    React.useEffect(() => {
        Tabletop.init({
            key: urlBoletimAmargosa,
            callback: dataSheets,
            simpleSheet: true,
        });
    }, []);

    const dataSheets = (data, tabletop) => setBolDadosRecuperados(data);
    
    if(bolDadosRecuperados !== null){
        var idData = bolDadosRecuperados.length
        var lastData = bolDadosRecuperados.map(x=>x).find((data) => (parseInt(data.id) === idData))
        var recoveryData = parseInt(lastData.recuperados)
        var recoveryDay  = parseInt(lastData.recuperado_dia) 
    }else{
        recoveryData = 0
        recoveryDay = 0
    }    

    return (
        <React.Fragment>
            <Grid
                id="GridLine1"
                spacing={3}
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
                        Total de Recuperados
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number: recoveryData
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
                <Hidden
                    xsDown={true}
                >
                    <Grid
                        item
                        xs={12}
                        sm={4}
                    >
                        <SentimentSatisfied
                            className={classes.emojiPeopleCon}
                            fontSize='small' />
                        <SentimentVeryDissatisfied
                            className={classes.emojiPeopleMor}
                            fontSize='small' />
                        <SentimentVerySatisfied
                            className={classes.emojiPeopleRec}
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
                        {recoveryDay  > 1 ? 'Últimos Recuperados' : 'Último Recuperado'}
                    </Typography>
                    <Spring
                        from={{
                            number: 0
                        }}
                        to={{
                            number:  recoveryDay
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