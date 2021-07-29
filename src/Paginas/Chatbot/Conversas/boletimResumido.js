import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    Typography,
    Grid
} from '@material-ui/core';
import Confirmado from '../../../Dados/Confirmados/dadosConfirmados';
import Mortes from '../../../Dados/Obitos/dadosMortes';
import Recuperados from '../../../Dados/Recuperados/dadosRecuperados';

const useStyles = makeStyles(() => ({
    card: {
        backgroundColor: '#152445',
        opacity: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    },
    tipografia: {
        color: "#ffffff",
        fontFamily: 'Times New Roman',
    },
    grid: {
      width: "100%",
      alignItems: "center"
    },
}));

export default function BoletimResumido() {

    const classes = useStyles();

    return (
        <React.Fragment>
        
        <Grid
          id="GridLine1"
          spacing={3}
          alignItems="center"
          justify="center"
          container
          className={classes.grid}
        >
            <Grid item xs={12} sm={12}>
                <Card className={classes.card}>
                    <Typography
                        className={classes.tipografia}
                        align='center'
                        variant='body1' >
                        Confirmado
                    </Typography>
                    <CardContent>
                        <React.Fragment>
                            <Confirmado />
                        </React.Fragment>
                    </CardContent>
                </Card>
            </Grid>
             <Grid item xs={12} sm={12}>
                <Card className={classes.card}>
                    <Typography
                        className={classes.tipografia}
                        align='center'
                        variant='body1' >
                        Óbitos
                        </Typography>
                    <CardContent>
                        <React.Fragment>
                            <Mortes />
                        </React.Fragment>
                    </CardContent>
                </Card>
            </Grid>            
            <Grid item xs={12} sm={12}>
                <Card className={classes.card}>
                    <Typography
                        className={classes.tipografia}
                        align='center'
                        variant='body1' >
                        Recuperados
                    </Typography>
                    <CardContent>
                        <React.Fragment>
                            <Recuperados />
                        </React.Fragment>
                    </CardContent>
                </Card>
            </Grid>   
        </Grid> 
    </React.Fragment>
    );
};