import React from 'react';
import {
    Line,
} from 'react-chartjs-2';
import Tabletop from 'tabletop';

const urlBoletimAmargosa = 'https://docs.google.com/spreadsheets/d/1uR3gZrd98Yx7asgZL9bmVhj4zBQyVLYWyheUeDsJBII/edit#gid=0'

export default function GrafConf() {

    const [dadosConfirmado, setDadosConfirmado] = React.useState([]);

     React.useEffect(() => {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: dataSheets,
                simpleSheet: true,
            });
    }, []);

    const dataSheets = (data, tabletop) => setDadosConfirmado(data);

    const graphCaseConf = {

        labels: dadosConfirmado.map(x => x.confirmado),
        datasets: [
            {
                label: 'Confirmado',
                backgroundColor: 'transparent',
                borderColor: '#f06400',
                pointHoverBackgroundColor: '#f06400',
                borderWidth: 2,
                lineTension: 1,
                data: dadosConfirmado.map(x => x.confirmado),
            },
        ],
    }

    const graphCaseConfOpt = {
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
            text: 'Dados Confirmado'
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
                radius: 0,
                pointStyle: 'triangle',
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            },
            borderColor: "#f4e3fa",
            borderWidth: 5,
            /*line: {
                tension: 2,
                stepped: true
            }*/
        },
        legend: {
            display: false,
            labels: {
                // This more specific font property overrides the global property
                fontColor: '#f1d9f9',
                fontSize: 10,
                boxWidth: 10
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
                data={graphCaseConf}
                options={graphCaseConfOpt} />
        </div>
    );
};