import React from 'react';
import {
    Typography,
    Link
} from '@material-ui/core';

function RedeSocial() {
    var url = 'https://www.instagram.com/p/CEl777RDknF/'
    window.open(url, '_blank');
};

function SiteMunicipio() {
    var url = 'https://amargosa.ba.gov.br/covid-19/';
    window.open(url, '_blank');
};

export default function PaiAluno() {

    return (
        <div>
            <Typography align='justify' variant='body1'>
                Amanda aqui vai te falar algo muito importante.
            </Typography>
            <Typography align='justify' variant='body1'>
                Sempre estamos informando <Link onClick={RedeSocial}>em nossas redes sociais</Link> sobre os Kit's para os nossos alunos da rede municipal.
                    </Typography>
            <Typography align='justify' variant='body1'>
                É possível sempre acompanhar os decretos <Link onClick={SiteMunicipio}>no site</Link> de Amargosa.
            </Typography>
            <Typography align='justify' variant='body1'>
                O aluno deverá estar devidamente matriculado e irá durar enquanto estiver suspenso as aulas da rede municipal. Os alimentos serão distribuidos em forma de kit's para os alunos devidamente <b>matriculado</b>.
         </Typography>
            <Typography align='justify' variant='body1'>
                Só será entregue aos pais ou responsável pela matrícula do aluno. O Kit é definido por um(a) nutricionista escolar.
         </Typography>
        </div>
    );
}