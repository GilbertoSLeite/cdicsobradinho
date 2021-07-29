import React from 'react';
import {
    Typography,
    Grid
} from '@material-ui/core';

export default function ComplicacaoDoencaInfecto() {

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12}>
                <Typography align='justify' variant='body1'>
                    Amanda  aqui vai lhe explicar, fico até triste em falar neste assunto e por isso ressalto, vamos nos cuidar e evitar os focos das doenças, ok?
            </Typography>
                <Typography align='justify' variant='body1'>
                    <b>Dengue:</b> entre as três a Dengue é a mais preocupante devido às complicações agudas e possibilidade de hemorragias graves. As complicações ocorrem quanto a febre começa a ceder e existem alguns sinais de alarme, que devem levar a pessoa a procurar uma unidade de emergência: vômitos persistentes, dor abdominal e sangramentos.
            </Typography>
                <Typography align='justify' variant='body1'>
                    <b>Chikungunya:</b> a principal complicação é a permanência, por longo tempo, das dores e inchaço nas articulações, às vezes impedindo as pessoas de retornarem às suas atividades;
             </Typography>
                <Typography align='justify' variant='body1'>
                    <b>Zika:</b> geralmente a doença é benigna. Podem ocorrer persistência das dores e edema articular e num percentual pequeno de casos podem ocorrer algumas complicações neurológicas como paralisia facial, surdez e a Síndrome de Guillain-Barré.
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

