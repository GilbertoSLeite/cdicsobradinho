import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    CardHeader,
    Avatar,
    Slider,
    Grid,
    Card,
    CardContent,
    Typography,
    Hidden
} from '@material-ui/core';
import {
    TimelineOutlined
} from '@material-ui/icons';
import {
    Line,
    Bar
} from 'react-chartjs-2';
import Configuracoes from '../../Configuracoes/configuracoes';

const useStyles = makeStyles(() => ({
    card: {
        backgroundColor: '#152445',
        opacity: '55%',
        fontWeight: 'bold',
    },
    cardTitle: {
        backgroundColor: "#2d323c26",
        borderRadius: "3px",
        borderBottom: "0",
        marginBottom: "0",
        border: "0",
        color: "#ffffff",
        fontWeight: 'bold',
    },
    tipografia: {
        color: "#ffffff",
        fontWeight: 'bold',
    },
}))

export default function TimeLine() {

    const classes = useStyles();

    const [vIdDate, setIdDate] = React.useState([1, 500]);
    const [boletinsDados, setBoletinsDados] = React.useState(null);
    const [dadosConfiguracoes, setDadosConfiguracoes] = React.useState(null);

    React.useEffect(() => {
        returnDadosConfiguracao();
        async function returnDadosConfiguracao() {
            try {
                const dadosConfiguracoes = await Configuracoes();
                var dadosBoletim = dadosConfiguracoes.map(x => x);
                dadosBoletim = dadosBoletim[dadosBoletim.length - 1];
                const urlDadosConfiguracoes = dadosBoletim;
                const response = await fetch(urlDadosConfiguracoes);
                var data = await response.json();
                setDadosConfiguracoes(data)
            } catch (error) {
                console.error('Meu caro Hacker ocorreu o seguinte error em Time Line: ' + error + ' analise com carinho para que não ocorra novamente.')
            };
        };
    }, []);

    if (dadosConfiguracoes !== null) {
        var nomeMunicipio = dadosConfiguracoes.map(x => x.nomeMunicipio);
    } else {
        nomeMunicipio = 'LS Consultoria & Sistemas LTDA';
    };


    if (boletinsDados !== null) {
        var dadosBoletins = boletinsDados.map((x, y) => x).filter(arrayRows);
        var totalBoletins = boletinsDados.length;
    } else {
        dadosBoletins = [];
        totalBoletins = 0;
    };

    React.useEffect(() => {
        boletinsTLDados()
        async function boletinsTLDados() {
            try {
                const dadosConfiguracoes = await Configuracoes();
                var dadosBoletim = dadosConfiguracoes.map(x => x.apiBoletim);
                dadosBoletim = dadosBoletim[dadosBoletim.length - 1];
                const urlBoletins = dadosBoletim;
                const reponse = await fetch(urlBoletins);
                const data = await reponse.json();
                setBoletinsDados(data);
            } catch (error) {
                console.log('Desenvolvedor ocorreu o seguinte erro em Gráfico Timeline: ' + error);
            };
        };
    }, []);

    const handleChangeData = (e, v) => {
        setIdDate(v);
    };

    function valuetext(value) {
        return value;
    };

    function arrayRows(value) {
        var ini = vIdDate[0];
        var fim = vIdDate[1];
        if (parseInt(value.id) >= parseInt(ini)) {
            for (parseInt(value.id) >= parseInt(ini); parseInt(value.id) <= parseInt(fim); value.id++) {
                return value
            }
        }
    };

    function dataQuadro(value) {
        var valor = ('' + value + '');
        var dia = valor.substring(8, 10);
        var mes = valor.substring(5, 7);
        var ano = valor.substring(0, 4);

        return [dia, mes, ano].join('/');
    };

    const graphBoletins = {
        labels: dadosBoletins.map(x => dataQuadro(x.data_registro)),
        datasets: [
            {
                showLine: false,
                label: 'Monitorados',
                backgroundColor: '#fffe00',
                borderColor: '#fffe00',
                data: dadosBoletins.map(x => x.monitorado),
                yAxisID: 'y',
                fill: false,
            },
            {
                showLine: false,
                label: 'Aguardando Resultado',
                backgroundColor: '#48d4a4',
                borderColor: '#48d4a4',
                pointHoverBackgroundColor: '#fff',
                data: dadosBoletins.map(x => x.aguardando),
                yAxisID: 'y1',
                fill: false,
            },
            {
                showLine: false,
                label: 'Descartados',
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
                data: dadosBoletins.map(x => x.descartado),
                yAxisID: 'y2',
                fill: false,
            },
            {
                label: 'Confirmados',
                backgroundColor: '#fb02dd',
                borderColor: '#fb02dd',
                data: dadosBoletins.map(x => x.confirmado),
                yAxisID: 'y3',
                fill: false,
            },
            {
                label: 'Mortes',
                backgroundColor: '#ff0202',
                borderColor: '#ff0202',
                data: dadosBoletins.map(x => x.mortes),
                yAxisID: 'y4',
                fill: false,
            },
            {
                label: 'Recuperados',
                backgroundColor: '#f06400',
                borderColor: '#f06400',
                data: dadosBoletins.map(x => x.recuperados),
                yAxisID: 'y5',
                fill: false,
            },
        ],
    };

    const optionGraphBoletins = {
        responsive: true,
        intersect: true,
        axis: 'x',
        mode: 'index',
        position: 'nearest',
        maintainAspectRatio: false,
        scales: {
            yAxes: [
                {
                    id: 'y',
                    type: 'linear',
                    position: 'left',
                    gridLines: {
                        display: false,
                        color: '#ffffff',
                        drawOnChartArea: true,
                        drawTicks: true
                    },
                },
                {
                    id: 'y1',
                    type: 'linear',
                    position: 'right',
                    gridLines: {
                        display: false,
                        color: '#ffffff',
                        drawOnChartArea: false,
                        drawTicks: false
                    }
                },
                {
                    id: 'y2',
                    type: 'linear',
                    position: 'left',
                    gridLines: {
                        display: false,
                        color: '#ffffff',
                        drawOnChartArea: true,
                        drawTicks: true
                    }
                },
                {
                    id: 'y3',
                    type: 'linear',
                    position: 'right',
                    gridLines: {
                        display: false,
                        color: '#ffffff',
                        drawOnChartArea: false,
                        drawTicks: false
                    }
                },
                {
                    id: 'y4',
                    type: 'linear',
                    position: 'left',
                    gridLines: {
                        display: false,
                        color: '#ffffff',
                        drawOnChartArea: true,
                        drawTicks: true
                    }
                },
                {
                    id: 'y5',
                    type: 'linear',
                    position: 'right',
                    gridLines: {
                        display: false,
                        color: '#ffffff',
                        drawOnChartArea: false,
                        drawTicks: false
                    }
                }]
        },
        legend: {
            display: true,
            labels: {
                boxWidth: 20,
                fontSize: 20,
                fontStyle: 'bold',
            }

        },
        title: {
            display: true,
            fontStyle: 'bold',
        },
        elements: {
            point: {
                radius: 3,
                pointStyle: 'triangle',
                backgroundColor: '#000201',
                borderColor: '#000201',
                borderWidth: 2,
                hitRadius: 2,
                hoverRadius: 4,
                hoverBorderWidth: 2,
            },
            line: {
                tensio: 0.4,
                borderCapStyle: 'round',
                borderJoinStyle: 'bevel'
            },
        },
        animation: {
            durationduration: 4000,
            easing: 'easeOutElastic'
        },
    };

    const graphCelBoletins = {
        labels: dadosBoletins.map(x => dataQuadro(x.data_registro)),
        datasets: [
            {
                label: 'Monitorados',
                fill: false,
                showLine: false,
                backgroundColor: '#fffe00',
                borderColor: '#fffe00',
                data: dadosBoletins.map(x => x.monitorado),
            },
            {
                label: 'Aguardando Resultado',
                fill: true,
                showLine: true,
                backgroundColor: '#48d4a4',
                borderColor: '#48d4a4',
                pointHoverBackgroundColor: '#fff',
                data: dadosBoletins.map(x => x.aguardando),
            },
            {
                label: 'Descartados',
                fill: false,
                showLine: false,
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
                data: dadosBoletins.map(x => x.descartado),
            },
            {
                label: 'Confirmados',
                fill: true,
                showLine: true,
                backgroundColor: '#fb02dd',
                borderColor: '#fb02dd',
                data: dadosBoletins.map(x => x.confirmado),
            },
            {
                label: 'Mortes',
                fill: false,
                showLine: false,
                backgroundColor: '#ff0202',
                borderColor: '#ff0202',
                data: dadosBoletins.map(x => x.mortes),
            },
            {
                label: 'Recuperados',
                fill: true,
                showLine: true,
                backgroundColor: '#f06400',
                borderColor: '#f06400',
                data: dadosBoletins.map(x => x.recuperados),
            },
        ],
    }

    const optionCelGraphBoletins = {
        enabled: true,
        maintainAspectRatio: false,
        responsive: true,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        animation: {
            durationduration: 4000,
            easing: 'easeOutElastic'
        },
        title: {
            display: true,
            fontColor: '#00a63d',
        },
        elements: {
            point: {
                radius: 3,
                pointStyle: 'triangle',
                backgroundColor: '#000201',
                borderColor: '#000201',
                borderWidth: 2,
                hitRadius: 2,
                hoverRadius: 4,
                hoverBorderWidth: 2,
            },
            line: {
                tensio: 0.4,
                borderCapStyle: 'round',
                borderJoinStyle: 'bevel'
            },
        },
        legend: {
            display: true,
            labels: {
                // This more specific font property overrides the global property
                fontColor: '#f1d9f9',
                fontSize: 10,
                boxWidth: 10
            }
        },
    }

    return (
        <Grid item xs={12} sm={12}>
            <Card
                className={classes.card}
            >
                <CardHeader
                    className={classes.cardTitle}
                    avatar={
                        <Avatar>
                            <TimelineOutlined />
                        </Avatar>
                    }
                    title='Dados Gráficos'
                />
                <CardContent>
                    <Hidden smDown={true} >
                        <Typography id="range-slider" className={classes.tipografia} align="center" gutterBottom>
                            Timeline de Casos em {nomeMunicipio}
                        </Typography>
                        <Slider
                            value={vIdDate}
                            min={1}
                            max={totalBoletins === undefined ? 60 : totalBoletins}
                            onChange={handleChangeData}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                        />
                    </Hidden>
                </CardContent>
                <Hidden smDown={true} >
                    <div>
                        <Line data={graphBoletins} options={optionGraphBoletins} height={500} />
                    </div>
                </Hidden>
                <Hidden mdUp={true} >
                    <CardContent>
                        <Typography id="range-slider" className={classes.tipografia} align="center" gutterBottom>
                            Dados Gerais de Casos em {nomeMunicipio}
                        </Typography>
                        <Slider
                            value={vIdDate}
                            min={1}
                            max={totalBoletins === undefined ? 60 : totalBoletins}
                            onChange={handleChangeData}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                        />
                    </CardContent>
                    <div>
                        <Bar data={graphCelBoletins} options={optionCelGraphBoletins} height={500} />
                    </div>
                </Hidden>
            </Card>
        </Grid>
    );
};