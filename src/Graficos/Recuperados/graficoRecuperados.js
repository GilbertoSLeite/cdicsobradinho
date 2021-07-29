import React from 'react';
import {
    Doughnut,
} from 'react-chartjs-2';
import Tabletop from 'tabletop';

const urlBoletimAmargosa = 'https://docs.google.com/spreadsheets/d/1uR3gZrd98Yx7asgZL9bmVhj4zBQyVLYWyheUeDsJBII/edit#gid=0'

export default function GrafRecuperado() {

    const [dadosRecuperados, setDadosRecuperados] = React.useState([]);

    React.useEffect(() => {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: function (data, tabletop) {
                    setDadosRecuperados(data);
                },
                simpleSheet: true,
            });
    }, []);

    var ultimaInformacao = dadosRecuperados[dadosRecuperados.length - 1] === undefined ? 0 : dadosRecuperados[dadosRecuperados.length - 1];
    var ultimoConfirmado = (ultimaInformacao.confirmado);
    var ultimoObitos = (ultimaInformacao.mortes);
    var ultimoRecuperado = (ultimaInformacao.recuperados);

    const totalCasosSemiCircle = {
        labels: ['Confirmados', 'Mortos', 'Recuperados'],
        datasets: [
            {
                labels: ['Confirmados', 'Mortos', 'Recuperados'],
                backgroundColor: ['#e2ff00', '#de1813', '#28de13'],
                borderColor: ['#e2ff00', '#de1813', '#28de13'],
                pointHoverBackgroundColor: ['#de1813', '#ff006b', '#28de13'],
                borderWidth: 2,
                lineTension: 1,
                data: [ultimoConfirmado, ultimoObitos, ultimoRecuperado]
            },
        ],
    }

    const totalCasosSemiCircleOpt = {
        enabled: true,
        maintainAspectRatio: false,
        responsive: true,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        title: {
            display: true,
            fontColor: '#00a63d',
            text: 'Confirmados, Mortes e Recuperados'
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawOnChartArea: true,
                        color: '#00a63d',
                    },
                }],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                    },
                }],
        },
        elements: {
            point: {
                radius: 5,
                pointStyle: 'triangle',
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            },
            borderColor: "#f4e3fa",
            borderWidth: 20,
            line: {
                tension: 2,
                stepped: true
            }
        },
        legend: {
            display: false,
            labels: {
                // This more specific font property overrides the global property
                fontColor: '#f1d9f9',
                fontSize: 10,
                boxWidth: 10
            },
        },
        animation: {
            duration: 4000, // general animation time
            easing: 'easeOutBounce',//'easeInOutBounce',easeOutElastic  easeOutBack
        },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        cutoutPercentage: 85,
    };
    return (
        <div>
            <Doughnut
                data={totalCasosSemiCircle}
                options={totalCasosSemiCircleOpt} />
        </div >
    );
};