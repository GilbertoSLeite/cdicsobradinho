import React from 'react';
import {
    Typography,
    Grid
} from '@material-ui/core';

export default function TransmissaoDoencaInfecto() {

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12}>
                <Typography align='justify' variant='body1'>
                    Amanda  como sempre vai ajudar você entender como é transmitido a doença.
                </Typography>
                <Typography align='justify' variant='body1'>
                    As três doenças são adquiridas através da picada do mosquito Aedes aegypti, mais conhecido como mosquito da dengue, ou seu primo, o Aedes albopictus.
                </Typography>
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

