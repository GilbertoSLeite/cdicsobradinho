import React from 'react';
import {
    Typography,
    Grid
} from '@material-ui/core';

export default function EvitarDoencaInfecto() {

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12}>
                <Typography align='justify' variant='body1'>
                   Amanda também vai lhe instruir como evitar a doença e é muito simples, depende da gente.
        </Typography>
                <Typography align='justify' variant='body1'>
                    A única forma de evitar essas três doenças é com o combate do mosquito, através da eliminação dos criadouros do mosquito nas casas, no trabalho e nas áreas públicas. Uma tarefa de todos.            </Typography>
                <Typography align='justify' variant='body1'>
                    Vamos ajudar Amargosa a combater aos focos da doença, ok?
         </Typography>
                <Typography align='center' variant='body1'>
                    Fonte:
            </Typography>
                <Typography align='center' variant='body1'>
                    1: http://www.saude.ba.gov.br/temasdesaude/arboviroses/perguntas-e-respostas/
            </Typography>
            </Grid>
        </React.Fragment>
    );
};

