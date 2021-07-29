import React from 'react';
import {
    Bar,
} from 'react-chartjs-2';
import Tabletop from 'tabletop';

const urlVacinacaoAmargosa = 'https://docs.google.com/spreadsheets/d/1CXV4Ut-a1JNya-TWfmMhqm8ziydSrpQmAShsp8aB6to/edit#gid=0'

export default function GrafImunizadoPcDSeguda() {

    const [imunizadoPcD, setImunizadoPcD] = React.useState([]);

    React.useEffect(() => {
        imunizadosSaudeData();
        async function imunizadosSaudeData() {
            try {
                Tabletop.init({
                    key: urlVacinacaoAmargosa,
                    callback: function (data, tabletop) {
                        setImunizadoPcD(data);
                    },
                    simpleSheet: true,
                });
            } catch (error) {
                console.error('Meu caro Hacker ocorreu o seguinte error em Gráfico Aguarda: ' + error + ' analise com carinho para que não ocorra novamente.')
            };
        };
    }, []);

    function FilterMaiorZero(value) {
        if (value.cidadao_especial_segunda > 0) {
            return value
        };
    };

    const imunizadoPcDSegunda = imunizadoPcD.map(x => x).filter(FilterMaiorZero);

    const totalCasosImunizadosPcD = {

        labels: imunizadoPcDSegunda.map(x => 'Dia - ' + x.dia),
        datasets: [
            {
                label: 'PcD - Pessoa com Deficiência - Segunda Dose',
                borderColor: '#f06400',
                backgroundColor: '#00a63d',
                pointHoverBackgroundColor: '#f06400',
                borderWidth: 2,
                lineTension: 1,
                fill: true,
                data: imunizadoPcDSegunda.map(x => x.cidadao_especial_segunda),
            },
        ],
    };

    const totalImunizadosImunizadosPcD = {
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
            text: 'PcD - Pessoa com Deficiência - Segunda Dose',
        },
        scales: {
            xAxes: [
                {
                    scaleLabel: {
                        display: false,
                    },
                    //mirror: true,
                }],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        //mirror: true,
                    },
                },
            ],
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
            <Bar
                data={totalCasosImunizadosPcD}
                options={totalImunizadosImunizadosPcD} />
        </div>
    );
};