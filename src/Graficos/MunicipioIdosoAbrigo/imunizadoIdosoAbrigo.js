import React from 'react';
import {
    Line,
} from 'react-chartjs-2';
import Tabletop from 'tabletop';

const urlVacinacaoAmargosa = 'https://docs.google.com/spreadsheets/d/1CXV4Ut-a1JNya-TWfmMhqm8ziydSrpQmAShsp8aB6to/edit#gid=0'

export default function GrafImunizadoIdosoAbrigo() {

    const [imunizadoIdosoAbrigo, setImunizadoIdosoAbrigo] = React.useState([]);

    React.useEffect(() => {
        imunizadosSaudeData();
        async function imunizadosSaudeData() {
            try {
                Tabletop.init({
                    key: urlVacinacaoAmargosa,
                    callback: function (data, tabletop) {
                        setImunizadoIdosoAbrigo(data);
                    },
                    simpleSheet: true,
                });
            } catch (error) {
                console.error('Meu caro Hacker ocorreu o seguinte error em Gráfico Aguarda: ' + error + ' analise com carinho para que não ocorra novamente.')
            };
        };
    }, []);

    function FilterMaiorZero(value) {
        if (value.idosos_ILPI > 0) {
            return value
        };
    };

    const imunizadoIdosoAbrigoPrimera = imunizadoIdosoAbrigo.map(x=>x).filter(FilterMaiorZero);

    const totalCasosImunizadosIdosoAbrigo = {

        labels: imunizadoIdosoAbrigoPrimera.map(x => 'Dia - ' + x.dia),
        datasets: [
            {
                label: 'Idoso Morando em Abrigo - Primeira Dose',
                borderColor: '#f06400',
                backgroundColor: '#00a63d',
                pointHoverBackgroundColor: '#f06400',
                borderWidth: 2,
                lineTension: 1,
                fill: true,
                data: imunizadoIdosoAbrigo.map(x => x.idosos_ILPI),
            },
        ],
    };

    const totalImunizadosIdosoAbrigo = {
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
            text: 'Idoso Morando em Abrigo - Primeira Dose',
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawOnChartArea: false,
                        color: '#00a63d',
                    },
                    scaleLabel: {
                        display: false,
                    }
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
                pointStyle: 'triangle',
                backgroundColor: 'rgba(255, 0, 24, 1)',
                borderColor: 'rgba(255, 0, 24, 1)',
                hitRadius: 10,
                hoverRadius: 10,
                hoverBorderWidth: 10,
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
                data={totalCasosImunizadosIdosoAbrigo}
                options={totalImunizadosIdosoAbrigo} />
        </div>
    );
};