import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import {
  ma
} from 'moving-averages';
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

export default function MediaMovelConf() {

    const classes = useStyles();

    const [bolDadosMediaMovelCon, setBolDadosMediaMovelCon] = React.useState(null);

     React.useEffect(() => {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: function (data, tabletop) {
                    setBolDadosMediaMovelCon(data);
                },
                simpleSheet: true,
            });
    }, []);    

     if(bolDadosMediaMovelCon !== null){
        var lastData = bolDadosMediaMovelCon.map(x=>x).filter((data) => (parseInt(data.id) > (bolDadosMediaMovelCon.length - 7)))        
        const datasConfirmado = lastData.map(x => parseInt(x.confirmado_dia))
        var mediaMovel = ma(datasConfirmado,7)
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
                Média Móvel de Confirmados (7 Dias)
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