import React from 'react';
import {
    Bar,
} from 'react-chartjs-2';

export default function GrafMediaMovMor() {

    const [mediaMovelData, setMediaMovelData] = React.useState([]);

    React.useEffect(() => {
        mediaMovelData();
        async function mediaMovelData() {
            try {
                const dadosConfiguracoes = []
                var dadosBoletim = dadosConfiguracoes.map(x => x.apiBoletim);
                dadosBoletim = dadosBoletim[dadosBoletim.length - 1];
                const urlMediaMovel = dadosBoletim;
                const response = await fetch(urlMediaMovel);
                const data = await response.json();
                setMediaMovelData(data);
            } catch (error) {
                console.log('Desenvolvedor ocorreu o seguinte erro em Gráfico Média Móvel Morte: ' + error);
            };
        };
    }, []);

    var dadosMMM = mediaMovelData.map((x) => x);

    function funMediaMovelMorte() {
        var conf = dadosMMM.map(x => x.mortes);
        var total = conf.length;
        var sma = require('sma');
        for (var i = 0; i < total; i++) {
            return sma(conf, 7);
        }
    };

    function dataQuadro(value) {
        var valor = ('' + value + '');

        var dia = valor.substring(8, 10);
        var mes = valor.substring(5, 7);
        var ano = valor.substring(0, 4);

        return [dia, mes, ano].join('/');

    };

    var mediaMovelMorte = funMediaMovelMorte();

    const totalCasosMMM = {

        labels: dadosMMM.map(x => dataQuadro(x.data_registro)),
        datasets: [
            {
                type: 'bar',
                label: 'Confirmado',
                fill: false,
                borderWidth: 2,
                backgroundColor: '#f06400',
                borderColor: '#f06400',
                data: dadosMMM.map(x => x.mortes),
            },
            {
                type: 'line',
                label: 'Média Móvel',
                borderColor: '#e1fd03',
                borderWidth: 2,
                data: mediaMovelMorte,
            }
        ]
    }

    const totalCasosMMMOpt = {
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
            text: 'Média Móvel Confirmado'
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
            <Bar
                data={totalCasosMMM}
                options={totalCasosMMMOpt} />
        </div>
    );
};