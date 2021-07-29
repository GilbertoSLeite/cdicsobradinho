import React from 'react';
import CustomTooltips from '../../Componentes/CustomTooltips/CustomTooltips';
import Tabletop from "tabletop";
import {
    Bar
} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#152445',
    },
}));

const urlFaixaEtaria = 'https://docs.google.com/spreadsheets/d/1oWlQBAHC-4ooIp6glM3rji35pb18Vm0AYpLK13nITvI/edit#gid=0';

export default function DadosFaixaEtaria() {

    const classes = useStyles();

    const [hosptIdadeBa, setHospIdaBa] = React.useState([]);

    React.useEffect(() => {
        googleHospIdaBa();
        function googleHospIdaBa() {
            Tabletop.init({
                key: urlFaixaEtaria,
                callback: function (data, tabletop) {
                    setHospIdaBa(data);
                },
                simpleSheet: true,
            })
        };
    }, []);
    const mainChartObtIdadeBa = {
        labels: hosptIdadeBa.map(x => x.idade).sort((a, b) => a - b),
        datasets: [
            {
                label: 'Hospitalização Por Faixa Etária',
                backgroundColor: ['#f67777', '#e34343', '#a42424', '#800909', '#ff0600', '#800909', '#a42424', '#e34343', '#f67777', '#000000', '#f0ff00'],//'#ff0600',
                borderColor: ['#f67777', '#e34343', '#a42424', '#800909', '#ff0600', '#800909', '#a42424', '#e34343', '#f67777', '#000000', '#f0ff00'],//'#574a57',
                pointHoverBackgroundColor: ['#f67777', '#e34343', '#a42424', '#800909', '#ff0600', '#800909', '#a42424', '#e34343', '#f67777', '#000000', '#f0ff00'],//'#fff',
                borderWidth: 3,
                data: hosptIdadeBa.map(x => x.casos).sort((a, b) => a - b),
            },
        ],
    }

    const mainChartObtIdadeBaOpts = {
        tooltips: {
            enabled: true,
            responsive: true,
            custom: CustomTooltips,
            intersect: false,
            mode: 'index',
            position: 'nearest',
            callbacks: {
                labelColor: function (tooltipItem, chart) {
                    return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
                }
            }
        },
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawOnChartArea: true,
                    },
                }],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                }],
        },
        elements: {
            point: {
                radius: 10,
                hitRadius: 10,
                hoverRadius: 10,
                hoverBorderWidth: 10,
            },
        },
    };

    return (
        <React.Fragment>
            <div
                className={classes.root}
            >
                <Bar data={mainChartObtIdadeBa} options={mainChartObtIdadeBaOpts} height={500} />
            </div>
        </React.Fragment>
    );
};