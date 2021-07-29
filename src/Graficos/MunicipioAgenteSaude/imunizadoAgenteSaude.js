import React from 'react';
import {
    Line,
} from 'react-chartjs-2';
import Tabletop from 'tabletop';

const urlVacinacaoAmargosa = 'https://docs.google.com/spreadsheets/d/1CXV4Ut-a1JNya-TWfmMhqm8ziydSrpQmAShsp8aB6to/edit#gid=0'

export default function GrafImunizadoAgenteSaude() {

    const [imunizadoSaude, setImunizadoSaude] = React.useState([]);

    React.useEffect(() => {
        imunizadosSaudeData();
        async function imunizadosSaudeData() {
            try {
                Tabletop.init({
                    key: urlVacinacaoAmargosa,
                    callback: function (data, tabletop) {
                        setImunizadoSaude(data);
                    },
                    simpleSheet: true,
                });
            } catch (error) {
                console.error('Meu caro Hacker ocorreu o seguinte error em Gráfico Aguarda: ' + error + ' analise com carinho para que não ocorra novamente.')
            };
        };
    }, []);

    function FilterMaiorZero(value) {
        if(value.trabalhador_saude > 0){
            return value
        };        
    };

    const primeiraDoseAgenteSaude = imunizadoSaude.map(x => x).filter(FilterMaiorZero)

    const totalCasosImunizadosSaude = {

        labels: primeiraDoseAgenteSaude.map(x => 'Dia ' + x.dia),
        datasets: [
            {
                label: 'Trabalhadores de Saúde - Primeira Dose',
                backgroundColor: '#f1d9f9',
                borderColor: '#f06400',
                pointHoverBackgroundColor: '#f06400',
                borderWidth: 2,
                lineTension: 1,
                fill: false,
                data: primeiraDoseAgenteSaude.map(x => x.trabalhador_saude),
            },
        ],
    };

    const totalImunizadosSaude = {
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
        title: {
            display: true,
            fontColor: '#00a63d',
            text: 'Trabalhadores de Saúde - Primeira Dose',
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawOnChartArea: false,
                        color: '#00a63d',
                    },
                }],
            yAxes: [
                {
                    ticks: {
                        drawOnChartArea: false,
                        beginAtZero: false,
                        color: '#00a63d',
                    },
                }],
        },
        elements: {
            point: {
                radius: 3,
                pointStyle: 'circle',
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            },
            borderColor: "#f4e3fa",
            borderWidth: 5,
            line: {
                stepped: false,
            }
        },
        legend: {
            display: false,
            labels: {
                // This more specific font property overrides the global property
                fontColor: '#f1d9f9',
                fontSize: 8,
                boxWidth: 8
            }
        },
        animation: {
            durationduration: 4000,
            easing: 'easeOutElastic'
        },
    };

    return (
        <div>
            <Line
                data={totalCasosImunizadosSaude}
                options={totalImunizadosSaude} />
        </div>
    );
};