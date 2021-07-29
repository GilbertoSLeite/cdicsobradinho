import React from 'react';
import {
    Bar,
} from 'react-chartjs-2';
import Tabletop from 'tabletop';

const urlVacinacaoAmargosa = 'https://docs.google.com/spreadsheets/d/1CXV4Ut-a1JNya-TWfmMhqm8ziydSrpQmAShsp8aB6to/edit#gid=0'

export default function GrafImunizadoTotal() {

    const [totalImunizados, setTotalImunizados] = React.useState([]);

    React.useEffect(() => {
        imunizadosSaudeData();
        async function imunizadosSaudeData() {
            try {
                Tabletop.init({
                    key: urlVacinacaoAmargosa,
                    callback: function (data, tabletop) {
                        setTotalImunizados(data);
                    },
                    simpleSheet: true,
                });
            } catch (error) {
                console.error('Meu caro Hacker ocorreu o seguinte error em Gráfico Aguarda: ' + error + ' analise com carinho para que não ocorra novamente.')
            };
        };
    }, []);

    function FilterQtd(value) {
        if ((value.total > 0) || (value.total > 0)) {
            return value
        };
    };

    const totalImunizadosFilter = totalImunizados.map(x => x).filter(FilterQtd)

    const totalCasosImunizadosGraph = {

        labels: totalImunizadosFilter.map(x => 'Dia ' + x.dia),
        datasets: [
            {
                label: 'Total de Imunizados - 1° Dose',
                borderColor: '#f06400',
                backgroundColor: '#00a63d',
                pointHoverBackgroundColor: '#f06400',
                borderWidth: 2,
                lineTension: 1,
                fill: true,
                data: totalImunizadosFilter.map(x => x.total),
            },
            {
                label: 'Total de Imunizados - 2° Dose',
                borderColor: '#b67c15',
                backgroundColor: '#393637',
                pointHoverBackgroundColor: '#b67c15',
                borderWidth: 2,
                lineTension: 1,
                fill: true,
                data: totalImunizadosFilter.map(x => x.total_segunda),
            },
        ],
    };

    const totalImunizadosGraph = {
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
            text: 'Total de Imunizados por Dia',
        },
        scales: {
            yAxes: [
                {
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
            xAxes: [
                {
                    stacked: true,
                },
            ],
        },
        elements: {
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
            <Bar
                data={totalCasosImunizadosGraph}
                options={totalImunizadosGraph} />
        </div>
    );
};