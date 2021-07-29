import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import {
  ma
} from 'moving-averages'
import Tabletop from 'tabletop';

const useStyles = makeStyles(() => ({
    tipografiaDados: {
        color: '#00a63d'
    },
    tipografia: {
        color: "#ffffff"
    },
}));

const urlBoletimAmargosa = 'https://docs.google.com/spreadsheets/d/1uR3gZrd98Yx7asgZL9bmVhj4zBQyVLYWyheUeDsJBII/edit#gid=0'

export default function MediaMovelMorte() {

    const classes = useStyles();

    const [bolMediaMovelMorte, setBolMediaMovelMorte] = React.useState(null);

    React.useEffect(() => {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: function (data, tabletop) {
                    setBolMediaMovelMorte(data);
                },
                simpleSheet: true,
            });
    }, []);    

     if(bolMediaMovelMorte !== null){
        var lastData = bolMediaMovelMorte.map(x=>x).filter((data) => (parseInt(data.id) > (bolMediaMovelMorte.length - 7)))        
        const datasMortes = lastData.map(x => parseInt(x.mortes_dias))
        var mediaMovel = ma(datasMortes,7)
    }else{
        mediaMovel = 0
    }     

    return (
        <React.Fragment>
            <Typography
                gutterBottom
                className={classes.tipografia}
                align='center'
                display='initial'
                variant='body2'>
                Média Móvel de Óbitos (7 Dias)
            </Typography>
            <Typography
                gutterBottom
                className={classes.tipografiaDados}
                align='center'
                display='initial'
                variant="h4">
                {isNaN(mediaMovel[6]) ? '' : mediaMovel[6].toLocaleString('pt-BR', { style: 'decimal' })}              
            </Typography>
        </React.Fragment>
    );
};