import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    CardHeader,
    Avatar,
    Grid,
    Card,
    CardContent,
    Typography,
    TextField
} from '@material-ui/core';
import {
    TimelineOutlined
} from '@material-ui/icons';
import {
    Doughnut
} from 'react-chartjs-2';
import Tabletop from 'tabletop';

const urlBoletimAmargosa = 'https://docs.google.com/spreadsheets/d/1uR3gZrd98Yx7asgZL9bmVhj4zBQyVLYWyheUeDsJBII/edit#gid=0'

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
    dataGrafico: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
}));

const dataHoje = new Date()
const dataFormatHoje = (dataHoje.getFullYear() +'-'+ (dataHoje.getMonth() < 10 ? '0' + (dataHoje.getMonth() +1) : (dataHoje.getMonth() +1)) +'-'+ (dataHoje.getDate() < 10 ? '0' + dataHoje.getDate() : dataHoje.getDate()) );

export default function TimeLineD() {

    const classes = useStyles();

    const [boletinsDados, setBoletinsDados] = React.useState(null);
    const [dataRegistro, setDataRegistro] = React.useState(dataFormatHoje);

    React.useEffect(() => {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: dataSheets,
                simpleSheet: true,
            });
    }, []);

    const dataSheets = (data, tabletop) => setBoletinsDados(data);

    if (boletinsDados !== null) {
        var dadosBoletins = boletinsDados.map(x => x).filter((data) => data.data_boletim === dataRegistro);
        var dadosMonitorados = dadosBoletins.map(x => parseInt(x.monitorados));
        var dadosAguardandoResultado = dadosBoletins.map(x => parseInt(x.aguardando));
        var dadosDescartados = dadosBoletins.map(x => parseInt(x.descartado));
        var dadosConfirmados = dadosBoletins.map(x => parseInt(x.confirmado));
        var dadosMortes = dadosBoletins.map(x => parseInt(x.mortes));
        var dadosRecuperados = dadosBoletins.map(x => parseInt(x.recuperados));
        var ultRegistro = boletinsDados[boletinsDados.length - 1].data_boletim
    } else {
        dadosBoletins = []
        dadosMonitorados = 0;
        dadosAguardandoResultado = 0;
        dadosDescartados = 0;
        dadosConfirmados = 0;
        dadosMortes = 0;
        dadosRecuperados = 0;
        ultRegistro = dataFormatHoje
    };

    const graphCelBoletins = {
        labels: ['Monitorados', 'Aguardando Resultado', 'Descartados', 'Confirmados', 'Mortes', 'Recuperados'],
        datasets: [
            {
                label: ['Monitorados', 'Aguardando Resultado', 'Descartados', 'Confirmados', 'Mortes', 'Recuperados'],
                backgroundColor: ['#fffe00', '#48d4a4', '#ffffff', '#fb02dd', '#ff0202', '#f06400'],
                borderColor: ['#fffe00', '#48d4a4', '#ffffff', '#fb02dd', '#ff0202', '#f06400'],
                pointHoverBackgroundColor: ['#4a4c4b', '#4a4c4b', '#4a4c4b', '#4a4c4b', '#4a4c4b', '#4a4c4b'],
                borderWidth: 2,
                lineTension: 1,
                data: [
                    dadosMonitorados,
                    dadosAguardandoResultado,
                    dadosDescartados,
                    dadosConfirmados,
                    dadosMortes,
                    dadosRecuperados
                ],
            }
        ],
    }

    const optionCelGraphBoletins = {
        enabled: true,
        maintainAspectRatio: false,
        responsive: true,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawOnChartArea: false,
                        color: '#525e5b',
                    },
                }],
            yAxes: [
                {
                    gridLines: {
                        drawOnChartArea: false,
                        color: '#525e5b',
                    },
                    ticks: {
                        beginAtZero: true,
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
                fontSize: 8,
                boxWidth: 3
            },
        },
        animation: {
            duration: 4000, // general animation time
            easing: 'easeOutBounce',//'easeInOutBounce',easeOutElastic  easeOutBack
        },
        rotation: 2 * Math.PI,
        circumference: 2 * Math.PI,
        cutoutPercentage: 80,
    };

    return (
        <Grid
            item
            xs={12}
            sm={12}
        >
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
                    <Typography id="range-slider" className={classes.tipografia} align="center" gutterBottom>
                        Timeline de Casos em Sobradinho
                    </Typography>
                    <TextField
                        id='data_registro'
                        type='date'
                        className={classes.dataGrafico}
                        helperText="Data do Registro do Boletim Diário."
                        variant="outlined"
                        margin='dense'
                        defaultValue={ultRegistro}
                        onChange={(e) => setDataRegistro(e.target.value)}
                        required
                        fullWidth
                    />
                </CardContent>
                <div>
                    <Doughnut
                        data={graphCelBoletins}
                        options={optionCelGraphBoletins}
                        height={500}
                    />
                </div>
            </Card>
        </Grid>
    );
};