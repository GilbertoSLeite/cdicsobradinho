import React from 'react';
import {
    Line,
} from 'react-chartjs-2';
import Tabletop from 'tabletop';

const urlVacinacaoAmargosa = 'https://docs.google.com/spreadsheets/d/1CXV4Ut-a1JNya-TWfmMhqm8ziydSrpQmAShsp8aB6to/edit#gid=0'

export default function GrafImunizadoIdoso() {

    const [imunizadoIdoso, setImunizadoIdoso] = React.useState([]);

    React.useEffect(() => {
        imunizadosIdosoData();
        async function imunizadosIdosoData() {
            try {
                Tabletop.init({
                    key: urlVacinacaoAmargosa,
                    callback: function (data, tabletop) {
                        setImunizadoIdoso(data);
                    },
                    simpleSheet: true,
                });
            } catch (error) {
                console.error('Meu caro Hacker ocorreu o seguinte error em Gráfico Aguarda: ' + error + ' analise com carinho para que não ocorra novamente.')
            };
        };
    }, []);

    function FilterMaiorZero(value) {
        if (value.idoso > 0) {
            return value
        };
    };

    const imunizadoIdosoPrimeira = imunizadoIdoso.map(x=>x).filter(FilterMaiorZero);

    const totalCasosImunizadosIdoso = {

        labels: imunizadoIdosoPrimeira.map(x => 'Dia ' + x.dia),
        datasets: [
            {
                label: 'Idosos - Primeira Dose',
                backgroundColor: '#f1d9f9',
                borderColor: '#f06400',
                pointHoverBackgroundColor: '#f06400',
                borderWidth: 2,
                lineTension: 1,
                fill: false,
                data: imunizadoIdosoPrimeira.map(x => x.idoso),
            },
        ],
    };

    const totalImunizadosIdoso = {
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
            text: 'Idosos - Primeira Dose',
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
                        beginAtZero: true,
                        color: '#00a63d',
                        suggestedMin: 0
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
                stepped: true,
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
                data={totalCasosImunizadosIdoso}
                options={totalImunizadosIdoso} />
        </div>
    );
};