import React from 'react';
import {
    HorizontalBar,
} from 'react-chartjs-2';
import Tabletop from 'tabletop';

const urlBoletimAmargosa = 'https://docs.google.com/spreadsheets/d/1uR3gZrd98Yx7asgZL9bmVhj4zBQyVLYWyheUeDsJBII/edit#gid=0'

export default function GrafDesc() {

    const [descartadoData, setDescartadoData] = React.useState([]);

     React.useEffect(() => {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: function (data, tabletop) {
                    setDescartadoData(data);
                },
                simpleSheet: true,
            });
    }, []);

    const totalCasosDescart = {
        labels: descartadoData.map(x => x.descartado),
        datasets: [
            {
                label: 'Descartados',
                backgroundColor: 'transparent',
                borderColor: '#f06400',
                pointHoverBackgroundColor: '#f06400',
                borderWidth: 2,
                lineTension: 1,
                data: descartadoData.map(x => x.descartado),
            },
        ],
    }

    const totalCasosDescartOpt = {
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
            text: 'Dados Descartados'
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
            <HorizontalBar
                data={totalCasosDescart}
                options={totalCasosDescartOpt} />
        </div>
    );
};