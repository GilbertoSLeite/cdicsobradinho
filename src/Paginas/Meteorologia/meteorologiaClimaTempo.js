import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import ClimaTempo from '../../Dados/ClimaTempo/climaTempo';
let direcaoVento = '';
const useStyles = makeStyles(() => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
        padding: '0',
        backgroundColor: '#0a5d5e',
    },
    grid: {
        width: "100%",
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#152445',
        opacity: '85%',

    },
    CardContent: {
        backgroundColor: '#152445',
        opacity: '90%',
    },
    tipografia: {
        color: "#ffffff"
    },
}));

const apiClima = 'https://apiadvisor.climatempo.com.br/api/v1/weather/locale/7961/current?token=28fc0556706e2e56cbaa5655e5d5360e'

export default function Metereologia() {

    const classes = useStyles();

    const [climaTempo, setClimaTempo] = React.useState([]);
    const [dataClimaTempo, setDataClimaTempo] = React.useState([]);

    React.useEffect(() => {
        climaTempoDados();
        async function climaTempoDados() {
            try {
                const reponse = await fetch(apiClima);
                const json = await reponse.json();
                setClimaTempo(json);
            } catch (error) {
                console.log('Desenvolvedor ocorreu este erro: ' + error);
            };
        };
    }, []);

    React.useEffect(() => {
        cataClimaTempoDados();
        async function cataClimaTempoDados() {
            try {
                const reponse = await fetch(apiClima);
                const json = await reponse.json();
                setDataClimaTempo(json.data);
            } catch (error) {
                console.log('Desenvolvedor ocorreu este erro: ' + error);
            };
        };
    }, []);

    
    switch (dataClimaTempo.wind_direction) {
        case 'E': direcaoVento = 'Leste';
            break;
        case 'NE': direcaoVento = 'Nordeste';
            break;
        case 'SE': direcaoVento = 'Sudeste';
            break;
        case 'S': direcaoVento = 'Sul';
            break;
        case 'SW': direcaoVento = 'Sudoeste';
            break;
        case 'W': direcaoVento = 'Oeste';
            break;
        case 'NW': direcaoVento = 'Noroeste';
            break;
        case 'N': direcaoVento = 'Norte';
            break;
        default: direcaoVento = 'Qualquer Um';
    }

    return (
        <React.Fragment>
            <div
                className={classes.root}
            >
                <Grid
                    container
                    justify="center"
                >
                    <Grid
                        id="gridMeteorologia"
                        container
                        spacing={3}
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                        className={classes.grid}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <Typography paragraph></Typography>
                            <Card
                                className={classes.card}
                                raised={true}
                            >
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        className={classes.tipografia}
                                        align='center'
                                        variant="h6" >
                                        {climaTempo.name} -  {climaTempo.state}
                                    </Typography>
                                    <ClimaTempo />
                                    <Typography
                                        gutterBottom
                                        className={classes.tipografia}
                                        align='center'
                                        variant='body1'>
                                        Condição do Tempo: {dataClimaTempo.condition}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <Typography paragraph></Typography>
                            <Card
                                className={classes.card}
                                raised={true}
                            >
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        className={classes.tipografia}
                                        align='center'
                                        variant="h6" >
                                        {climaTempo.name} -  {climaTempo.state}
                                    </Typography>
                                    <ClimaTempo />
                                    <Typography
                                        gutterBottom
                                        className={classes.tipografia}
                                        align='center'
                                        variant='body1'>
                                        Direção do Vento: {direcaoVento}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <Typography paragraph></Typography>
                            <Card
                                className={classes.card}
                                raised={true}
                            >
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        className={classes.tipografia}
                                        align='center'
                                        variant="h6" >
                                        {climaTempo.name} -  {climaTempo.state}
                                    </Typography>
                                    <ClimaTempo />
                                    <Typography
                                        gutterBottom
                                        className={classes.tipografia}
                                        align='center'
                                        variant='body1'>
                                        Velocidade do Vento: {dataClimaTempo.wind_velocity} km/h
                            </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <Typography paragraph></Typography>
                            <Card
                                className={classes.card}
                                raised={true}
                            >
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        className={classes.tipografia}
                                        align='center'
                                        variant="h6" >
                                        {climaTempo.name} -  {climaTempo.state}
                                    </Typography>
                                    <ClimaTempo />
                                    <Typography
                                        gutterBottom
                                        className={classes.tipografia}
                                        align='center'
                                        variant='body1'>
                                        Umidade do Ar: {dataClimaTempo.humidity} %
                            </Typography>
                                </CardContent>
                            </Card>
                            <Typography paragraph></Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <Typography paragraph></Typography>
                            <Card
                                className={classes.card}
                                raised={true}
                            >
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        className={classes.tipografia}
                                        align='center'
                                        variant="h6" >
                                        {climaTempo.name} -  {climaTempo.state}
                                    </Typography>
                                    <ClimaTempo />
                                    <Typography
                                        gutterBottom
                                        className={classes.tipografia}
                                        align='center'
                                        variant='body1'>
                                        Sensação Térmica: {dataClimaTempo.sensation}º
                            </Typography>
                                </CardContent>
                            </Card>
                            <Typography paragraph></Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <Typography paragraph></Typography>
                            <Card
                                className={classes.card}
                                raised={true}
                            >
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        className={classes.tipografia}
                                        align='center'
                                        variant="h6" >
                                        {climaTempo.name} -  {climaTempo.state}
                                    </Typography>
                                    <ClimaTempo />
                                    <Typography
                                        gutterBottom
                                        className={classes.tipografia}
                                        align='center'
                                        variant='body1'>
                                        Pressão Atmosférica: {dataClimaTempo.pressure} hPa
                            </Typography>
                                </CardContent>
                            </Card>
                            <Typography paragraph></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment >
    )
}