import React from 'react';
import {
    makeStyles,
} from '@material-ui/core';
import CustomTooltips from "../../Componentes/CustomTooltips/CustomTooltips";
import Tabletop from "tabletop";
import {
    Doughnut,
} from 'react-chartjs-2';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#152445',
    },
}));

const urlObtComorbidade = 'https://docs.google.com/spreadsheets/d/10talpf2xQraifk8PrUNinrmR1Jr2EJYUA1Yd59Mi0Rc/edit#gid=0'

export default function GraficoComorbidade() {

    const classes = useStyles();

    const [obtComoCovidBa, setObtComoCovidBa] = React.useState([]);

    React.useEffect(() => {
        googleObitoComorbidade();
        function googleObitoComorbidade() {
            Tabletop.init({
                key: urlObtComorbidade,
                callback: function (data, tabletop) {
                    setObtComoCovidBa(data);
                },
                simpleSheet: true,
            })
        };
    }, []);


    const mainChartComobirdadeBa = {
        labels: obtComoCovidBa.map(x => x.doenca),
        datasets: [
            {
                label: obtComoCovidBa.map(x => x.doenca),
                backgroundColor: ['#ff0202', '#7900ff', '#15ca9e', '#199e48', '#dcbc89', '#633d00', '#a7a39d', '#f67777', '#080007', '#0b006a'],
                borderColor: ['#ff0202', '#7900ff', '#15ca9e', '#199e48', '#dcbc89', '#633d00', '#a7a39d', '#f67777', '#080007', '#0b006a'],
                pointHoverBackgroundColor: ['#ff0202', '#7900ff', '#15ca9e', '#199e48', '#dcbc89', '#633d00', '#a7a39d', '#f67777', '#080007', '#0b006a'],
                borderWidth: 3,
                data: obtComoCovidBa.map(x => x.casos),
            }
        ],
    };

    const mainChartComobirdadeBaOpts = {
        tooltips: {
            enabled: true,
            responsive: true,
            custom: CustomTooltips,
            intersect: false,
            mode: 'index',
            position: 'nearest',
            type: 'horizontalBar',
            callbacks: {
                labelColor: function (tooltipItem, chart) {
                    return {
                        backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor
                    };
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
                <Doughnut data={mainChartComobirdadeBa} options={mainChartComobirdadeBaOpts} height={500} />
            </div>
        </React.Fragment>
    );
};
