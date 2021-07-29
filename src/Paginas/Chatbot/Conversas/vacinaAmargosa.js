import React from 'react';
import {
    Typography
} from '@material-ui/core';
import Tabletop from 'tabletop';

const urlVacinometro = 'https://docs.google.com/spreadsheets/d/1pZATDMlA84b88a3t6BFM6OmRIlrsyc_i4rq1iV1TNC4/edit#gid=0';

export default function VacinaAmargosa() {
    const [vacinometroDados, setVacinometroDados] = React.useState([]);
    
    Tabletop.init({
        key: urlVacinometro,
        callback: function (data, tabletop) {
            setVacinometroDados(data);
        },
        simpleSheet: true,
    });

    var dataVacinometro = vacinometroDados.map(x =>  (!x ? '' :  x.data_registro));
    var dadosAmargosa = vacinometroDados.map(x =>  (!x ? 0 : parseInt(x.amargosa)));
    var dadosAmargosaSegunda = vacinometroDados.map(x =>  (!x ? 0 : parseInt(x.amargosa_segunda)));

    const porcVacinadoS = () => ((dadosAmargosaSegunda[0] * 100)/40000).toLocaleString('pt-BR', { style: 'decimal' })
    const porcVacinadoP = () =>  ((dadosAmargosa[0] * 100)/40000).toLocaleString('pt-BR', { style: 'decimal' })

    return (
        <div>
            <Typography align='justify' variant='body1'>
                Olá! Meu nome éAmanda  segue abaixo a informação solicitada:
            </Typography>
            <Typography align='justify' variant='body1'>
                Iniciamos no dia 19 de janeiro de 2021 a imunização em Amargosa e com muita satisfação já vacinamos até o dia de {dataVacinometro} um total de {dadosAmargosa.toLocaleString('pt-BR', { style: 'decimal' })} da primeiro dose e imunizamos um total de {dadosAmargosaSegunda.toLocaleString('pt-BR', { style: 'decimal' })} com a segunda dose. 
            </Typography>
            <Typography align='justify' variant='body1'>
                Os dados  apresentados até o dia de hoje, representa {porcVacinadoS()}% de pessoas imunizadas com as duas doses e pelo menos {porcVacinadoP()}% vacinados com a primeira dose.
            </Typography>
        </div>
    );
};
