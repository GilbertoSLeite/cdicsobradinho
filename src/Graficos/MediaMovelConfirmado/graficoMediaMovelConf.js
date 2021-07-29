import React from 'react';
import {
    Bar,
} from 'react-chartjs-2';
import {
  ma
} from 'moving-averages';
import Tabletop from 'tabletop';

const urlBoletimAmargosa = 'https://docs.google.com/spreadsheets/d/1jWdhJzC8sEsuSndR6RoHuqNwFJr_IT5PSZyY1x8BNJI/edit#gid=0'

export default function GrafMediaMovConf() {

    const [mediaMovelData, setMediaMovelData] = React.useState(null);

    React.useEffect(() => {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: function (data, tabletop) {
                    setMediaMovelData(data);
                },
                simpleSheet: true,
            });
    }, []);

    if(mediaMovelData !== null){
        var lastData = mediaMovelData.map(x=>x).filter((data) => (parseInt(data.id) > (mediaMovelData.length - 7)))        
        const datasConfirmado = lastData.map(x => parseInt(x.confirmado_dia))
        console.log('datasConfirmado ', datasConfirmado)
    }else{
        return 0
    }  

    function funMediaMovelConf() {
        if(mediaMovelData !== null){
        var lastData = mediaMovelData.map(x=>x).filter((data) => (parseInt(data.id) > (mediaMovelData.length - 7)))        
        const datasConfirmado = lastData.map(x => parseInt(x.confirmado_dia))
        var mediaMovelConf = ma(datasConfirmado,7)
        console.log('mediaMovelConf ', mediaMovelConf)
        console.log('mediaMovelConf[6] ', mediaMovelConf[6])
        return mediaMovelConf[6]
    }else{
        return 0
    }  
    };

    function dataQuadro(value) {
        var valor = ('' + value + '');

        var dia = valor.substring(8, 10);
        var mes = valor.substring(5, 7);
        var ano = valor.substring(0, 4);

        return [dia, mes, ano].join('/');

    };

    var mediaMovelConf = funMediaMovelConf();

    console.log('mediaMovelConf ', mediaMovelConf)

    const totalCasosMMC = {

        labels: mediaMovelData.map(x => dataQuadro(x.data_registro)),
        datasets: [
            {
                type: 'bar',
                label: 'Confirmado',
                fill: false,
                borderWidth: 2,
                backgroundColor: '#f06400',
                borderColor: '#f06400',
                data: mediaMovelData.map(x => x.confirmado),
            },
            {
                type: 'line',
                label: 'Média Móvel',
                borderColor: '#e1fd03',
                borderWidth: 2,
                data: mediaMovelConf,
            }
        ]
    }

    const totalCasosMMCOpt = {
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
                data={totalCasosMMC}
                options={totalCasosMMCOpt} />
        </div>
    );
};