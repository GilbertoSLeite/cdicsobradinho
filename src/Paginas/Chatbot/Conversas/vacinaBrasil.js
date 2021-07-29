import React from 'react';
import {
    Typography
} from '@material-ui/core';
import Tabletop from 'tabletop';

const urlVacinometro = 'https://docs.google.com/spreadsheets/d/1pZATDMlA84b88a3t6BFM6OmRIlrsyc_i4rq1iV1TNC4/edit#gid=0';

export default function VacinaBrasil() {

    const [vacinometroDados, setVacinometroDados] = React.useState([]);

    Tabletop.init({
        key: urlVacinometro,
        callback: function (data, tabletop) {
            setVacinometroDados(data);
        },
        simpleSheet: true,
    });

    const dataAtualizacao = vacinometroDados.map(x => (!x ? '' : x.data_registro));
    var dadosBrasilPrimeira = vacinometroDados.map(x => (!x ? 0 : parseInt(x.brasil_primeira)));
    var dadosBrasilSegunda = vacinometroDados.map(x => (!x ? 0 : parseInt(x.brasil_segunda)));

    const porcVacinado = () => ((dadosBrasilSegunda[0] * 100)/211000000).toLocaleString('pt-BR', { style: 'decimal' })
    const porcVacinadoP = () =>  ((dadosBrasilPrimeira[0] * 100)/211000000).toLocaleString('pt-BR', { style: 'decimal' })

    return (
        <div>
            <Typography align='justify' variant='body1'>
                Olá! Meu  nome éAmanda  e aqui tem a informação que você deseja:
            </Typography>
            <Typography align='justify' variant='body1'>
                Até o dia de {dataAtualizacao} já foram administradas da primeira dose um total de {dadosBrasilPrimeira.toLocaleString('pt-BR', { style: 'decimal' })} e da segunda dose {dadosBrasilSegunda.toLocaleString('pt-BR', { style: 'decimal' })} no Brasil.
            </Typography>
            <Typography align='justify' variant='body1'>
                Os dados  apresentados até o dia de hoje, representa {porcVacinado()}% de pessoas imunizadas com as duas doses e pelo menos {porcVacinadoP()}% vacinados com a primeira dose.
            </Typography>
        </div>
    );
};
