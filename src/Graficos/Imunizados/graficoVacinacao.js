import React from 'react';
import {
    Doughnut,
} from 'react-chartjs-2';
import Tabletop from 'tabletop';

const urlVacinacaoAmargosa = 'https://docs.google.com/spreadsheets/d/1CXV4Ut-a1JNya-TWfmMhqm8ziydSrpQmAShsp8aB6to/edit#gid=0'

export default function GrafVacinacao() {

    const [dadosVacinados, setDadosVacinados] = React.useState([]);
    const [rotacao, setRotacao] = React.useState(2);

    React.useEffect(() => {
        aguardaData();
        async function aguardaData() {
            try {
                Tabletop.init({
                    key: urlVacinacaoAmargosa,
                    callback: function (data, tabletop) {
                        setDadosVacinados(data);
                    },
                    simpleSheet: true,
                });
            } catch (error) {
                console.error('Meu caro Hacker ocorreu o seguinte error em Gráfico Aguarda: ' + error + ' analise com carinho para que não ocorra novamente.')
            };
        };
    }, []);

    var totalTrabalhadorSaude = dadosVacinados.map(x => x.total_trabalhador_saude);
    var totalTrabalhadorSaudeSeguda = dadosVacinados.map(x => x.total_trabalhador_saude_segunda)
    var totalIndigenaAldeados = dadosVacinados.map(x => x.total_indigenas_aldeados);
    var totalIndigenaAldeadosSegunda = dadosVacinados.map(x => x.total_indigenas_aldeados_segunda);
    var totalIdoso8084 = dadosVacinados.map(x => x.total_idoso_8084);
    var totalIdoso8084Segunda = dadosVacinados.map(x => x.total_idoso_8084_segunda);
    var totalIdoso8589 = dadosVacinados.map(x => x.total_idoso_8589);
    var totalIdoso8589Segunda = dadosVacinados.map(x => x.total_idoso_8589_segunda);
    var totalIdosoMaior90 = dadosVacinados.map(x => x.total_idoso_maior90);
    var totalIdosoMaior90Segunda = dadosVacinados.map(x => x.total_idoso_maior90_segunda);
    var totalIdoso = dadosVacinados.map(x => x.total_idoso);
    var totalIdosoSegunda = dadosVacinados.map(x => x.total_idoso_segunda);
    var totalIdosoILPI = dadosVacinados.map(x => x.total_idosos_ILPI);
    var totalIdosoILPISegunda = dadosVacinados.map(x => x.total_idosos_ILPI_segunda);
    var totalPcD = dadosVacinados.map(x => x.total_cidadao_especial);
    var totalPcDSeguda = dadosVacinados.map(x => x.total_cidadao_especial_segunda);
    var totalCidadao = dadosVacinados.map(x => x.total_cidadao);
    var totalCidadaoSeguda = dadosVacinados.map(x => x.total_cidadao_segunda);

    const totalCasosSemiCircle = {
        labels: [
            'Trabalhador Saúde - Primeira Dose',  //1
            'Trabalhador Saúde - Segunda Dose',   //2
            'Indígena - Primeira Dose',           //3
            'Indígena - Segunda Dose',            //4
            'Idoso 80 a 84 - Primeira Dose',      //5
            'Idoso 80 a 84 - Segunda Dose',       //6
            'Idoso 85 a 89 - Primeira Dose',      //7 
            'Idoso 85 a 89- Segunda Dose',        //8 
            'Idoso >90 - Primeira Dose',          //9
            'Idoso >90 - Segunda Dose',           //10
            'Idoso - Primeira Dose',              //11
            'Idoso - Segunda Dose',               //12
            'Idoso Abrigo - Primeira Dose',       //13
            'Idoso Abrigo - Segunda Dose',        //14
            'PcD - Primeira Dose',                //15
            'PcD - Segunda Dose',                 //16
            'Munícipes - Primeira Dose',          //17
            'Munícipes - Segunda Dose',           //18
        ],
        datasets: [
            {
                labels: [
                    'Trabalhador Saúde - Primeira Dose',  //1
                    'Trabalhador Saúde - Segunda Dose',   //2
                    'Indígena - Primeira Dose',           //3
                    'Indígena - Segunda Dose',            //4
                    'Idoso 80 a 84 - Primeira Dose',      //5
                    'Idoso 80 a 84 - Segunda Dose',       //6
                    'Idoso 85 a 89 - Primeira Dose',      //7 
                    'Idoso 85 a 89- Segunda Dose',        //8 
                    'Idoso >90 - Primeira Dose',          //9
                    'Idoso >90 - Segunda Dose',           //10
                    'Idoso - Primeira Dose',              //11
                    'Idoso - Segunda Dose',               //12
                    'Idoso Abrigo - Primeira Dose',       //13
                    'Idoso Abrigo - Segunda Dose',        //14
                    'PcD - Primeira Dose',                //15
                    'PcD - Segunda Dose',                 //16
                    'Munícipes - Primeira Dose',          //17
                    'Munícipes - Segunda Dose',           //18
                ],
                backgroundColor: [
                    '#1b9fb2', //1
                    '#06414a', //2
                    '#28de13', //3
                    '#2d5c28', //4
                    '#820470', //5
                    '#4a1e44', //6
                    '#d4d3d1', //7
                    '#676767', //8
                    '#6a2903', //9
                    '#291001', //10
                    '#f1974f', //11
                    '#ca9c77', //12
                    '#ffac00', //13
                    '#ac7400', //14
                    '#000000', //15
                    '#ff0000', //16
                    '#d37b83', //17
                    '#d03947'  //18
                ],
                borderColor: [
                    '#1b9fb2', //1
                    '#06414a', //2
                    '#28de13', //3
                    '#2d5c28', //4
                    '#820470', //5
                    '#4a1e44', //6
                    '#d4d3d1', //7
                    '#676767', //8
                    '#6a2903', //9
                    '#291001', //10
                    '#f1974f', //11
                    '#ca9c77', //12
                    '#ffac00', //13
                    '#ac7400', //14
                    '#000000', //15
                    '#ff0000', //16
                    '#d37b83', //17
                    '#d03947'  //18
                ],
                pointHoverBackgroundColor: [
                    '#4a4c4b',  //1
                    '#4a4c4b',  //2
                    '#4a4c4b',  //3
                    '#4a4c4b',  //4
                    '#4a4c4b',  //5
                    '#4a4c4b',  //6
                    '#4a4c4b',  //7
                    '#4a4c4b',  //8
                    '#4a4c4b',  //9
                    '#4a4c4b',  //10
                    '#4a4c4b',  //11
                    '#4a4c4b',  //12
                    '#4a4c4b',  //13
                    '#4a4c4b',  //14
                    '#4a4c4b',  //15
                    '#4a4c4b',  //16
                    '#4a4c4b',  //17
                    '#4a4c4b',  //18
                ],
                borderWidth: 2,
                lineTension: 1,
                data: [
                    totalTrabalhadorSaude[0],        //1
                    totalTrabalhadorSaudeSeguda[0],  //2
                    totalIndigenaAldeados[0],        //3
                    totalIndigenaAldeadosSegunda[0], //4
                    totalIdoso8084[0],               //5
                    totalIdoso8084Segunda[0],        //6
                    totalIdoso8589[0],               //7
                    totalIdoso8589Segunda[0],        //8
                    totalIdosoMaior90[0],            //9
                    totalIdosoMaior90Segunda[0],     //10
                    totalIdoso[0],                   //11
                    totalIdosoSegunda[0],            //12
                    totalIdosoILPI[0],               //13
                    totalIdosoILPISegunda[0],        //14
                    totalPcD[0],                     //15
                    totalPcDSeguda[0],               //16
                    totalCidadao[0],                 //17
                    totalCidadaoSeguda[0],           //18
                ]
            },
        ],
    };

    const totalCasosSemiCircleOpt = {
        enabled: true,
        maintainAspectRatio: false,
        responsive: true,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
            labelColor: function (tooltipItem, chart) {
                return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
            }
        },
        legend: {
            display: false,
            labels: {
                // This more specific font property overrides the global property
                fontColor: '#f1d9f9',
                fontSize: 8,
                boxWidth: 3
            },
        },
        animation: {
            duration: 4000, // general animation time
            easing: 'easeOutBounce',//'easeInOutBounce',easeOutElastic  easeOutBack
        },
        rotation: rotacao * Math.PI,
        circumference: 2 * Math.PI,
        cutoutPercentage: 80,
    };

    setInterval(() => {
        setRotacao(rotacao === 2 ? 10 : 2)
    }, 30000);

    return (
        <div>
            <Doughnut
                id='ImunizadosAmargosa'
                data={totalCasosSemiCircle}
                options={totalCasosSemiCircleOpt}
            />
        </div >
    );
};